'use client'

import React from 'react'

/* ======================================================
   ORNAMENTS & PATTERN COMPONENTS
   ====================================================== */

export const Divider = ({ wide = false }: { wide?: boolean }) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, padding: wide ? '8px 0' : '4px 0' }}>
    <span style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, rgba(138,109,42,.5))' }} />
    <svg width="48" height="14" viewBox="0 0 48 14" fill="none" stroke="#8a6d2a" strokeWidth="0.8" aria-hidden="true">
      <circle cx="24" cy="7" r="3" />
      <circle cx="24" cy="7" r="1.4" fill="#8a6d2a" />
      <path d="M0 7 L18 7" /><path d="M30 7 L48 7" />
      <path d="M14 7 L18 4 L18 10 Z" fill="#8a6d2a" />
      <path d="M34 7 L30 4 L30 10 Z" fill="#8a6d2a" />
    </svg>
    <span style={{ flex: 1, height: 1, background: 'linear-gradient(270deg, transparent, rgba(138,109,42,.5))' }} />
  </div>
)

export const TinyDiamond = ({ size = 6, color = '#8a6d2a' }: { size?: number; color?: string }) => (
  <span aria-hidden="true" style={{ display: 'inline-block', width: size, height: size, background: color, transform: 'rotate(45deg)', flexShrink: 0 }} />
)

export const Ornament = ({ size = 80 }: { size?: number }) => (
  <svg aria-hidden="true" width={size} height={size} viewBox="-50 -50 100 100" fill="none" stroke="#8a6d2a" strokeWidth="0.6" opacity="0.85">
    <circle r="38" strokeDasharray="2 4" />
    <circle r="28" />
    <g>
      <path d="M0 -28 Q8 -34 0 -42 Q-8 -34 0 -28 Z" />
      <path d="M0 -28 Q8 -34 0 -42 Q-8 -34 0 -28 Z" transform="rotate(60)" />
      <path d="M0 -28 Q8 -34 0 -42 Q-8 -34 0 -28 Z" transform="rotate(120)" />
      <path d="M0 -28 Q8 -34 0 -42 Q-8 -34 0 -28 Z" transform="rotate(180)" />
      <path d="M0 -28 Q8 -34 0 -42 Q-8 -34 0 -28 Z" transform="rotate(240)" />
      <path d="M0 -28 Q8 -34 0 -42 Q-8 -34 0 -28 Z" transform="rotate(300)" />
    </g>
    <circle r="4" fill="#8a6d2a" />
  </svg>
)

export const CornerOrnament = ({ size = 100 }: { size?: number }) => (
  <svg aria-hidden="true" width={size} height={size} viewBox="0 0 100 100" fill="none" stroke="#8a6d2a" strokeWidth="0.6" opacity="0.45">
    <path d="M0 0 L100 0" />
    <path d="M0 0 L0 100" />
    <path d="M0 0 Q50 10 50 50 Q10 50 0 0" />
    <circle cx="50" cy="50" r="3" fill="#8a6d2a" />
    <circle cx="20" cy="20" r="2" />
  </svg>
)

