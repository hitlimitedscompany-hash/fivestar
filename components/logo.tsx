import { cn } from '@/lib/utils'

function starPoints(cx: number, cy: number, outer: number, inner: number) {
  const points: string[] = []
  for (let i = 0; i < 10; i++) {
    const radius = i % 2 === 0 ? outer : inner
    const angle = (Math.PI / 5) * i - Math.PI / 2
    points.push(`${(cx + radius * Math.cos(angle)).toFixed(2)},${(cy + radius * Math.sin(angle)).toFixed(2)}`)
  }
  return points.join(' ')
}

const stars = [
  { x: 12, y: 15 },
  { x: 22, y: 9.5 },
  { x: 32, y: 7.5 },
  { x: 42, y: 9.5 },
  { x: 52, y: 15 },
]

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={cn('size-11', className)} aria-hidden="true">
      <rect width="64" height="64" rx="6" className="fill-navy" />
      {stars.map((s) => (
        <polygon key={s.x} points={starPoints(s.x, s.y, 3.6, 1.5)} className="fill-gold" />
      ))}
      <path d="M9 38 L32 20 L55 38" fill="none" strokeWidth="4.5" strokeLinecap="square" className="stroke-gold" />
      <path d="M16 35 V53 H48 V35" fill="none" strokeWidth="3.5" className="stroke-navy-foreground" />
      <rect x="28.5" y="42" width="7" height="11" className="fill-gold" />
      <rect x="20" y="40" width="5" height="5" className="fill-navy-foreground" />
      <rect x="39" y="40" width="5" height="5" className="fill-navy-foreground" />
    </svg>
  )
}

export function Logo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <span className={cn('flex items-center gap-3', className)}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-heading text-lg font-extrabold uppercase tracking-wide',
            inverted ? 'text-navy-foreground' : 'text-navy',
          )}
        >
          Five Star
        </span>
        <span
          className={cn(
            'mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em]',
            inverted ? 'text-gold' : 'text-muted-foreground',
          )}
        >
          Reconstructors Inc.
        </span>
      </span>
    </span>
  )
}
