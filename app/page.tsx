import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { CtaBanner } from '@/components/cta-banner'
import { Hero } from '@/components/hero'
import { Process } from '@/components/process'
import { Projects } from '@/components/projects'
import { Services } from '@/components/services'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Process />
        <CtaBanner />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
