export default function JewelCardSkeleton() {
  return (
    <div
      className="jewel-skeleton"
      aria-hidden="true"
      style={{
        aspectRatio: '3/4',
        background: 'var(--cream-warm)',
        border: '1px solid rgba(138,109,42,.14)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 14,
          left: 14,
          width: 66,
          height: 18,
          background: 'rgba(255,255,255,.55)',
          borderRadius: 2,
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: '20%',
          right: '20%',
          top: '20%',
          bottom: '30%',
          background:
            'repeating-linear-gradient(45deg, transparent 0, transparent 14px, rgba(138,109,42,.08) 14px, rgba(138,109,42,.08) 15px)',
          borderRadius: 2,
        }}
      />
      <div
        className="jewel-shimmer"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, transparent 0%, rgba(250,243,224,.55) 50%, transparent 100%)',
        }}
      />
    </div>
  )
}