export const Seal = ({ size = 240, label = 'Est. 1970' }: { size?: number; label?: string }) => (
  <svg aria-hidden="true" width={size} height={size} viewBox="-100 -100 200 200" fill="none" stroke="#8a6d2a" strokeWidth="0.6">
    <defs>
      <path id="sealcircle" d="M0,-78 a78,78 0 1,1 -0.01,0" />
    </defs>
    <circle r="92" strokeDasharray="1 3" />
    <circle r="78" />
    <circle r="68" strokeDasharray="3 3" />
    <text fill="#8a6d2a" stroke="none" fontFamily="Manrope" fontSize="7" letterSpacing="5">
      <textPath href="#sealcircle">{`SUMTI TRADERS  ·  CHENNAI  ·  WHOLESALE  ·  ${label}  ·`}</textPath>
    </text>
    <g>
      <circle r="38" />
      <circle r="28" strokeDasharray="2 3" />
      <g>
        <path d="M0 -20 Q10 -28 0 -38 Q-10 -28 0 -20 Z" />
        <path d="M0 -20 Q10 -28 0 -38 Q-10 -28 0 -20 Z" transform="rotate(60)" />
        <path d="M0 -20 Q10 -28 0 -38 Q-10 -28 0 -20 Z" transform="rotate(120)" />
        <path d="M0 -20 Q10 -28 0 -38 Q-10 -28 0 -20 Z" transform="rotate(180)" />
        <path d="M0 -20 Q10 -28 0 -38 Q-10 -28 0 -20 Z" transform="rotate(240)" />
        <path d="M0 -20 Q10 -28 0 -38 Q-10 -28 0 -20 Z" transform="rotate(300)" />
      </g>
      <text textAnchor="middle" fontFamily="Cormorant Garamond" fontStyle="italic" fontSize="14" fill="#8a6d2a" stroke="none" y="3">S·T</text>
    </g>
  </svg>
)

/* ======================================================
   JEWELLERY LINE ILLUSTRATIONS
   ====================================================== */

const JewelNecklace = () => (
  <svg viewBox="-100 -100 200 200" fill="none" stroke="#3a322a" strokeWidth="0.6">
    <path d="M-78 -40 Q0 80 78 -40" stroke="#8a6d2a" strokeWidth="0.5" />
    <path d="M-78 -40 Q0 50 78 -40" />
    {Array.from({ length: 17 }).map((_, i) => {
      const t = i / 16, x = -78 + t * 156, y = -40 + 80 * 4 * t * (1 - t) * 0.65
      return <circle key={i} cx={Number(x.toFixed(4))} cy={Number(y.toFixed(4))} r={2.4} />
    })}
    <g>
      <path d="M0 36 L8 50 L0 76 L-8 50 Z" fill="#efe1be" stroke="#8a6d2a" />
      <circle cx="0" cy="52" r="4" stroke="#8a6d2a" />
      <circle cx="0" cy="52" r="1.5" fill="#8a6d2a" />
      <path d="M-3 64 L3 64" />
    </g>
    <circle cx="-78" cy="-40" r="3" fill="#8a6d2a" />
    <circle cx="78" cy="-40" r="3" fill="#8a6d2a" />
  </svg>
)

const JewelEarring = () => (
  <svg viewBox="-50 -60 100 140" fill="none" stroke="#3a322a" strokeWidth="0.6">
    <path d="M0 -50 Q-12 -50 -12 -40 Q-12 -32 -4 -32" stroke="#8a6d2a" />
    <circle cx="0" cy="-32" r="4" stroke="#8a6d2a" />
    <path d="M0 -28 L0 -8" />
    <g>
      <path d="M0 -6 L20 6 L24 30 L0 56 L-24 30 L-20 6 Z" fill="#efe1be" />
      <path d="M0 -6 L20 6 L24 30 L0 56 L-24 30 L-20 6 Z" />
      <circle cx="0" cy="20" r="6" stroke="#8a6d2a" />
      <circle cx="0" cy="20" r="2" fill="#8a6d2a" />
      <circle cx="-14" cy="44" r="2" fill="#8a6d2a" />
      <circle cx="0" cy="56" r="2" fill="#8a6d2a" />
      <circle cx="14" cy="44" r="2" fill="#8a6d2a" />
      <path d="M-14 44 L-14 56" />
      <path d="M14 44 L14 56" />
      <path d="M0 56 L0 66" />
      <path d="M-14 56 L-14 62" />
      <path d="M14 56 L14 62" />
    </g>
  </svg>
)

