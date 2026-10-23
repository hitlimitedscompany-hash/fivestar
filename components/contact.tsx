import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { QuoteForm } from '@/components/quote-form'
import { SectionHeading } from '@/components/section-heading'
import { company } from '@/lib/site'

const details = [
  { icon: Phone, label: 'Call Us', value: company.phone, href: company.phoneHref },
  { icon: Mail, label: 'Email Us', value: company.email, href: `mailto:${company.email}` },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: `${company.street}, ${company.cityStateZip}`,
    href: company.mapsHref,
  },
  { icon: Clock, label: 'Business Hours', value: 'Mon – Fri: 7:00 AM – 6:00 PM' },
]

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-secondary py-24">
      <div id="quote" className="mx-auto grid max-w-7xl scroll-mt-24 gap-12 px-6 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <SectionHeading
            align="left"
            eyebrow="Get In Touch"
            title="Let's build something great together"
            description="Ready to start your project or need help after storm damage? Reach out today for a free, no-obligation estimate."
          />

          <ul className="mt-10 flex flex-col gap-6">
            {details.map((item) => {
              const content = (
                <>
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-md bg-navy text-gold">
                    <item.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="flex min-w-0 flex-col">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </span>
                    <span className="mt-1 break-words font-semibold text-navy">{item.value}</span>
                  </span>
                </>
              )
              return (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 transition-opacity hover:opacity-80"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">{content}</div>
                  )}
                </li>
              )
            })}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <QuoteForm />
        </div>
      </div>
    </section>
  )
}
