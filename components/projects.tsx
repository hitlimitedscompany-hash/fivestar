'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

type Category = 'Residential' | 'Commercial' | 'Restoration' | 'Remodeling'

const projects: { title: string; location: string; category: Category; image: string; alt: string }[] = [
  {
    title: 'Coastal Home Reconstruction',
    location: 'Palatka, FL',
    category: 'Restoration',
    image: '/images/hero.png',
    alt: 'Two-story home with metal roof rebuilt after storm damage',
  },
  {
    title: 'Professional Office Building',
    location: 'Putnam County, FL',
    category: 'Commercial',
    image: '/images/project-commercial.png',
    alt: 'Modern single-story commercial office building with glass storefront',
  },
  {
    title: 'Chef-Inspired Kitchen Remodel',
    location: 'Satsuma, FL',
    category: 'Remodeling',
    image: '/images/project-kitchen.png',
    alt: 'Remodeled kitchen with white shaker cabinets and quartz island',
  },
  {
    title: 'Custom Residence Framing',
    location: 'Crescent City, FL',
    category: 'Residential',
    image: '/images/project-framing.png',
    alt: 'Crew framing a new residential home with roof trusses',
  },
  {
    title: 'Storm Roof Replacement',
    location: 'Welaka, FL',
    category: 'Restoration',
    image: '/images/project-roof.png',
    alt: 'New architectural shingle roof installed on Florida home',
  },
  {
    title: 'Master Bath Renovation',
    location: 'St. Augustine, FL',
    category: 'Remodeling',
    image: '/images/project-bathroom.png',
    alt: 'Renovated master bathroom with walk-in glass shower and freestanding tub',
  },
  {
    title: 'Ranch Home Exterior Restoration',
    location: 'Interlachen, FL',
    category: 'Residential',
    image: '/images/project-restoration.png',
    alt: 'Restored ranch-style home with new siding and covered porch',
  },
]

const filters: ('All' | Category)[] = ['All', 'Residential', 'Commercial', 'Restoration', 'Remodeling']

export function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>('All')
  const visible = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="scroll-mt-24 bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Featured Work"
            title="Projects built with pride"
            description="A selection of recent reconstruction, residential, and commercial work across Northeast Florida."
          />
          <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                aria-pressed={active === filter}
                onClick={() => setActive(filter)}
                className={cn(
                  'rounded-md border px-4 py-2 text-sm font-medium transition-colors',
                  active === filter
                    ? 'border-navy bg-navy text-navy-foreground'
                    : 'border-border bg-card text-foreground hover:border-navy',
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, index) => (
            <li
              key={project.title}
              className={cn(
                'group relative overflow-hidden rounded-lg bg-navy',
                active === 'All' && index === 0 && 'sm:col-span-2 lg:row-span-2',
              )}
            >
              <div
                className={cn(
                  'relative aspect-[4/3]',
                  active === 'All' && index === 0 && 'lg:aspect-auto lg:h-full lg:min-h-[32rem]',
                )}
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="inline-block rounded-sm bg-gold px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-navy">
                    {project.category}
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-navy-foreground">{project.title}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-navy-foreground/80">
                    <MapPin className="size-4" aria-hidden="true" />
                    {project.location}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