const JewelBangle = () => (
  <svg viewBox="-100 -100 200 200" fill="none" stroke="#3a322a" strokeWidth="0.6">
    <circle r="72" />
    <circle r="60" stroke="#8a6d2a" strokeWidth="0.5" />
    <circle r="48" />
    {Array.from({ length: 24 }).map((_, i) => {
      const a = (i / 24) * Math.PI * 2
      const x = Math.cos(a) * 66, y = Math.sin(a) * 66
      return <circle key={i} cx={Number(x.toFixed(4))} cy={Number(y.toFixed(4))} r={2} fill="#8a6d2a" stroke="none" />
    })}
    {Array.from({ length: 12 }).map((_, i) => {
      const a = (i / 12) * Math.PI * 2 + Math.PI / 12
      const x = Math.cos(a) * 54, y = Math.sin(a) * 54
      const rot = a * 180 / Math.PI
      return <g key={i} transform={`translate(${Number(x.toFixed(4))},${Number(y.toFixed(4))}) rotate(${Number(rot.toFixed(4))})`}><rect x="-2" y="-2" width="4" height="4" transform="rotate(45)" fill="#8a6d2a" /></g>
    })}
  </svg>
)

const JewelRing = () => (
  <svg viewBox="-50 -50 100 100" fill="none" stroke="#3a322a" strokeWidth="0.6">
    <ellipse cx="0" cy="14" rx="28" ry="20" />
    <ellipse cx="0" cy="14" rx="22" ry="15" stroke="#8a6d2a" strokeWidth="0.5" />
    <g>
      <path d="M-16 -10 L0 -36 L16 -10" />
      <path d="M-14 -8 L0 -28 L14 -8" stroke="#8a6d2a" />
      <path d="M0 -36 L0 -10" />
      <path d="M-16 -10 L16 -10" />
      <path d="M0 -30 L10 -22 L0 -12 L-10 -22 Z" fill="#efe1be" />
      <path d="M0 -30 L10 -22 L0 -12 L-10 -22 Z" />
      <path d="M-10 -22 L10 -22" stroke="#8a6d2a" />
      <path d="M0 -30 L0 -12" stroke="#8a6d2a" />
    </g>
  </svg>
)

const JewelBracelet = () => (
  <svg viewBox="-100 -50 200 100" fill="none" stroke="#3a322a" strokeWidth="0.6">
    {Array.from({ length: 9 }).map((_, i) => {
      const x = -80 + i * 20
      return (
        <g key={i} transform={`translate(${x},0)`}>
          <rect x="-7" y="-8" width="14" height="16" stroke="#3a322a" />
          <rect x="-4" y="-5" width="8" height="10" stroke="#8a6d2a" strokeWidth="0.5" />
          <circle cx="0" cy="0" r="2" fill="#8a6d2a" />
        </g>
      )
    })}
    <path d="M-88 0 L-80 -8" />
    <path d="M88 0 L80 -8" />
  </svg>
)

const JewelAnklet = () => (
  <svg viewBox="-100 -40 200 80" fill="none" stroke="#3a322a" strokeWidth="0.6">
    <path d="M-90 -10 Q0 40 90 -10" />
    <path d="M-90 -10 Q0 30 90 -10" stroke="#8a6d2a" />
    {Array.from({ length: 11 }).map((_, i) => {
      const t = i / 10, x = -90 + t * 180, y = -10 + 40 * 4 * t * (1 - t) * 0.85
      return <g key={i}><circle cx={Number(x.toFixed(4))} cy={Number((y + 6).toFixed(4))} r="1.6" fill="#8a6d2a" stroke="none" /><path d={`M${Number(x.toFixed(4))} ${Number(y.toFixed(4))} L${Number(x.toFixed(4))} ${Number((y + 8).toFixed(4))}`} /></g>
    })}
    <circle cx="-90" cy="-10" r="3" fill="#8a6d2a" />
    <circle cx="90" cy="-10" r="3" fill="#8a6d2a" />
  </svg>
)

