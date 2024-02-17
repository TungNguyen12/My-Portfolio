'use client'

import React from 'react'
import SectionHeading from './SectionHeading'
import { skillsData } from '../../lib/data'
import useSectionInView from '../../lib/hooks'
import { motion } from 'framer-motion'

const Skills = () => {
  const { ref } = useSectionInView('Skills', 1)

  const fadeInVariants = {
    initial: {
      opacity: 0,
      y: 80,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  }

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[60rem] scroll-mt-28 text-center sm:mb-40"
      id="skills"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap gap-2 justify-center">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white border border-black/[0.1] rounded-xl px-5 py-3
            dark:text-gray-100
            dark:bg-white/10
            dark:hover:bg-white/20     
            "
            key={index}
            variants={fadeInVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
