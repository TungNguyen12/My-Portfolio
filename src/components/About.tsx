'use client'
import React from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'

import useSectionInView from '../../lib/hooks'

const About = () => {
  const { ref } = useSectionInView('About', 1)

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-10 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p>
        In late 2022, I began teaching myself UX/UI design on Google. Intrigued
        by the process, I ventured into HTML/CSS to bring my designs to life. As
        I digged deeper into coding, particularly JavaScript, I discovered my
        passion for web development and problem-solving.
      </p>
      <p>
        Continuously learning and exploring new technologies, I am thrilled to
        embark on the next chapter of my career to pursue frontend development.
      </p>
      <span className="font-mono">
        As an aspiring junior developer, I want to utilize my skills in
        teamwork, communication, problem-solving, and UX/UI to create
        user-friendly applications that deliver meaningful value.
        {/* Hello world */}
      </span>
    </motion.section>
  )
}

export default About
