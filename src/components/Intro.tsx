'use client'
import Image from 'next/image'
import React from 'react'
import { easeIn, motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'
import useSectionInView from '../../lib/hooks'
import { useActiveSectionContext } from '@/context/ActiveSection'
import { avatar } from '../../lib/data'

const Intro = () => {
  const { ref } = useSectionInView('Home', 1)
  const { setActiveSection, setLastClick } = useActiveSectionContext()

  return (
    <section
      id="home"
      className="scroll-mt-[100rem] sm-mb-0 text-center max-w[50rem]"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, transition: easeIn }}
            transition={{
              type: 'tween',
              duration: 0.4,
            }}
          >
            <Image
              src={avatar.avatar}
              alt="Tung Nguyen"
              width="180"
              height="180"
              quality="90"
              priority={true}
              className="rounded-full h-34 w-34 object-cover border-[0.35rem] border-white"
            ></Image>
          </motion.div>

          <motion.span
            className="absolute text-4xl top-[2rem] bottom-[-2rem] right-0 "
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.15,
              duration: 1,
            }}
          >
            🙋‍♂️
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold dark:gradientText animate-text bg-gradient-to-r from-white via-blue-500 to-green-600 bg-clip-text text-transparent text-5xl">
          Hello, I am Tung Nguyen
        </span>
        <br /> As a{' '}
        <span className="font-bold gradientText dark:text-transparent dark:bg-clip-text">
          junior full-stack developer
        </span>{' '}
        , I enjoy building <span className="italic">sites & apps</span>,{' '}
        <span>learning new technologies</span>
        <span> & taking photos</span>.<br /> My focus is{' '}
        <span className="underline">Frontend Development</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ delay: 0.4 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-pink-600 active:scale-105 transition-transform
          dark:hover:bg-slate-700
          "
          onClick={() => {
            setActiveSection('Contact')
            setLastClick(Date.now())
          }}
        >
          Contact me{' '}
          <BsArrowRight className="opacity-70 group-hover:translate-x-2 group-hover:transition-transform" />
        </Link>
        <a
          className="group bg-white text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-purple-200 active:scale-105 transition-transform cursor-pointer dark:bg-white/10 dark:text-gray-100"
          href="/CV.pdf"
          download={true}
        >
          Get my CV{' '}
          <HiDownload
            className="opacity-70 group-hover:animate-bounce group-hover:transition-transform
          dark:opacity-90
          "
          />
        </a>

        <a
          href="https://www.linkedin.com/in/tungnguyen0702/"
          target="_blank"
          className="bg-white p-3 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10
          dark:text-gray-100"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/TungNguyen12"
          target="_blank"
          className="bg-white p-3 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10
          dark:text-gray-100"
        >
          <FaGithub />
        </a>
      </motion.div>
    </section>
  )
}

export default Intro
