'use client'

import { useState } from 'react'
import Link from 'next/link'
import { LogOut, Menu, Search, UserRound, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111827]/92 text-white shadow-[0_12px_40px_rgba(0,0,0,.22)] backdrop-blur-xl">
      <div className="mx-auto grid min-h-[78px] max-w-[1280px] grid-cols-[auto_1fr_auto] items-center gap-5 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-white/5 lg:hidden" aria-label="Toggle navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <Link href="/" className="text-2xl font-black tracking-normal text-white">
            <span className="text-[var(--slot4-accent)]">{SITE_CONFIG.name.split('.')[0]}</span>
            {SITE_CONFIG.name.includes('.') ? <span className="text-white/70">.{SITE_CONFIG.name.split('.').slice(1).join('.')}</span> : null}
          </Link>
        </div>

        <nav className="hidden items-center justify-center gap-7 text-xs font-black uppercase tracking-[0.12em] text-white/72 lg:flex">
          <Link href="/" className="transition hover:text-white">Home</Link>
          <Link href="/media-distribution" className="transition hover:text-white">Media</Link>
          <Link href="/search" className="transition hover:text-white">Search</Link>
          <Link href="/about" className="transition hover:text-white">About</Link>
          <Link href="/contact" className="transition hover:text-white">Contact</Link>
        </nav>

        <div className="flex items-center justify-end gap-4">
          {session ? (
            <div className="hidden items-center gap-3 sm:flex">

              <div className="flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-2">
                <UserRound className="h-4 w-4 text-[var(--slot4-accent)]" />
                <span className="max-w-28 truncate text-xs font-bold">{session.name}</span>
                <button type="button" onClick={logout} className="text-white/60 transition hover:text-white" aria-label="Logout"><LogOut className="h-4 w-4" /></button>
              </div>
            </div>
          ) : <Link href="/login" className="hidden text-xs font-black uppercase tracking-[.12em] text-white/78 transition hover:text-white sm:block">Log in</Link>}
          <Link href={session ? '/create' : '/signup'} className="rounded-md border border-[var(--slot4-accent)] px-4 py-3 text-[10px] font-black uppercase tracking-[.14em] text-white transition hover:-translate-y-0.5 hover:bg-white/5 sm:px-6">
            {session ? 'Publish' : 'Start'}
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#0b1020]/82 text-white">
        <div className="mx-auto flex min-h-[58px] max-w-[1280px] items-center justify-between gap-5 px-4 sm:px-6 lg:px-8">
          <p className="hidden text-xs font-bold text-white/50 lg:block">Press release publishing, media outreach, and campaign visibility.</p>
          <form action="/search" className="flex min-w-0 flex-1 items-center rounded-md border border-white/10 bg-white/5 lg:max-w-[430px] lg:flex-none">
            <Search className="ml-4 h-4 w-4 text-[var(--slot4-accent)]" />
            <input name="q" type="search" placeholder="Search campaigns and publishers" className="min-w-0 flex-1 bg-transparent px-3 py-3.5 text-xs font-bold outline-none placeholder:text-white/45" />
          </form>
        </div>
      </div>

      {open ? (
        <div className="animate-reveal border-t border-white/10 bg-[#111827] px-4 py-4 lg:hidden">
          <div className="grid gap-2">
            {[{ label: 'Home', href: '/' }, { label: 'Campaigns', href: '/media-distribution' }, { label: 'Search', href: '/search' }, { label: 'About', href: '/about' }, { label: 'Contact', href: '/contact' }, ...(session ? [{ label: `Profile: ${session.name}`, href: '/create' }, { label: 'Logout', href: '#' }] : [{ label: 'Login', href: '/login' }, { label: 'Sign up', href: '/signup' }])].map((item) => (
              item.label === 'Logout'
                ? <button key={item.label} onClick={() => { logout(); setOpen(false) }} className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-left text-sm font-black uppercase tracking-[.1em]">Logout</button>
                : <Link key={`${item.label}-${item.href}`} href={item.href} onClick={() => setOpen(false)} className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm font-black uppercase tracking-[.1em]">{item.label}</Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
