'use client'
import React from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'

import useSectionInView from '../../lib/hooks'

const About = () => {
  const { ref } = useSectionInView('About', 0.8)

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p>
        I have gained a solid base as a programmer during my bachelor’s degree
        studies in Information Technology and since he has worked as a Logistics
        Coordinator at Posti. In earlier 2023, I started programming actively
        focusing on UX/UI before delving deeper into programming at Integrify. I
        have also completed a certificate in the Finnish language.
      </p>
    </motion.section>
  )
}

export default About
