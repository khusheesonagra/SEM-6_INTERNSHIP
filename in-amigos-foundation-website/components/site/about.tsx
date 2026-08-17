import { Building2, HandHeart, Landmark } from 'lucide-react'

const highlights = [
  {
    icon: HandHeart,
    title: 'Founded on compassion',
    text: 'Started on 23 September 2020 by Mr. Govind Shukla, based in Chhattisgarh and growing across the nation.',
  },
  {
    icon: Landmark,
    title: 'Fully accredited',
    text: '80G & 12A certified with CSR-1 and NITI Aayog registration — ensuring transparency and tax-exempt giving.',
  },
  {
    icon: Building2,
    title: 'Corporate partnerships',
    text: 'CSR-1 registration lets us collaborate with corporate partners on impactful, measurable initiatives.',
  },
]

export function About() {
  return (
    <section id="about" className="border-t border-border bg-secondary/40 py-16 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
            <img
              src="/images/community.png"
              alt="A team of InAmigos Foundation volunteers standing together"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent-foreground/80">
            Get to know us
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            A registered non-profit built on trust and collective action
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            InAmigos Foundation is a Section 8 registered non-profit licensed by the
            Central Government. With a strong network of dedicated professionals,
            volunteers and corporate partners, we work tirelessly to bring positive
            change — directing every contribution toward causes that matter most.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {highlights.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display font-semibold">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
