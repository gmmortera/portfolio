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
  overview: string
  description: string
  technologies: string[]
  status?: 'deployed' | 'in_development'
  kind?: 'personal' | 'client'
  github?: string
  live?: string
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

export const ART_PIECES: ArtPiece[] = [
  { id: 'me', title: 'me', file: '/pixel-art/me.png', size: '256x256', year: '2022', category: 'other' },
  { id: 'please-dont-get-grabbed', title: 'please dont get grabbed', file: '/pixel-art/please-dont-get-grabbed.png', size: '288x258', year: '2022', category: 'other' },
  { id: 'jarnbjorn', title: 'jarnbjorn', file: '/pixel-art/jarnbjorn.png', size: '256x256', year: '2022', category: 'other' },
  { id: 'kirby', title: 'kirby', file: '/pixel-art/kirby.png', size: '256x256', year: '2022', category: 'other' },
  { id: 'brick', title: 'brick', file: '/pixel-art/brick.png', size: '256x256', year: '2022', category: 'other' },
  { id: 'flight', title: 'flight', file: '/pixel-art/flight.png', size: '256x256', year: '2022', category: 'other' },
  { id: 'demon', title: 'demon', file: '/pixel-art/demon.png', size: '256x384', year: '2022', category: 'other' },
  { id: 'selection', title: 'selection', file: '/pixel-art/selection.png', size: '256x256', year: '2022', category: 'other' },
  { id: 'agile', title: 'agile', file: '/pixel-art/agile.png', size: '300x256', year: '2022', category: 'other' },
  { id: 'lies', title: 'lies', file: '/pixel-art/lies.png', size: '300x264', year: '2022', category: 'other' },
  { id: 'tooth', title: 'tooth', file: '/pixel-art/tooth.png', size: '384x288', year: '2022', category: 'other' },
  { id: 'dragon', title: 'dragon', file: '/pixel-art/dragon.png', size: '384x288', year: '2022', category: 'other' },
  { id: 'energy', title: 'energy', file: '/pixel-art/energy.png', size: '384x288', year: '2022', category: 'other' },
  { id: 'demi', title: 'demi', file: '/pixel-art/demi.png', size: '320x360', year: '2023', category: 'other' },
  { id: 'the-guardian-from-the-broken-blade', title: 'the guardian from the broken blade', file: '/pixel-art/the-guardian-from-the-broken-blade.png', size: '370x380', year: '2023', category: 'other' },
  { id: 'character-concept-5', title: 'character concept 5', file: '/pixel-art/character-concept-5.png', size: '772x584', year: '2023', category: 'character-design' },
  { id: 'character-concept-6', title: 'character concept 6', file: '/pixel-art/character-concept-6.png', size: '564x576', year: '2023', category: 'character-design' },
  { id: 'halogi-of-the-verdant-inferno', title: 'halogi of the verdant inferno', file: '/pixel-art/halogi-of-the-verdant-inferno.png', size: '810x960', year: '2023', category: 'character-design' },
  { id: 'shadow', title: 'shadow', file: '/pixel-art/shadow.png', size: '256x256', year: '2022', category: 'character-design' },
  { id: 'character-concept-1', title: 'character concept 1', file: '/pixel-art/character-concept-1.png', size: '380x270', year: '2022', category: 'character-design' },
  { id: 'character-concept-2', title: 'character concept 2', file: '/pixel-art/character-concept-2.png', size: '380x270', year: '2022', category: 'character-design' },
  { id: 'character-concept-3', title: 'character concept 3', file: '/pixel-art/character-concept-3.png', size: '380x270', year: '2022', category: 'character-design' },
  { id: 'warlock', title: 'warlock', file: '/pixel-art/warlock.png', size: '288x240', year: '2023', category: 'character-design' },
  { id: 'magdalena', title: 'magdalena', file: '/pixel-art/magdalena.png', size: '256x256', year: '2022', category: 'character-design' },
  { id: 'character-concept-4', title: 'character concept 4', file: '/pixel-art/character-concept-4.png', size: '480x320', year: '2023', category: 'character-design' },
  { id: 'in-game-concept-1', title: 'in-game concept 1', file: '/pixel-art/in-game-concept-1.png', size: '600x416', year: '2023', category: 'in-game' },
  { id: 'in-game-concept-2', title: 'in-game concept 2', file: '/pixel-art/in-game-concept-2.png', size: '960x800', year: '2023', category: 'in-game' },
]

