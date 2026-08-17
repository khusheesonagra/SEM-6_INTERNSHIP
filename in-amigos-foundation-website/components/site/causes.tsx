import { buttonVariants } from '@/components/ui/button'
import { DONATE_URL, projects } from '@/lib/site'

export function Causes() {
  return (
    <section id="causes" className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent-foreground/80">
              Our causes
            </span>
            <h2 className="mt-3 text-balance font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Six initiatives, one mission
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Every project is designed to create lasting impact — reaching people,
              animals and the environment where support is needed most.
            </p>
          </div>
          <a
            href={DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: 'outline',
              className: 'shrink-0 border-primary/30 text-primary hover:bg-primary/5',
            })}
          >
            Support a Cause
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.image || '/placeholder.svg'}
                  alt={p.name}
                  className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
                  {p.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-bold">{p.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{p.title}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