const JewelMaang = () => (
  <svg viewBox="-60 -10 120 110" fill="none" stroke="#3a322a" strokeWidth="0.6">
    <path d="M-50 0 L0 30" />
    <path d="M50 0 L0 30" />
    {Array.from({ length: 6 }).map((_, i) => {
      const t = i / 5, x = -50 + t * 50, y = 0 + t * 30
      return <circle key={'l' + i} cx={Number(x.toFixed(4))} cy={Number(y.toFixed(4))} r="1.4" fill="#8a6d2a" stroke="none" />
    })}
    {Array.from({ length: 6 }).map((_, i) => {
      const t = i / 5, x = 50 - t * 50, y = 0 + t * 30
      return <circle key={'r' + i} cx={Number(x.toFixed(4))} cy={Number(y.toFixed(4))} r="1.4" fill="#8a6d2a" stroke="none" />
    })}
    <g transform="translate(0,30)">
      <circle r="14" stroke="#8a6d2a" />
      <circle r="9" />
      <circle r="3" fill="#8a6d2a" />
      <path d="M0 14 L4 24 L0 44 L-4 24 Z" fill="#efe1be" />
      <path d="M0 14 L4 24 L0 44 L-4 24 Z" />
      <circle cx="0" cy="28" r="2" fill="#8a6d2a" />
    </g>
  </svg>
)

const JewelNose = () => (
  <svg viewBox="-50 -50 100 100" fill="none" stroke="#3a322a" strokeWidth="0.6">
    <path d="M-40 -10 Q-46 30 -10 38" />
    <path d="M-40 -10 Q-40 20 -16 28" stroke="#8a6d2a" />
    <circle cx="-40" cy="-10" r="3" fill="#8a6d2a" />
    <g transform="translate(-10,38)">
      <circle r="8" />
      <circle r="4" stroke="#8a6d2a" />
      <circle r="1.5" fill="#8a6d2a" />
    </g>
    <path d="M-10 46 L-10 56" />
    <circle cx="-10" cy="58" r="2" fill="#8a6d2a" />
  </svg>
)

const placeholders: Record<string, React.ComponentType> = {
  necklace: JewelNecklace,
  earring: JewelEarring,
  bangle: JewelBangle,
  ring: JewelRing,
  bracelet: JewelBracelet,
  anklet: JewelAnklet,
  maang: JewelMaang,
  nose: JewelNose,
}

export const Jewel = ({ kind = 'necklace' }: { kind?: string }) => {
  const C = placeholders[kind] || JewelNecklace
  return <C />
}

/* ======================================================
   SERVICE-CARD EMBLEMS
   Small artistic marks tuned to render inside the 84×84
   icon tiles on the "Who We Serve" cards. viewBox is
   60×60 so a stroke of 1 renders at ~1px on screen.
   ====================================================== */

const EmblemRetailers = () => (
  <svg viewBox="0 0 60 60" fill="none" stroke="#8a6d2a" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M30 5 L32.4 9 L30 13 L27.6 9 Z" fill="#efe1be" />
    <path d="M8 20 L30 12 L52 20" />
    <path d="M10 20 L10 52 L50 52 L50 20" />
    <path d="M10 20 L50 20" />
    <path d="M10 30 L50 30" strokeOpacity=".7" />
    <path d="M10 40 L50 40" strokeOpacity=".7" />
    <circle cx="18" cy="25" r="1.4" fill="#8a6d2a" stroke="none" />
    <circle cx="30" cy="25" r="1.4" fill="#8a6d2a" stroke="none" />
    <circle cx="42" cy="25" r="1.4" fill="#8a6d2a" stroke="none" />
    <circle cx="18" cy="35" r="1.4" fill="#8a6d2a" stroke="none" />
    <circle cx="30" cy="35" r="1.4" fill="#8a6d2a" stroke="none" />
    <circle cx="42" cy="35" r="1.4" fill="#8a6d2a" stroke="none" />
    <circle cx="18" cy="45" r="1.4" fill="#8a6d2a" stroke="none" />
    <circle cx="30" cy="45" r="1.4" fill="#8a6d2a" stroke="none" />
    <circle cx="42" cy="45" r="1.4" fill="#8a6d2a" stroke="none" />
  </svg>
)

