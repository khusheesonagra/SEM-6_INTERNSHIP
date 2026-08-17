import { CalendarDays } from 'lucide-react'
import { events } from '@/lib/site'

export function Events() {
  return (
    <section id="events" className="border-t border-border bg-secondary/40 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent-foreground/80">
            Our events
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Moments that bring communities together
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {events.map((e) => (
            <article
              key={e.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex items-center gap-2 text-sm font-medium text-primary">
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                {e.date}
              </div>
              <h3 className="mt-4 font-display text-lg font-bold leading-snug">
                {e.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {e.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