export const PROJECTS = [
  {
    id: "comprehensive-time-manager",
    name: "ClockMe",
    image: "/dev-projects/clockme.png",
    overview: 'AI-powered analytics and live dashboards for smarter time management, shipped for a startup.',
    description: "A sophisticated time management application featuring AI-powered analytics and real-time dashboards. Developed for a startup company with direct collaboration with Japan-based stakeholders.",
    technologies: ["Nuxt 3", "TypeScript", "Tailwind CSS", "OpenAI API"],
    status: 'deployed',
    kind: 'client',
  },
  {
    id: 'comic-silo',
    name: 'Comic Silo',
    image: '/dev-projects/comic-silo.png',
    overview: 'Search once to compare prices, stock, and release dates for comics across Philippine stores.',
    description: 'A price comparison and catalog aggregator for comic books and graphic novels sold in the Philippines. Instead of visiting every comic retailer separately, search once on Comic Verse and compare prices, availability, and release dates then click through to buy directly from the store.',
    technologies: ['Nuxt 3', 'TypeScript', 'Tailwind CSS'],
    status: 'deployed',
    kind: 'personal',
  },
  {
    id: 'social-media-server',
    name: 'Chummy',
    overview: 'A responsive social space where every post, comment, and like lands in real time.',
    description: 'A dynamic platform enabling users to create posts, comment, and like content in real-time. Chummy fosters instant connections and engagement. This application aims to create a vibrant, responsive community where every interaction feels immediate and impactful.',
    technologies: ['Scala', 'Play Framework', 'Akka'],
    status: 'deployed',
    kind: 'personal',
    github: 'https://github.com/gmmortera/chummy-backend'
  },
  {
    id: 'website-performance-checker',
    name: 'GovCheck',
    image: '/dev-projects/govcheck-ph.png',
    overview: 'Monitors Philippine .gov.ph sites for downtime and slowness for citizens to check and agencies to answer for.',
    description: 'A civic tech web app that monitors the speed, uptime, and usability of Philippine government websites (.gov.ph domains). It serves two audiences: Filipino citizens quickly check if a gov site is down or slow before wasting time Government accountability public leaderboard and incident history to pressure agencies to improve',
    technologies: ['Nuxt 3', 'TypeScript', 'Tailwind CSS'],
    status: 'deployed',
    kind: 'personal',
    github: 'https://github.com/gmmortera/govcheck-ph'
  },
  {
    id: 'brook',
    name: 'Brook',
    overview: "A simplified distributed message broker implementing Kafka's core architecture from scratch in Scala and Akka.",
    description: 'A simplified message broker built in Scala, inspired by the core architecture of Apache Kafka. It implements the fundamental concepts of a distributed messaging system append-only partition logs, a binary TCP protocol, and concurrent producer and consumer clients from scratch using the JVM standard library and Akka.',
    technologies: ['Scala', 'Akka', 'TCP'],
    status: 'in_development',
    kind: 'personal',
  },
  {
    id: 'layer-lab-cebu',
    name: 'Layer Lab Cebu',
    image: '/dev-projects/layer-lab-cebu.png',
    overview: 'Client work — a 3D printing studio site in Cebu, designed and shipped end to end.',
    description: 'A production website for a Cebu-based 3D printing studio, designed, built, and deployed end to end as freelance client work. Nuxt on the frontend, Tailwind for the design system, deployed on Vercel.',
    technologies: ['Nuxt', 'Tailwind CSS', 'Vercel'],
    status: 'deployed',
    kind: 'client',
  }
]