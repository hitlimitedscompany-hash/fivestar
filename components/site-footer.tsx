import { Logo } from '@/components/logo'
import { company, navLinks } from '@/lib/site'

const services = [
  'Storm & Damage Reconstruction',
  'Residential Construction',
  'Commercial Construction',
  'Remodeling & Renovations',
  'Roofing & Exteriors',
]

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo inverted />
          <p className="mt-6 text-sm leading-relaxed text-navy-foreground/70">
            Quality construction and reconstruction services for homeowners and businesses throughout Northeast Florida.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gold">Company</h2>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-navy-foreground/80 hover:text-gold">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-gold">Services</h2>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-navy-foreground/80">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-gold">Contact</h2>
          <address className="mt-4 flex flex-col gap-3 text-sm not-italic text-navy-foreground/80">
            <span>
              {company.street}
              <br />
              {company.cityStateZip}
            </span>
            <a href={company.phoneHref} className="hover:text-gold">
              {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="break-all hover:text-gold">
              {company.email}
            </a>
          </address>
        </div>
      </div>

      <div className="border-t border-navy-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-navy-foreground/60 sm:flex-row sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {company.name} All rights reserved.
          </p>
          <p>Satsuma, Florida</p>
        </div>
      </div>
    </footer>
  )
}
