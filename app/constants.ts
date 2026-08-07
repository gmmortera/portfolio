export const TABS = {
  home: {
    title: '~/',
    path: '/',
    stucturedData: {
      type: 'HomePage',
      id: 'https://www.gmmortera.com/#home',
      url: 'https://www.gmmortera.com/',
      name: 'Gianfranco Mortera | Full-stack Engineer',
      description: 'Gianfranco Mortera — frontend engineer by day, pixel artist by night. Building for the web from Cebu, PH, and currently learning game dev.',
      isPartOf: 'https://www.gmmortera.com/#website',
      publisher: 'https://www.gmmortera.com/#person'
    }
  },
  about: {
    title: '~/experience',
    path: '/experience',
    stucturedData: {
      type: 'ProfilePage',
      id: 'https://www.gmmortera.com/#experience',
      url: 'https://www.gmmortera.com/experience',
      name: 'Experience - Gianfranco Mortera | Full-stack Engineer',
      description: 'Work history and achievements — Gianfranco Mortera, full-stack developer crafting clean, interactive, and meaningful digital experiences from Cebu, PH.',
      isPartOf: 'https://www.gmmortera.com/#website',
      publisher: 'https://www.gmmortera.com/#person'
    }
  },
  projects: {
    title: '~/projects',
    path: '/projects',
    stucturedData: {
      type: 'CollectionPage',
      id: 'https://www.gmmortera.com/#projects',
      url: 'https://www.gmmortera.com/projects',
      name: 'Projects - Gianfranco Mortera | Full-stack Engineer',
      description: 'Client and personal projects by Gianfranco Mortera — full-stack developer crafting clean, interactive, and meaningful digital experiences from Cebu, PH.',
      isPartOf: 'https://www.gmmortera.com/#website',
      publisher: 'https://www.gmmortera.com/#person'
    }
  },
  // pixels: {
  //   title: '~/pixels',
  //   path: '/pixels',
  //   stucturedData: {
  //     type: 'CollectionPage',
  //     id: 'https://www.gmmortera.com/#pixels',
  //     url: 'https://www.gmmortera.com/pixels',
  //     name: 'Pixel Art - Gianfranco Mortera | Full-stack Engineer',
  //     description: 'The night shift — sprites, tiles, and tiny worlds by Gianfranco Mortera.',
  //     isPartOf: 'https://www.gmmortera.com/#website',
  //     publisher: 'https://www.gmmortera.com/#person'
  //   }
  // },
}

export const WORK_EXPERIENCES = [
  {
    type: 'winona',
    period: '2025–Present',
    company: 'Winona',
    title: 'Frontend Engineer',
    achievements: [
      'Building and maintaining frontend features for a health and wellness platform serving thousands of users.',
      'Collaborating with cross-functional teams to align UI implementation with business and compliance requirements.',
      'Contributed to scalable component architecture and improved developer experience across the codebase.',
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
  description: string
  link?: string
}

export type ArtCategory = 'other' | 'character-design' | 'in-game'

export interface ArtPiece {
  id: string
  title: string
  file: string     // e.g. '/pixels/island-dusk.png'
  size: string     // canvas size, e.g. '64x64'
  year: string
  category: ArtCategory
}

export const ART_CATEGORIES: { key: ArtCategory, label: string }[] = [
  { key: 'in-game', label: 'in-game' },
  { key: 'character-design', label: 'character-design' },
  { key: 'other', label: 'other' },
]

export const PROJECTS: Project[] = [
  {
    id: "comprehensive-time-manager",
    name: "ClockMe",
    image: "/dev-projects/clockme.png",
    description: "A sophisticated time management application featuring AI-powered analytics and real-time dashboards. Developed for a startup company with direct collaboration with Japan-based stakeholders.",
    link: 'https://clock.me/',
  },
  {
    id: 'comic-silo',
    name: 'Comic Silo',
    image: '/dev-projects/comic-silo.png',
    description: 'A price comparison and catalog aggregator for comic books and graphic novels sold in the Philippines. Instead of visiting every comic retailer separately, search once on Comic Verse and compare prices, availability, and release dates then click through to buy directly from the store.',
    link: 'https://www.comicsilo.com/',
  },
  {
    id: 'website-performance-checker',
    name: 'GovCheck',
    image: '/dev-projects/govcheck-ph.png',
    description: 'A civic tech web app that monitors the speed, uptime, and usability of Philippine government websites (.gov.ph domains). It serves two audiences: Filipino citizens quickly check if a gov site is down or slow before wasting time Government accountability public leaderboard and incident history to pressure agencies to improve',
    link: 'https://govcheck-ph.vercel.app/',
  },
  {
    id: 'layer-lab-cebu',
    name: 'Layer Lab Cebu',
    image: '/dev-projects/layer-lab-cebu.png',
    description: 'A production website for a Cebu-based 3D printing studio, designed, built, and deployed end to end as freelance client work. Nuxt on the frontend, Tailwind for the design system, deployed on Vercel.',
    link: 'https://layerlabcebu.com/',
  },
  {
    id: 'karakoa-solutions',
    name: 'Karakoa Solutions',
    image: '/dev-projects/karakoa-solutions.png',
    description: 'A Philippine-based team providing recurring IT, virtual assistant (VA), and executive assistant (EA) services. The team is coordinated by a single lead to minimize handoffs and streamline project management.',
    link: 'https://www.karakoa-solutions.com/',
  }
]