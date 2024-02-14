'use client'

import React, { SetStateAction } from 'react'
import { motion } from 'framer-motion'
import { links } from '../../lib/data'
import Link from 'next/link'
import clsx from 'clsx'
import { useActiveSectionContext } from '@/context/ActiveSection'
import { SectionName } from '../../lib/types'

const Header = () => {
  const { activeSection, setActiveSection, setLastClick } =
    useActiveSectionContext()
  const handleChangeSection = (name: SetStateAction<SectionName>) => {
    setActiveSection(name)
  }

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-95 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      ></motion.div>
      <nav className="fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-1/2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 bg-navy-900">
        <ul className=" flex flex-row w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] front-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  'flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition  dark:hover:text-gray-100 ',
                  {
                    'text-gray-950': activeSection === link.name,
                    'dark:text-gray-100': activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  handleChangeSection(link.name)
                  setLastClick(Date.now())
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-200 rounded-full absolute inset-0 inset-y-1 pt-6 -z-10 dark:bg-gray-700"
                    layoutId="activeSection"
                    transition={{
                      type: 'tween',
                      stiffness: 100,
                      damping: 50,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
