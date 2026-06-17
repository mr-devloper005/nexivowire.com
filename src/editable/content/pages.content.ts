import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Media distribution, press release publishing, and digital visibility',
      description: 'Launch press releases, distribute brand stories, reach publishers, and track media campaign visibility through a polished distribution platform.',
      openGraphTitle: 'Media distribution and PR campaign visibility',
      openGraphDescription: 'Distribute announcements, reach media channels, and amplify brand exposure with a professional newsroom experience.',
      keywords: ['media distribution', 'press release publishing', 'news syndication', 'PR campaigns'],
    },
    hero: {
      badge: 'Global media distribution platform',
      title: ['Distribute your story', 'across the channels that matter.'],
      description: 'Publish press releases, coordinate media outreach, syndicate announcements, and present campaigns with the polish expected by journalists, publishers, agencies, and growth teams.',
      primaryCta: { label: 'View campaigns', href: '/media-distribution' },
      secondaryCta: { label: 'Launch a release', href: '/create' },
      searchPlaceholder: 'Search campaigns, industries, publishers, and brands',
      focusLabel: 'Campaign focus',
      featureCardBadge: 'live distribution desk',
      featureCardTitle: 'Campaign cards focus on message, reach, status, and publisher context.',
      featureCardDescription: 'Homepage cards stay text-first so decision makers can scan announcements like a professional newsroom.',
    },
    intro: {
      badge: 'Distribution command center',
      title: 'Built for publishing, syndication, and measurable media visibility.',
      paragraphs: [
        'This platform brings together campaign publishing, press release discovery, industry archives, and public-facing distribution pages so every announcement feels credible from the first click.',
        'Agencies, founders, marketing teams, and PR operators can guide audiences from campaign headline to supporting context, publisher metadata, reach cues, and next-step actions.',
        'The experience is designed to feel calm and authoritative, with enough structure for repeated professional use and enough polish for public brand exposure.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Text-first campaign cards for quick newsroom scanning.',
        'Archive pages with images, status, reach, and engagement cues.',
        'Clear paths for media outreach, publisher discovery, and campaign creation.',
        'Fast motion and responsive layouts tuned for professional browsing.',
      ],
      primaryLink: { label: 'Browse campaigns', href: '/media-distribution' },
      secondaryLink: { label: 'Create campaign', href: '/create' },
    },
    cta: {
      badge: 'Ready for visibility',
      title: 'Turn announcements into discoverable media campaigns.',
      description: 'Give your launch, partnership, milestone, or brand update a polished distribution surface designed for public trust and publisher review.',
      primaryCta: { label: 'Start a campaign', href: '/create' },
      secondaryCta: { label: 'Talk to us', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'About the network',
    title: 'A trusted workspace for brand stories, press releases, and media reach.',
    description: `${slot4BrandConfig.siteName} helps teams package announcements, present campaign context, and create public media distribution pages that feel credible, organized, and easy to share.`,
    paragraphs: [
      'The platform is designed for PR agencies, startups, publishers, marketing teams, and founders who need their announcements to look professional before they travel.',
      'Every page emphasizes clarity, context, and trust signals so visitors can understand who published the story, what industry it belongs to, and why it matters.',
    ],
    values: [
      {
        title: 'Distribution clarity',
        description: 'Campaigns are organized around headline, category, publisher, reach, and status so the most important PR signals are immediately visible.',
      },
      {
        title: 'Publisher-ready context',
        description: 'Press releases, media notes, related campaigns, and brand details are structured for journalists and partner sites to review quickly.',
      },
      {
        title: 'Professional presentation',
        description: 'The interface avoids clutter while adding the polish and consistency expected from an enterprise-grade media distribution surface.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Plan a release, ask about syndication, or connect with the distribution desk.',
    description: 'Tell us what you are preparing to publish, which audience you want to reach, and what kind of media visibility matters most for the campaign.',
    formTitle: 'Campaign inquiry',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search media campaigns, press releases, industries, publishers, and distribution content across the site.',
    },
    hero: {
      badge: 'Search the distribution archive',
      title: 'Find campaigns, publishers, industries, and press releases faster.',
      description: 'Use keywords, categories, and content types to discover media distribution records across the active network.',
      placeholder: 'Search by campaign, brand, publisher, topic, or industry',
    },
    resultsTitle: 'Latest distribution records',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit media distribution campaigns, press releases, and newsroom updates.',
    },
    locked: {
      badge: 'Campaign access',
      title: 'Login to launch a media campaign.',
      description: 'Use your account to open the publishing workspace, prepare release details, and submit a polished media distribution record.',
    },
    hero: {
      badge: 'Publishing workspace',
      title: 'Build a professional media distribution submission.',
      description: 'Choose the campaign type, add publisher context, prepare the release summary, and include links or assets that help the story travel.',
    },
    formTitle: 'Campaign details',
    submitLabel: 'Submit campaign',
    successTitle: 'Campaign submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for media distribution campaign access.',
      badge: 'Distribution desk access',
      title: 'Welcome back to your media workspace.',
      description: 'Login to manage submissions, publish campaign drafts, and keep your media distribution activity organized.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for media distribution platform access.',
      badge: 'Campaign access',
      title: 'Create your account and start distributing.',
      description: 'Create an account to prepare announcements, save publisher details, and submit professional media campaigns.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
