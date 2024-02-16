import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const

export const experiencesData = [
  {
    title: 'Full-Stack Developer',
    location: 'Finland',
    description:
      "I'm now a junior full-stack developer working freshly graduated from a trusted academy - Integrify, where I gained and explores new technologies during intensive programme. My stack includes React, Next.js, TypeScript, Tailwind, Redux and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: 'Jan 2023 - present',
  },
  {
    title: 'Freelance photographer',
    location: 'Finland',
    description:
      'Having a big passion on art and photography, I taught myself how to use camera to catch breathtaking pictures in late 2020. Additionally self-learning how to use Adobe softwares to support editing images, eg Lightroom Classic, Photoshop. I have been actively doing variety of clients gig like wedding, event, sport,..',
    icon: React.createElement(CgWorkAlt),
    date: '2020 - 2023',
  },
  {
    title: 'LAB University of Applied Sciences',
    location: 'Lahti, Finland',
    description:
      'During the time in LAB, I had explored and learned new knowledge about the Business and IT field, also gained the experiences of team working, communication and integrated myself into the Finnish culture.',
    icon: React.createElement(LuGraduationCap),
    date: '2018',
  },
] as const

export const projectsData = [
  {
    title: 'Fullstack Library Application',
    description:
      'Frontend was individual while Backend of the app was team collaboration',
    tags: [
      'React',
      'Redux',
      'MongoDB',
      'Express',
      'Node.js',
      'Material-UI',
      'Typescript',
      'Jest',
    ],
    imageUrl: '/library.jpg',
    url: 'https://tungnguyen12.github.io/Library-Frontend/',
  },
  {
    title: 'Landing pages',
    description:
      'Apply UX/UI, Accessibility, User-centered design I learned from Google courses then combine with HTML, CSS to build landing pages',
    tags: ['HTML', 'CSS', 'UX/UI', 'Accessibility'],
    imageUrl: '/staticweb.jpg',
    url: 'https://tungnguyen12.github.io/htmlcss-project-02/',
  },
  {
    title: 'Portfolio',
    description:
      'With newly adapted techs, Next.js Tailwind and Resend along with my handson experiences, React, Typescript to build my personal portfolio ',
    tags: ['Next.js', 'Tailwind', 'React', 'Typescript', 'Resend'],
    imageUrl: '/portfolio.jpg',
    url: 'https://tungnguyen.site/',
  },
  {
    title: 'Besnik landing',
    description:
      'Apply UX/UI, Accessibility, User-centered design I learned from Google courses then combine with HTML, CSS to build landing pages',
    tags: ['HTML', 'CSS', 'UX/UI', 'Accessibility'],
    imageUrl: '/landingpage2.jpg',
    url: 'https://tungnguyen12.github.io/htmlcss-project-01/',
  },
] as const

export const profile = { profile: '/profile.jpg' }

export const skillsData = [
  'HTML',
  'CSS',
  'SCSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'MongoDB',
  'Redux',
  'Express',
  'PostgreSQL',
  'Framer Motion',
  'Material-UI',
  'Jest',
] as const
