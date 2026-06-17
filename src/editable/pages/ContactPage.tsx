'use client'

import { FileText, Mail, Megaphone } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const desks = [
  { icon: FileText, title: 'Press release desk', body: 'Share campaign goals, announcement details, launch timelines, and publisher context.' },
  { icon: Megaphone, title: 'Media outreach', body: 'Discuss syndication, industry categories, partner channels, and campaign visibility.' },
  { icon: Mail, title: 'Platform support', body: 'Get help with submissions, account access, campaign pages, and distribution records.' },
]

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="editorial-shell text-white">
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">{pagesContent.contact.eyebrow}</p>
            <h1 className="mt-4 max-w-5xl text-4xl font-black leading-tight sm:text-6xl">{pagesContent.contact.title}</h1>
            <p className="mt-6 max-w-3xl border-l-4 border-[var(--slot4-accent)] pl-5 text-base font-semibold leading-8 text-white/64">{pagesContent.contact.description}</p>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1280px] gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8 lg:py-16">
          <aside className="grid gap-4">
            {desks.map((desk, index) => (
              <div key={desk.title} className="rounded-md border border-white/10 bg-white/[0.045] p-6">
                <div className="flex items-center justify-between"><desk.icon className="h-5 w-5 text-[var(--slot4-accent)]" /><span className="text-xs font-black text-white/45">0{index + 1}</span></div>
                <h2 className="mt-5 text-2xl font-black text-white">{desk.title}</h2>
                <p className="mt-3 text-sm leading-7 text-white/62">{desk.body}</p>
              </div>
            ))}
          </aside>
          <div className="rounded-md border border-white/10 bg-[#172033]/82 p-6 sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">Send a message</p>
            <h2 className="mt-3 text-3xl font-black text-white">{pagesContent.contact.formTitle}</h2>
            <EditableContactLeadForm />
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
