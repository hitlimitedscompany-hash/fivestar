import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const values = [
  {
    title: 'Integrity in every estimate',
    description: 'Clear, itemized pricing with no hidden fees or surprise change orders.',
  },
  {
    title: 'Craftsmanship that endures',
    description: 'Quality materials and proven methods built for the Florida climate.',
  },
  {
    title: 'Insurance claim experience',
    description: 'We document damage thoroughly and coordinate directly with adjusters.',
  },
  {
    title: 'One accountable team',
    description: 'A dedicated project lead keeps you informed from start to finish.',
  },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-background py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <Image
              src="/images/about-team.png"
              alt="Project manager and foreman reviewing plans on a job site"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 right-0 max-w-xs rounded-lg bg-navy p-6 text-navy-foreground shadow-xl md:-right-8">
            <p className="font-heading text-4xl font-extrabold text-gold">5&#9733;</p>
            <p className="mt-2 text-sm leading-relaxed text-navy-foreground/85">
              Our name is our promise: five-star workmanship, communication, and service on every project.
            </p>
          </div>
        </div>

        <div>
          <SectionHeading
            align="left"
            eyebrow="About Us"
            title="A reconstruction partner you can trust"
            description="Based in Satsuma, Florida, Five Star Reconstructors Inc. helps families and businesses rebuild with confidence. Whether you're recovering from storm damage or planning a major renovation, we bring experienced leadership, skilled tradespeople, and a commitment to doing the job right the first time."
          />

          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <li key={value.title} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden="true" />
                <div>
                  <h3 className="font-bold text-navy">{value.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
