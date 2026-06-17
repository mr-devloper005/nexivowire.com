import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const globalContent = {
  site: {
    name: slot4BrandConfig.siteName,
    tagline: slot4BrandConfig.tagline || 'Media distribution and PR visibility platform',
    domain: slot4BrandConfig.domain,
    baseUrl: slot4BrandConfig.baseUrl,
  },
  nav: {
    tagline: 'Media distribution and campaign visibility',
    primaryLinks: [
      { label: 'Campaigns', href: '/media-distribution' },
      { label: 'News Media', href: '/media-distribution?category=news-media' },
      { label: 'Press Releases', href: '/media-distribution?category=press-release' },
      { label: 'Contact', href: '/contact' },
    ],
    actions: {
      primary: { label: 'Browse campaigns', href: '/media-distribution' },
      secondary: { label: 'Submit release', href: '/create' },
    },
  },
  footer: {
    tagline: 'Press release publishing and distributed media',
    description: 'A premium media distribution surface for announcements, press coverage, PR campaigns, brand exposure, and dynamic news categories.',
    columns: [
      {
        title: 'Explore',
        links: [
          { label: 'Campaigns', href: '/media-distribution' },
          { label: 'News Media', href: '/media-distribution?category=news-media' },
          { label: 'Business News', href: '/media-distribution?category=business' },
          { label: 'Press Releases', href: '/media-distribution?category=press-release' },
        ],
      },
      {
        title: 'Site',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
    bottomNote: 'Built for fast, flexible, and category-led media distribution.',
  },
  commonLabels: {
    readMore: 'Read more',
    viewAll: 'View all',
    explore: 'Explore',
    latest: 'Latest',
    related: 'Related',
    published: 'Published',
  },
} as const