const EmblemCentres = () => (
  <svg viewBox="0 0 60 60" fill="none" stroke="#8a6d2a" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 52 L54 52" />
    <path d="M10 52 L10 30 Q10 10 30 6 Q50 10 50 30 L50 52" />
    <path d="M18 52 L18 34 Q18 18 30 14 Q42 18 42 34 L42 52" strokeOpacity=".55" />
    <circle cx="30" cy="10" r="1.4" fill="#8a6d2a" stroke="none" />
    <path d="M30 14 L30 26" strokeOpacity=".7" />
    <path d="M27 26 L30 32 L33 26 Z" fill="#efe1be" />
    <circle cx="30" cy="26" r="1.2" fill="#8a6d2a" stroke="none" />
    <path d="M14 44 L46 44" strokeOpacity=".4" />
  </svg>
)

const EmblemWomen = () => (
  <svg viewBox="0 0 60 60" fill="none" stroke="#8a6d2a" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="30" cy="30" r="24" strokeOpacity=".55" />
    <circle cx="30" cy="30" r="19" strokeOpacity=".3" />
    {Array.from({ length: 6 }).map((_, i) => (
      <g key={i} transform={`rotate(${i * 60} 30 30)`}>
        <path d="M30 12 Q35 22 30 30 Q25 22 30 12 Z" fill="rgba(138,109,42,0.12)" />
      </g>
    ))}
    <circle cx="30" cy="30" r="4" fill="#efe1be" />
    <circle cx="30" cy="30" r="1.6" fill="#8a6d2a" stroke="none" />
    {Array.from({ length: 6 }).map((_, i) => {
      const a = (i / 6) * Math.PI * 2 + Math.PI / 6
      const x = 30 + Math.cos(a) * 24
      const y = 30 + Math.sin(a) * 24
      return <circle key={i} cx={Number(x.toFixed(3))} cy={Number(y.toFixed(3))} r="1.2" fill="#8a6d2a" stroke="none" />
    })}
  </svg>
)

const EmblemWalkIn = () => (
  <svg viewBox="0 0 60 60" fill="none" stroke="#8a6d2a" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 12 L50 12" />
    <path d="M14 12 Q14 22 30 26" />
    <path d="M46 12 Q46 22 30 26" />
    <path d="M22 12 Q22 18 30 22" strokeOpacity=".55" />
    <path d="M38 12 Q38 18 30 22" strokeOpacity=".55" />
    <circle cx="14" cy="12" r="1.4" fill="#8a6d2a" stroke="none" />
    <circle cx="30" cy="12" r="1.4" fill="#8a6d2a" stroke="none" />
    <circle cx="46" cy="12" r="1.4" fill="#8a6d2a" stroke="none" />
    <circle cx="22" cy="16" r="1" fill="#8a6d2a" stroke="none" />
    <circle cx="38" cy="16" r="1" fill="#8a6d2a" stroke="none" />
    <circle cx="30" cy="32" r="6.5" fill="rgba(138,109,42,0.18)" />
    <circle cx="30" cy="32" r="6.5" />
    <circle cx="30" cy="32" r="2.5" strokeOpacity=".7" />
    <circle cx="30" cy="32" r="1" fill="#8a6d2a" stroke="none" />
    <path d="M30 38.5 L27.5 45 L30 54 L32.5 45 Z" fill="#efe1be" />
    <path d="M30 38.5 L27.5 45 L30 54 L32.5 45 Z" />
    <circle cx="30" cy="45" r="1.2" fill="#8a6d2a" stroke="none" />
  </svg>
)

const emblems: Record<string, React.ComponentType> = {
  retailers: EmblemRetailers,
  centres: EmblemCentres,
  women: EmblemWomen,
  walkin: EmblemWalkIn,
}

export const ServiceEmblem = ({ kind }: { kind: string }) => {
  const C = emblems[kind] || EmblemRetailers
  return <C />
}
