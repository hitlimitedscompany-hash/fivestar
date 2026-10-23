import { Phone } from 'lucide-react'
import { company } from '@/lib/site'

export function CtaBanner() {
  return (
    <section className="bg-gold">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-12 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-extrabold text-navy md:text-3xl">Dealing with storm or property damage?</h2>
          <p className="mt-2 text-navy/80">Call now for a prompt assessment and a clear plan to rebuild.</p>
        </div>
        <a
          href={company.phoneHref}
          className="inline-flex items-center gap-3 rounded-md bg-navy px-7 py-4 font-semibold text-navy-foreground transition-colors hover:bg-navy/90"
        >
          <Phone className="size-5 text-gold" aria-hidden="true" />
          {company.phone}
        </a>
      </div>
    </section>
  )
}
