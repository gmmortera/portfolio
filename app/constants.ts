export const TABS = {
  home: {
    title: '~/',
    path: '/',
    stucturedData: {
      type: 'HomePage',
      id: 'https://gmmortera.com/#home',
      url: 'https://gmmortera.com/',
      name: 'Gianfranco Mortera | Full-stack Engineer',
      description: 'Full-stack developer crafting clean, interactive, and meaningful digital experiences from Cebu, PH.',
      isPartOf: 'https://gmmortera.com/#website',
      publisher: 'https://gmmortera.com/#person'
    }
  },
  about: {
    title: '~/experience',
    path: '/experience',
    stucturedData: {
      type: 'ExperiencePage',
      id: 'https://gmmortera.com/#experience',
      url: 'https://gmmortera.com/experience',
      name: 'Experience - Gianfranco Mortera | Full-stack Engineer',
      description: 'Full-stack developer crafting clean, interactive, and meaningful digital experiences from Cebu, PH.',
      isPartOf: 'https://gmmortera.com/#website',
      publisher: 'https://gmmortera.com/#person'
    }
  },
  projects: {
    title: '~/projects',
    path: '/projects',
    stucturedData: {
      type: 'ProjectPage',
      id: 'https://gmmortera.com/#projects',
      url: 'https://gmmortera.com/projects',
      name: 'Projects - Gianfranco Mortera | Full-stack Engineer',
      description: 'Full-stack developer crafting clean, interactive, and meaningful digital experiences from Cebu, PH.',
      isPartOf: 'https://gmmortera.com/#website',
      publisher: 'https://gmmortera.com/#person'
    }
  },
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
  image: string
  overview: string
  description: string
  technologies: string[]
}

export const PROJECTS = [
  {
    id: "comprehensive-time-manager",
    name: "ClockMe",
    image: "https://res.cloudinary.com/duhef6fci/image/upload/v1746628077/secl8yghxrivj1scg84k.png",
    overview: 'AI-powered analytics and live dashboards for smarter time management, shipped for a startup.',
    description: "A sophisticated time management application featuring AI-powered analytics and real-time dashboards. Developed for a startup company with direct collaboration with Japan-based stakeholders.",
    technologies: ["Nuxt 3", "TypeScript", "Tailwind CSS", "OpenAI API"],
  },
  {
    id: 'comic-silo',
    name: 'Comic Silo',
    image: 'https://res.cloudinary.com/duhef6fci/image/upload/v1746628077/secl8yghxrivj1scg84k.png',
    overview: 'Search once to compare prices, stock, and release dates for comics across Philippine stores.',
    description: 'A price comparison and catalog aggregator for comic books and graphic novels sold in the Philippines. Instead of visiting every comic retailer separately, search once on Comic Verse and compare prices, availability, and release dates then click through to buy directly from the store.',
    technologies: ['Nuxt 3', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'social-media-server',
    name: 'Chummy',
    image: 'https://res.cloudinary.com/duhef6fci/image/upload/v1746628077/secl8yghxrivj1scg84k.png',
    overview: 'A responsive social space where every post, comment, and like lands in real time.',
    description: 'A dynamic platform enabling users to create posts, comment, and like content in real-time. Chummy fosters instant connections and engagement. This application aims to create a vibrant, responsive community where every interaction feels immediate and impactful.',
    technologies: ['Scala', 'Play Framework', 'Akka'],
  },
  {
    id: 'website-performance-checker',
    name: 'GovCheck',
    image: 'https://res.cloudinary.com/duhef6fci/image/upload/v1746628077/secl8yghxrivj1scg84k.png',
    overview: 'Monitors Philippine .gov.ph sites for downtime and slowness for citizens to check and agencies to answer for.',
    description: 'A civic tech web app that monitors the speed, uptime, and usability of Philippine government websites (.gov.ph domains). It serves two audiences: Filipino citizens quickly check if a gov site is down or slow before wasting time Government accountability public leaderboard and incident history to pressure agencies to improve',
    technologies: ['Nuxt 3', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'brook',
    name: 'Brook',
    image: 'https://res.cloudinary.com/duhef6fci/image/upload/v1746628077/secl8yghxrivj1scg84k.png',
    overview: "A simplified distributed message broker implementing Kafka's core architecture from scratch in Scala and Akka.",
    description: 'A simplified message broker built in Scala, inspired by the core architecture of Apache Kafka. It implements the fundamental concepts of a distributed messaging system append-only partition logs, a binary TCP protocol, and concurrent producer and consumer clients from scratch using the JVM standard library and Akka.',
    technologies: ['Scala'],
  }
]