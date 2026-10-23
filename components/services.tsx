import { Building2, CloudLightning, Hammer, HardHat, Home, Wrench } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const services = [
  {
    icon: CloudLightning,
    title: 'Storm & Damage Reconstruction',
    description:
      'Full rebuilds after hurricane, wind, fire, or water damage. We work alongside your insurance adjuster to restore your property quickly and correctly.',
  },
  {
    icon: Home,
    title: 'Residential Construction',
    description:
      'New homes, additions, and structural repairs built to Florida code with quality materials and craftsmanship that lasts for generations.',
  },
  {
    icon: Building2,
    title: 'Commercial Construction',
    description:
      'Tenant build-outs, office renovations, and light commercial construction delivered on schedule with minimal disruption to your operations.',
  },
  {
    icon: Hammer,
    title: 'Remodeling & Renovations',
    description:
      'Kitchens, bathrooms, and whole-home renovations that modernize your space while respecting your budget and timeline.',
  },
  {
    icon: Wrench,
    title: 'Roofing & Exteriors',
    description:
      'Roof replacements, siding, windows, and doors engineered to stand up to Florida heat, humidity, and storm season.',
  },
  {
    icon: HardHat,
    title: 'Project Management',
    description:
      'Permitting, scheduling, subcontractor coordination, and inspections handled by a single accountable point of contact.',
  },
]

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="What We Do"
          title="Comprehensive construction services under one roof"
          description="From emergency reconstruction to carefully planned renovations, our team brings the same disciplined approach to every job."
        />

        <ul className="mt-16 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.title} className="group bg-card p-8 transition-colors hover:bg-secondary">
              <div className="flex size-12 items-center justify-center rounded-md bg-navy text-gold">
                <service.icon className="size-6" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-navy">{service.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
