'use client'

import { useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { Logo } from '@/components/logo'
import { company, navLinks } from '@/lib/site'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="hidden bg-navy text-navy-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <p>Serving Putnam County &amp; Northeast Florida</p>
          <div className="flex items-center gap-6">
            <a href={`mailto:${company.email}`} className="hover:text-gold">
              {company.email}
            </a>
            <a href={company.phoneHref} className="font-semibold hover:text-gold">
              {company.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" aria-label={`${company.name} home`}>
          <Logo />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href={company.phoneHref} className="flex items-center gap-2 text-sm font-semibold text-navy">
            <Phone className="size-4 text-gold" aria-hidden="true" />
            {company.phone}
          </a>
          <a
            href="#quote"
            className="rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-gold/90"
          >
            Request a Quote
          </a>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 font-medium text-foreground hover:bg-muted"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#quote"
                onClick={() => setOpen(false)}
                className="block rounded-md bg-gold px-4 py-3 text-center font-semibold text-navy"
              >
                Request a Quote
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
