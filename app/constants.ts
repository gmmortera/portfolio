export const HOME_STRUCTURED_DATA = {
  type: 'ProfilePage',
  id: 'https://www.gmmortera.com/#home',
  url: 'https://www.gmmortera.com/',
  name: 'Gianfranco Mortera | Full-stack Engineer',
  description: 'Gianfranco Mortera — full-stack engineer by day, pixel artist by night. Work history and client and personal projects, built from Cebu, PH.',
  isPartOf: 'https://www.gmmortera.com/#website',
  publisher: 'https://www.gmmortera.com/#person'
}

export const WORK_EXPERIENCES = [
  {
    type: 'telehealth',
    period: 'Oct 2025–Present',
    company: 'US-based women\'s health telehealth startup',
    title: 'Frontend Developer (Contract)',
    achievements: [
      'Building user interfaces for a telehealth platform, translating product requirements into responsive, accessible UI.',
      'Optimizing frontend performance to keep pages fast and interactions smooth.',
      'Developing reusable component libraries that improve consistency and developer experience across the codebase.',
      'Ensuring cross-browser compatibility and conducting code reviews to maintain code quality.',
    ],
  },
  {
    type: 'freelance',
    period: '2024',
    company: 'Independent Contractor',
    title: 'Freelance Web Developer',
    achievements: [
      'Developed a responsive mockup website using Nuxt and WordPress integration, delivered on time and within budget.',
      'Translated client business requirements into technical specifications and a user-friendly interface design.',
    ],
  },
  {
    type: 'vauldex',
    period: '2023–2025',
    company: 'Vauldex Inc.',
    title: 'Software Engineer',
    achievements: [
      'Delivered 3 production-ready applications within 1.5 years, all with >99% uptime.',
      'Architected a scalable backend using Scala, Play, and PostgreSQL — reducing system latency by 25%.',
      'Integrated OpenAI APIs for natural-language querying of attendance analytics, improving manager efficiency.',
      'Self-taught SwiftUI within 2 weeks to deliver a functional iOS MVP with parental device restriction controls.',
      'Reduced onboarding time for new hires by 50% through standardized documentation templates.',
      'Recognized by Japan branch managers for bridging technical and business needs.',
    ],
  },
  {
    type: 'ctnp',
    period: '2020–2022',
    company: 'Cebu Tele-Net Philippines Corp.',
    title: 'BPO Customer Service Representative',
    achievements: [
      'Developed strong client communication and problem-solving skills in a high-pressure environment.',
    ],
  },
]

export interface Project {
  id: string
  name: string
  image?: string
  images?: string[]  // extra screenshots, paged with ◀ ▶ in the home gallery
  description: string
  link?: string
}

export type ArtCategory = 'other' | 'character-design' | 'in-game'

export interface ArtPiece {
  id: string
  title: string
  file: string     // e.g. '/pixel-arts/island-dusk.png'
  category: ArtCategory
  size?: string    // canvas size, e.g. '64x64'
  year?: string
  width: number    // intrinsic px size; /pixel-art uses the ratio to size tiles so nothing is cropped or letterboxed
  height: number
}

export const ART_CATEGORIES: { key: ArtCategory, label: string }[] = [
  { key: 'in-game', label: 'in-game' },
  { key: 'character-design', label: 'character-design' },
  { key: 'other', label: 'other' },
]

// Home shows the first HOME_PREVIEW_COUNT; /pixel-art shows all as a bento grid.
export const HOME_PREVIEW_COUNT = 3

export const ART_PIECES: ArtPiece[] = [
  { id: 'match-stick', title: 'Match Stick', file: '/pixel-arts/match-stick.png', category: 'other', width: 772, height: 584 },
  { id: 'game-concept', title: 'Game Concept', file: '/pixel-arts/game-concept.png', category: 'in-game', width: 960, height: 800 },
  { id: 'energy', title: 'Energy', file: '/pixel-arts/energy.png', category: 'in-game', width: 384, height: 288 },
  { id: 'verdant', title: 'Verdant', file: '/pixel-arts/verdant.png', category: 'other', width: 810, height: 960 },
  { id: 'blood-queen', title: 'Blood Queen', file: '/pixel-arts/blood-queen.png', category: 'character-design', width: 564, height: 576 },
  { id: 'broken-blade', title: 'Broken Blade', file: '/pixel-arts/broken-blade.png', category: 'in-game', width: 370, height: 380 },
  { id: 'demien', title: 'Demien', file: '/pixel-arts/demien.png', category: 'character-design', width: 320, height: 360 },
]

export const PROJECTS: Project[] = [
  {
    id: 'comic-silo',
    name: 'Comic Silo',
    image: '/dev-projects/comic-silo.png',
    description: 'A price comparison and catalog aggregator for comic books and graphic novels sold in the Philippines. Instead of visiting every comic retailer separately, search once on Comic Verse and compare prices, availability, and release dates then click through to buy directly from the store.',
    link: 'https://www.comicsilo.com/',
  },
  {
    id: 'avatar-showcase',
    name: 'Avatar Showcase',
    image: '/dev-projects/avatar-showcase.png',
    description: 'A platform to create avatars and chat casually with people on the internet. Music, art and easter eggs are integrated into the experience.',
    link: 'https://avatar-showcase-production.up.railway.app/',
  },
  {
    id: "comprehensive-time-manager",
    name: "ClockMe",
    image: "/dev-projects/clockme.png",
    description: "A sophisticated time management application featuring AI-powered analytics and real-time dashboards. Developed for a startup company with direct collaboration with Japan-based stakeholders.",
    link: 'https://clock.me/',
  },
  {
    id: 'studyhub',
    name: 'StudyHub',
    image: '/dev-projects/studyhub.png',
    description: 'A mock website built for a client: a study-room booking app that shows which rooms are available right now, lets students book one with a single tap, and cancel a booking later.',
    link: 'https://studyhub-production-e29f.up.railway.app/',
  },
  {
    id: 'layer-lab-cebu',
    name: 'Layer Lab Cebu',
    image: '/dev-projects/layer-lab-cebu.png',
    description: 'A production website for a Cebu-based 3D printing studio, designed, built, and deployed end to end as freelance client work. Nuxt on the frontend, Tailwind for the design system, deployed on Vercel.',
    link: 'https://layerlabcebu.com/',
  },
  {
    id: 'immuno-serology-tracker',
    name: 'Immuno Serology Tracker',
    image: '/dev-projects/immuno-serology-tracker.png',
    description: 'An inventory tracker for an immuno-serology lab. Every reagent and kit is logged by lot number with its expiry status, low-stock and expiring-soon filters surface what needs reordering, and each lot keeps a full history of stock changes.',
    link: 'https://immuno-serology-tracker-production.up.railway.app/',
  },
  {
    id: 'aesthetiq',
    name: 'aesthetiq',
    image: '/dev-projects/aesthetiq.png',
    description: 'An iOS app I\'m currently building: snap your clothes, pick an aesthetic, and the AI curates a look from what you already own, then renders it photo-realistically. The landing page is live with a waitlist for early access.',
    link: 'https://www.aesthetiq.site/',
  },
]