'use client'

import { useEffect, useRef, useState } from 'react'

type Props = {
  end: number
  suffix?: string
  duration?: number
  formatter?: (n: number) => string
}

export default function CountUp({ end, suffix = '', duration = 1400, formatter }: Props) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(end)
      return
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !started.current) {
          started.current = true
          const t0 = performance.now()
          const tick = (now: number) => {
            const p = Math.min(1, (now - t0) / duration)
            const eased = 1 - Math.pow(1 - p, 3)
            setValue(Math.round(end * eased))
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          io.disconnect()
        }
      })
    }, { threshold: 0.4 })
    io.observe(node)
    return () => io.disconnect()
  }, [end, duration])

  const display = formatter ? formatter(value) : value.toLocaleString('en-IN')
  return <span ref={ref}>{display}{suffix}</span>
}
