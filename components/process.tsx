import { SectionHeading } from '@/components/section-heading'

const steps = [
  {
    title: 'Consultation',
    description: 'We visit your property, listen to your goals, and assess the scope of work or damage.',
  },
  {
    title: 'Detailed Estimate',
    description: 'You receive a transparent, itemized proposal with a realistic schedule.',
  },
  {
    title: 'Permits & Planning',
    description: 'We handle permitting, materials, and scheduling so work starts smoothly.',
  },
  {
    title: 'Construction',
    description: 'Our crew builds with care while your project lead keeps you updated.',
  },
  {
    title: 'Final Walkthrough',
    description: 'We review every detail together and stand behind our work.',
  },
]

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-navy py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          inverted
          eyebrow="How We Work"
          title="A proven process from first call to final nail"
          description="Construction is a significant investment. Our structured approach keeps your project predictable, organized, and stress-free."
        />

        <ol className="mt-16 grid gap-8 md:grid-cols-5">
          {steps.map((step, index) => (
            <li key={step.title} className="relative border-t-2 border-gold pt-6">
              <span className="font-heading text-sm font-bold text-gold">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="mt-2 text-lg font-bold text-navy-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-foreground/70">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
