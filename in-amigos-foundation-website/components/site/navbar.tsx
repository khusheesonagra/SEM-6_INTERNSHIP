'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { DONATE_URL, JOIN_US_URL } from '@/lib/site'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Our Causes', href: '#causes' },
  { label: 'Impact', href: '#impact' },
  { label: 'Events', href: '#events' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <Image
            src="/images/inamigos-mark.png"
            alt="InAmigos Foundation logo"
            width={117}
            height={109}
            priority
            className="h-10 w-auto object-contain"
          />
          <span className="font-display text-lg font-bold leading-none tracking-tight">
            InAmigos
            <span className="block text-[0.65rem] font-medium uppercase tracking-widest text-muted-foreground">
              Foundation
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={JOIN_US_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: 'outline',
              className: 'border-primary/30 text-primary hover:bg-primary/5',
            })}
          >
            Join Us
          </a>
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
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-3 flex gap-3">
              <a
                href={JOIN_US_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({
                  variant: 'outline',
                  className: 'flex-1 border-primary/30 text-primary',
                })}
              >
                Join Us
              </a>
              <a
                href={DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({
                  className: 'flex-1 bg-accent text-accent-foreground',
                })}
              >
                Donate
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
