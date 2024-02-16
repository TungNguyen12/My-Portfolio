'use client'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Intro from '@/components/Intro'
import Projects from '@/components/Projects'
import SectionDivider from '@/components/SectionDivider'
import Skills from '@/components/Skills'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function Home() {
  const targetRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      if (!targetRef.current) return

      const { clientX, clientY } = event
      targetRef.current.style.setProperty('--x', `${clientX}px`)
      targetRef.current.style.setProperty('--y', `${clientY}px`)
    }
    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return (
    <motion.main
      className="flex min-h-screen flex-col items-center p-24 before:pointer-events-none before:fixed before:inset-0 before:-z-10 before:dark:bg-[radial-gradient(50.40%_50.55%_at_var(--x,_10px)_var(--y,_10px),#4f8daa_0%,_transparent_50%)] before:opacity-30"
      ref={targetRef}
    >
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </motion.main>
  )
}
