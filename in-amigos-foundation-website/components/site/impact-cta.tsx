import { ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { DONATE_URL, JOIN_US_URL } from '@/lib/site'

export function ImpactCta() {
  return (
    <section id="impact" className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-primary-foreground sm:px-12 lg:py-20">
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-balance font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Make a difference with your donation today
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/80">
              Every contribution — big or small — reaches essential causes across food
              distribution, education, women empowerment, animal welfare and the
              environment. Give today and be the change you wish to see.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({
                  size: 'lg',
                  className: 'bg-accent text-accent-foreground hover:bg-accent/90',
                })}
              >
                Donate Securely
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={JOIN_US_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({
                  size: 'lg',
                  variant: 'outline',
                  className:
                    'border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10',
                })}
              >
                Become a Volunteer
              </a>
            </div>
            <p className="mt-6 text-xs uppercase tracking-widest text-primary-foreground/60">
              80G tax benefits · Secure payment via Razorpay
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
