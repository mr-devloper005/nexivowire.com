import Link from 'next/link'
import { ArrowRight, BadgeCheck, BarChart3, Building2, CheckCircle2, Globe2, Megaphone, RadioTower, Search, ShieldCheck, Sparkles, UsersRound } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { getEditableCategory, getEditableExcerpt, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

const industries = ['Technology', 'Finance', 'Healthcare', 'Consumer brands', 'Real estate', 'SaaS', 'Events', 'Public relations']
const trustedBrands = ['Launch desks', 'Publisher teams', 'PR agencies', 'Growth studios', 'Founder offices']
const faqs = [
  ['Can I use this for press releases?', 'Yes. Campaign pages are structured around headline, summary, publisher context, category, status, and distribution metadata.'],
  ['Are homepage cards image-free?', 'Yes. The homepage uses text-focused campaign cards so headlines and media signals stay easy to scan.'],
  ['Can archive pages show thumbnails?', 'Yes. Archive and detail pages can continue using campaign images when available.'],
]

function metricFor(index: number) {
  return ['42K reach', '18 publishers', 'Live', `${(index + 2) * 11}% lift`][index % 4]
}

function CampaignTextCard({ post, href, index, label = 'Campaign' }: { post: SitePost; href: string; index: number; label?: string }) {
  return (
    <Link href={href} className="group animate-reveal block min-w-0 rounded-md border border-white/10 bg-white/[0.045] p-5 transition duration-300 hover:-translate-y-1 hover:border-[var(--slot4-accent)] hover:bg-white/[0.07]">
      <div className="flex items-center justify-between gap-3 text-[10px] font-black uppercase tracking-[0.16em] text-white/48">
        <span>{label}</span>
        <span className="text-[var(--slot4-accent)]">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <h3 className="mt-4 line-clamp-3 text-xl font-black leading-tight text-white">{post.title}</h3>
      <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/62">{getEditableExcerpt(post, 160)}</p>
      <div className="mt-5 grid gap-2 text-xs font-bold text-white/68 sm:grid-cols-2">
        <span className="rounded bg-white/5 px-3 py-2">{getEditableCategory(post)}</span>
        <span className="rounded bg-white/5 px-3 py-2">{metricFor(index)}</span>
      </div>
      <span className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-[var(--slot4-accent)]">Open brief <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
    </Link>
  )
}

function SectionHeading({ eyebrow, title, actionHref }: { eyebrow: string; title: string; actionHref?: string }) {
  return (
    <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">{eyebrow}</p>
        <h2 className="mt-2 text-3xl font-black leading-tight text-white sm:text-4xl">{title}</h2>
      </div>
      {actionHref ? <Link href={actionHref} className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:border-[var(--slot4-accent)]">View all <ArrowRight className="h-4 w-4" /></Link> : null}
    </div>
  )
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const lead = posts[0]
  const heroTitle = pagesContent.home.hero.title.join(' ')
  const samplePosts = posts.slice(0, 4)

  return (
    <section className="editorial-shell border-b border-white/10">
      <div className={`${dc.shell.section} grid gap-8 py-12 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:py-20`}>
        <div className="animate-reveal">
          <p className="inline-flex rounded-md border border-[var(--slot4-accent)]/40 bg-[var(--slot4-accent)]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[var(--slot4-accent)]">{pagesContent.home.hero.badge}</p>
          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.98] text-white sm:text-6xl lg:text-7xl">{heroTitle}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">{pagesContent.home.hero.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={primaryRoute} className={dc.button.primary}>{pagesContent.home.hero.primaryCta.label} <ArrowRight className="h-4 w-4" /></Link>
            <Link href={pagesContent.home.hero.secondaryCta.href} className={dc.button.secondary}>{pagesContent.home.hero.secondaryCta.label}</Link>
          </div>
          <form action="/search" className="mt-9 flex max-w-2xl overflow-hidden rounded-md border border-white/12 bg-white/5">
            <Search className="ml-4 mt-4 h-5 w-5 text-[var(--slot4-accent)]" />
            <input name="q" placeholder={pagesContent.home.hero.searchPlaceholder} className="min-w-0 flex-1 bg-transparent px-3 py-4 text-sm font-bold text-white outline-none placeholder:text-white/42" />
            <button className="bg-[var(--slot4-accent-fill)] px-5 text-xs font-black uppercase tracking-[0.14em] text-white">Search</button>
          </form>
        </div>

        <div className="animate-scale-in rounded-md border border-white/10 bg-[#172033]/82 p-5 shadow-[0_30px_90px_rgba(0,0,0,.28)]">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--slot4-accent)]">Distribution console</p>
              <h2 className="mt-1 text-2xl font-black text-white">Live campaign pulse</h2>
            </div>
            <RadioTower className="h-8 w-8 text-[var(--slot4-accent-fill)]" />
          </div>
          <div className="mt-5 grid gap-3">
            {(samplePosts.length ? samplePosts : [lead].filter(Boolean) as SitePost[]).map((post, index) => (
              <Link key={post.id || post.slug || index} href={postHref(primaryTask, post, primaryRoute)} className="group rounded-md border border-white/10 bg-white/[0.04] p-4 transition hover:border-[var(--slot4-accent)]">
                <div className="flex items-center justify-between gap-3 text-[10px] font-black uppercase tracking-[0.16em] text-white/45">
                  <span>{getEditableCategory(post)}</span>
                  <span className="text-[var(--slot4-accent-fill)]">{metricFor(index)}</span>
                </div>
                <h3 className="mt-2 line-clamp-2 text-base font-black text-white">{post.title}</h3>
              </Link>
            ))}
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3 text-center">
            {['Global reach', 'Publisher review', 'Syndication ready'].map((item) => <span key={item} className="rounded-md bg-white/5 px-3 py-3 text-xs font-bold text-white/62">{item}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(0, 8)
  if (!railPosts.length) return null
  return (
    <section className="bg-[#111827]">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <SectionHeading eyebrow="Featured press releases" title="Current campaigns ready for publisher attention" actionHref={primaryRoute} />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {railPosts.map((post, index) => <CampaignTextCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} label="Featured" />)}
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const latest = posts.slice(8, 14).length ? posts.slice(8, 14) : posts.slice(0, 6)
  return (
    <section className="border-y border-white/10 bg-[#151d2d]">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div className="animate-reveal rounded-md border border-white/10 bg-white/[0.045] p-6 lg:p-8">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">Media reach statistics</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-white">Built for measurable exposure, not just publication.</h2>
            <p className="mt-4 text-sm leading-7 text-white/62">Use campaign detail pages to communicate reach, status, publisher context, engagement, and brand credibility before visitors ever contact your team.</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                ['120+', 'publisher touchpoints'],
                ['38K', 'average campaign impressions'],
                ['14', 'industry verticals'],
                ['24h', 'launch-ready workflow'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-md border border-white/10 bg-[#0b1020]/55 p-4">
                  <p className="text-3xl font-black text-white">{value}</p>
                  <p className="mt-1 text-xs font-black uppercase tracking-[0.14em] text-white/45">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Latest distributions" title="Fresh announcements in the network" actionHref={primaryRoute} />
            <div className="grid gap-4 sm:grid-cols-2">
              {latest.map((post, index) => <CampaignTextCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} label="Latest" />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const collected = timeSections.flatMap((section) => section.posts)
  const source = (collected.length ? collected : posts).slice(0, 6)
  return (
    <section className="bg-[#111827]">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="grid gap-8 lg:grid-cols-[1fr_.9fr]">
          <div>
            <SectionHeading eyebrow="Trending campaigns" title="Campaigns gaining attention across industries" actionHref={primaryRoute} />
            <div className="grid gap-4 sm:grid-cols-2">
              {source.map((post, index) => <CampaignTextCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} label="Trending" />)}
            </div>
          </div>
          <aside className="space-y-4">
            <div className="rounded-md border border-white/10 bg-white/[0.045] p-6">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">Popular industries</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {industries.map((industry) => <Link key={industry} href={`${primaryRoute}?category=${encodeURIComponent(industry.toLowerCase())}`} className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-white/72 transition hover:border-[var(--slot4-accent)] hover:text-white">{industry}</Link>)}
              </div>
            </div>
            <div className="rounded-md border border-white/10 bg-white/[0.045] p-6">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">How media distribution works</p>
              <div className="mt-5 grid gap-4">
                {[
                  [Megaphone, 'Submit the story', 'Prepare the headline, summary, category, publisher details, and supporting media.'],
                  [ShieldCheck, 'Review and package', 'Present the campaign with clear metadata, status cues, and reliable content structure.'],
                  [Globe2, 'Distribute and measure', 'Share the campaign with audiences while surfacing reach and engagement context.'],
                ].map(([Icon, title, body]) => {
                  const ActualIcon = Icon as typeof Megaphone
                  return (
                    <div key={String(title)} className="flex gap-4 rounded-md bg-white/5 p-4">
                      <ActualIcon className="mt-1 h-5 w-5 shrink-0 text-[var(--slot4-accent-fill)]" />
                      <div>
                        <h3 className="font-black text-white">{title as string}</h3>
                        <p className="mt-1 text-sm leading-6 text-white/58">{body as string}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <>
      <section className="border-y border-white/10 bg-[#151d2d]">
        <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              [BadgeCheck, 'Why choose us', 'Professional campaign presentation for agencies, startups, and PR teams.'],
              [UsersRound, 'Journalist network', 'Organized public pages designed for fast media review and discovery.'],
              [BarChart3, 'Distribution metrics', 'Reach, status, and engagement cues make each campaign easier to evaluate.'],
              [Building2, 'Trusted brands', 'A polished interface for companies that need announcements to feel credible.'],
            ].map(([Icon, title, body]) => {
              const ActualIcon = Icon as typeof BadgeCheck
              return (
                <div key={String(title)} className="animate-reveal rounded-md border border-white/10 bg-white/[0.045] p-5">
                  <ActualIcon className="h-6 w-6 text-[var(--slot4-accent)]" />
                  <h3 className="mt-4 text-lg font-black text-white">{title as string}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/60">{body as string}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#111827]">
        <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
          <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">Success stories and FAQs</p>
              <h2 className="mt-3 text-4xl font-black leading-tight text-white">A calmer way to make campaigns look launch-ready.</h2>
              <p className="mt-4 text-sm leading-7 text-white/62">Trusted by teams that need announcements to look polished before they move through publisher, partner, and search channels.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {trustedBrands.map((brand) => <span key={brand} className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-white/62">{brand}</span>)}
              </div>
            </div>
            <div className="grid gap-3">
              {faqs.map(([question, answer]) => (
                <div key={question} className="rounded-md border border-white/10 bg-white/[0.045] p-5">
                  <h3 className="flex items-center gap-2 font-black text-white"><CheckCircle2 className="h-5 w-5 text-[var(--slot4-accent-fill)]" /> {question}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/62">{answer}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 rounded-md border border-[var(--slot4-accent)]/35 bg-[var(--slot4-accent)]/10 p-6 sm:p-8 lg:flex lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">{pagesContent.home.cta.badge}</p>
              <h2 className="mt-2 max-w-3xl text-3xl font-black text-white sm:text-4xl">{pagesContent.home.cta.title}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/64">{pagesContent.home.cta.description}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 lg:mt-0">
              <Link href={pagesContent.home.cta.primaryCta.href} className={dc.button.primary}><Sparkles className="h-4 w-4" /> {pagesContent.home.cta.primaryCta.label}</Link>
              <Link href={pagesContent.home.cta.secondaryCta.href} className={dc.button.secondary}>{pagesContent.home.cta.secondaryCta.label}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
