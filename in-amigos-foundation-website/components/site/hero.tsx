import { ArrowRight, ShieldCheck } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { DONATE_URL, JOIN_US_URL, certifications, stats } from '@/lib/site'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24 lg:pt-20">
        <div className="flex flex-col">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            Section 8 Non-Profit · Est. 2020
          </span>

          <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Serving humanity with{' '}
            <span className="text-primary">compassion</span>, across India.
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            InAmigos Foundation channels every contribution into food, education,
            women empowerment, animal welfare and environmental care — building a
            more inclusive and empowered society through collective action.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                size: 'lg',
                className: 'bg-accent text-accent-foreground hover:bg-accent/90',
              })}
            >
              Donate Now
              <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={JOIN_US_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                size: 'lg',
                variant: 'outline',
                className: 'border-primary/30 text-primary hover:bg-primary/5',
              })}
            >
              Join Us as a Volunteer
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-5 gap-y-2">
            {certifications.map((c) => (
              <li
                key={c}
                className="text-xs font-medium uppercase tracking-wide text-muted-foreground"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-xl shadow-primary/5">
            <img
              src="/images/hero.png"
              alt="Volunteers and children smiling together outdoors in rural India"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-1/2 grid w-[88%] -translate-x-1/2 grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-lg sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-card px-3 py-3 text-center">
                <div className="font-display text-xl font-bold text-primary">
                  {s.value}
                </div>
                <div className="text-[0.7rem] font-medium uppercase tracking-wide text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
