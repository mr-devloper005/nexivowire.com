'use client'

import Link from 'next/link'
import { ArrowRight, Globe2, Megaphone, RadioTower } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer className="border-t border-white/10 bg-[#0b1020] text-white">
      <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_.65fr_.65fr_.75fr]">
          <div>
            <Link href="/" className="text-4xl font-black tracking-normal text-white">
              <span className="text-[var(--slot4-accent)]">{SITE_CONFIG.name}</span>
            </Link>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/62">{globalContent.footer?.description || SITE_CONFIG.description}</p>
            <div className="mt-7 grid gap-3 text-sm text-white/70 sm:grid-cols-3">
              <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2"><RadioTower className="h-4 w-4 text-[var(--slot4-accent)]" /> Syndication</span>
              <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2"><Megaphone className="h-4 w-4 text-[var(--slot4-accent)]" /> PR campaigns</span>
              <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2"><Globe2 className="h-4 w-4 text-[var(--slot4-accent)]" /> Media reach</span>
            </div>
            <form action="/signup" className="mt-8 flex max-w-xl overflow-hidden rounded-md border border-white/15 bg-white/5">
              <input name="email" type="email" placeholder="Email for distribution updates" className="min-w-0 flex-1 bg-transparent px-4 py-4 text-sm outline-none placeholder:text-white/40" />
              <button className="bg-[var(--slot4-accent-fill)] px-5 text-xs font-black uppercase tracking-[.14em]">Join</button>
            </form>
          </div>

          <div>
            <h3 className="border-b border-white/15 pb-3 text-[10px] font-black uppercase tracking-[.22em] text-white/55">Distribution</h3>
            <div className="mt-4 grid gap-3">
              <Link href="/media-distribution" className="group inline-flex items-center justify-between text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Campaigns<ArrowRight className="h-4 w-4" /></Link>
              <Link href="/search" className="text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Search archive</Link>
              <Link href="/create" className="text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Create release</Link>
            </div>
          </div>

          <div>
            <h3 className="border-b border-white/15 pb-3 text-[10px] font-black uppercase tracking-[.22em] text-white/55">Company</h3>
            <div className="mt-4 grid gap-3">
              <Link href="/about" className="text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">About</Link>
              <Link href="/contact" className="text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Contact</Link>
              {session ? (
                <button onClick={logout} className="text-left text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Logout {session.name}</button>
              ) : (
                <>
                  <Link href="/login" className="text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Log in</Link>
                  <Link href="/signup" className="text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Sign up</Link>
                </>
              )}
            </div>
          </div>

          <div className="rounded-md border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-black">Campaign visibility starts with presentation.</h3>
            <p className="mt-3 text-sm leading-7 text-white/62">Package releases with clear headlines, publisher context, reach cues, and readable campaign detail pages.</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-[10px] font-black uppercase tracking-[.18em] text-white/45">(c) {year} {SITE_CONFIG.name}. Media distribution and campaign visibility.</div>
    </footer>
  )
}
