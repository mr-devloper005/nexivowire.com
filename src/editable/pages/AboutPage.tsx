import Link from 'next/link'
import { BadgeCheck, Globe2, RadioTower } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="editorial-shell text-white">
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">{pagesContent.about.badge}</p>
            <h1 className="mt-5 max-w-5xl text-4xl font-black leading-tight sm:text-6xl">{pagesContent.about.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/64">{pagesContent.about.description}</p>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1280px] gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:py-16">
          <article className="rounded-md border border-white/10 bg-white/[0.045] p-6 sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--slot4-accent)]">About {SITE_CONFIG.name}</p>
            <div className="mt-6 grid gap-5 text-base leading-8 text-white/66">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                [RadioTower, 'Syndication-ready'],
                [Globe2, 'Global visibility'],
                [BadgeCheck, 'Trusted presentation'],
              ].map(([Icon, label]) => {
                const ActualIcon = Icon as typeof RadioTower
                return <span key={String(label)} className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-3 text-sm font-bold text-white/70"><ActualIcon className="h-4 w-4 text-[var(--slot4-accent)]" /> {label as string}</span>
              })}
            </div>
          </article>
          <aside className="grid gap-4">
            {pagesContent.about.values.map((value, index) => (
              <div key={value.title} className="rounded-md border border-white/10 bg-[#172033]/82 p-6">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--slot4-accent)]">0{index + 1}</p>
                <h2 className="mt-3 text-2xl font-black text-white">{value.title}</h2>
                <p className="mt-3 text-sm leading-7 text-white/62">{value.description}</p>
              </div>
            ))}
          </aside>
        </section>

        <section className="border-y border-white/10 bg-[#0b1020]/72">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <h2 className="max-w-3xl text-3xl font-black leading-tight sm:text-4xl">Build campaign pages that publishers and stakeholders can understand quickly.</h2>
            <Link href="/media-distribution" className="inline-flex w-fit rounded-md bg-[var(--slot4-accent-fill)] px-6 py-4 text-xs font-black uppercase tracking-[0.14em] transition hover:-translate-y-0.5">Explore campaigns</Link>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
