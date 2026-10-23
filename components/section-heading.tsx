import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  inverted = false,
}: {
  eyebrow: string
  title: string
  description?: string
  align?: 'center' | 'left'
  inverted?: boolean
}) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center')}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{eyebrow}</p>
      <h2
        className={cn(
          'mt-3 text-3xl font-extrabold leading-tight md:text-4xl',
          inverted ? 'text-navy-foreground' : 'text-navy',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-lg leading-relaxed',
            inverted ? 'text-navy-foreground/75' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
