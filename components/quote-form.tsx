'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { company } from '@/lib/site'

const projectTypes = [
  'Storm / Damage Reconstruction',
  'Residential Construction',
  'Commercial Construction',
  'Remodeling / Renovation',
  'Roofing & Exteriors',
  'Other',
]

const budgets = ['Under $25,000', '$25,000 – $75,000', '$75,000 – $150,000', '$150,000+', 'Not sure yet']

const inputClass =
  'w-full rounded-md border border-input bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground/70 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40'

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const field = (name: string) => String(data.get(name) ?? '').trim()

    const body = [
      `Name: ${field('name')}`,
      `Email: ${field('email')}`,
      `Phone: ${field('phone')}`,
      `Project Address: ${field('address') || 'Not provided'}`,
      `Project Type: ${field('projectType')}`,
      `Estimated Budget: ${field('budget') || 'Not provided'}`,
      `Insurance Claim: ${field('insurance') ? 'Yes' : 'No'}`,
      '',
      'Project Details:',
      field('details'),
    ].join('\n')

    const subject = `Quote Request - ${field('projectType')} - ${field('name')}`
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div role="status" className="flex flex-col items-center rounded-lg bg-card p-10 text-center shadow-sm">
        <CheckCircle2 className="size-12 text-gold" aria-hidden="true" />
        <h3 className="mt-4 text-2xl font-bold text-navy">Thank you for your request</h3>
        <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
          Your email app should open with your quote details ready to send. If it didn&apos;t, please email us directly
          at{' '}
          <a href={`mailto:${company.email}`} className="font-semibold text-navy underline underline-offset-4">
            {company.email}
          </a>{' '}
          or call{' '}
          <a href={company.phoneHref} className="font-semibold text-navy underline underline-offset-4">
            {company.phone}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold text-navy underline underline-offset-4"
        >
          Submit another request
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg bg-card p-6 shadow-sm md:p-10" aria-labelledby="quote-heading">
      <h3 id="quote-heading" className="text-2xl font-bold text-navy">
        Request a Free Quote
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Tell us about your project and we&apos;ll respond within one business day.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-semibold text-navy">
            Full Name <span className="text-destructive">*</span>
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} placeholder="John Smith" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-semibold text-navy">
            Phone <span className="text-destructive">*</span>
          </label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" className={inputClass} placeholder="(555) 555-5555" />
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="email" className="text-sm font-semibold text-navy">
            Email <span className="text-destructive">*</span>
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} placeholder="you@example.com" />
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="address" className="text-sm font-semibold text-navy">
            Project Address
          </label>
          <input id="address" name="address" type="text" autoComplete="street-address" className={inputClass} placeholder="Street, City, ZIP" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="projectType" className="text-sm font-semibold text-navy">
            Project Type <span className="text-destructive">*</span>
          </label>
          <select id="projectType" name="projectType" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select a service
            </option>
            {projectTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="budget" className="text-sm font-semibold text-navy">
            Estimated Budget
          </label>
          <select id="budget" name="budget" defaultValue="" className={inputClass}>
            <option value="">Select a range</option>
            {budgets.map((budget) => (
              <option key={budget}>{budget}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="details" className="text-sm font-semibold text-navy">
            Project Details <span className="text-destructive">*</span>
          </label>
          <textarea
            id="details"
            name="details"
            required
            rows={5}
            className={inputClass}
            placeholder="Describe the work you need, timeline, and any damage details..."
          />
        </div>
        <label className="flex items-center gap-3 text-sm text-foreground sm:col-span-2">
          <input type="checkbox" name="insurance" className="size-4 accent-[var(--navy)]" />
          This project involves an insurance claim
        </label>
      </div>

      <button
        type="submit"
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-navy px-6 py-4 font-semibold text-navy-foreground transition-colors hover:bg-navy/90 sm:w-auto"
      >
        Send Quote Request
        <Send className="size-4" aria-hidden="true" />
      </button>
    </form>
  )
}
