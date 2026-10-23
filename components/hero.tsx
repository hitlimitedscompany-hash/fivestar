import Image from 'next/image'
import { ArrowRight, ShieldCheck, Star } from 'lucide-react'
import { company } from '@/lib/site'

const highlights = ['Licensed & Insured', 'Residential & Commercial', 'Free Detailed Estimates']

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-navy">
      <Image
        src="/images/hero.png"
        alt="Newly reconstructed two-story Florida home with metal roof at golden hour"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/85 to-navy/30" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-6 py-24 md:py-36">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2" aria-label="Five star quality">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-gold text-gold" aria-hidden="true" />
            ))}
            <span className="ml-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Built to a Five Star Standard
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-navy-foreground md:text-6xl">
            Rebuilding Florida, one solid foundation at a time.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-foreground/80">
            {company.name} delivers expert construction, reconstruction, and remodeling for homeowners, businesses, and
            insurance-restoration projects &mdash; managed with precision from first estimate to final walkthrough.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#quote"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-7 py-4 font-semibold text-navy transition-colors hover:bg-gold/90"
            >
              Request a Free Quote
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md border border-navy-foreground/30 px-7 py-4 font-semibold text-navy-foreground transition-colors hover:bg-navy-foreground/10"
            >
              View Our Projects
            </a>
          </div>

          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-medium text-navy-foreground/90">
                <ShieldCheck className="size-5 text-gold" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
