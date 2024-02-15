'use client'

import React, { useRef } from 'react'
import { projectsData } from '../../lib/data'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

type ProjectProps = (typeof projectsData)[number]

const Project = ({ title, description, tags, imageUrl, url }: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  })

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.75, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0 cursor-pointer"
      onClick={(event) => (window.location.href = url)}
    >
      <section className="max-w-[42rem]  overflow-hidden sm:pr-8 relative items-center sm:h-[20rem] border border-black/5 rounded-lg  even:pl-12 hover:bg-gray-200 transition group-even:pl-14 dark:bg-white/10 dark:hover:bg-white/20 ">
        <div className="pt-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]">
          <h3 className="text-2xl front-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-800 dark:text-gray-100">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.6] px-3 py-1 text-[0.7rem] uppercase rounded-full text-white"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          width="120"
          height="120"
          alt="Project I worked on"
          className="absolute top-8 -right-72 w-[38.25rem] h-[28.25rem] object-cover rounded-t-lg shadow-2xl
     group-even:-left-72
        transition
        group-hover:scale-[1.04]
        group-even:right-[initial]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2
        
        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2"
          quality={100}
          unoptimized
        ></Image>
      </section>
    </motion.div>
  )
}

export default Project
