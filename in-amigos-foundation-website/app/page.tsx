import { Navbar } from '@/components/site/navbar'
import { Hero } from '@/components/site/hero'
import { About } from '@/components/site/about'
import { Causes } from '@/components/site/causes'
import { ImpactCta } from '@/components/site/impact-cta'
import { Events } from '@/components/site/events'
import { Footer } from '@/components/site/footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Causes />
        <ImpactCta />
        <Events />
      </main>
      <Footer />
    </div>
  )
}
