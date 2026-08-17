import Image from 'next/image'
import { buttonVariants } from '@/components/ui/button'
import { DONATE_URL, JOIN_US_URL, certifications } from '@/lib/site'

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-background p-1.5">
                <Image
                  src="/images/inamigos-mark.png"
                  alt="InAmigos Foundation logo"
                  width={117}
                  height={109}
                  className="h-full w-auto object-contain"
                />
              </span>
              <span className="font-display text-lg font-bold">InAmigos Foundation</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-background/70">
              A Section 8 registered non-profit working across India to create a more
              inclusive, compassionate and empowered society.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({
                  className: 'bg-accent text-accent-foreground hover:bg-accent/90',
                })}
              >
                Donate
              </a>
              <a
                href={JOIN_US_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({
                  variant: 'outline',
                  className:
                    'border-background/30 bg-transparent text-background hover:bg-background/10',
                })}
              >
                Join Us
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-background/60">
              Explore
            </h3>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-background/80">
              <li><a href="#about" className="hover:text-background">About Us</a></li>
              <li><a href="#causes" className="hover:text-background">Our Causes</a></li>
              <li><a href="#impact" className="hover:text-background">Donate</a></li>
              <li><a href="#events" className="hover:text-background">Events</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-background/60">
              Accreditations
            </h3>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-background/80">
              {certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/15 pt-6 text-center text-xs text-background/60">
          © {new Date().getFullYear()} InAmigos Foundation. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
