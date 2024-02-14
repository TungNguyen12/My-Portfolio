'use client'
import { useTheme } from '@/context/ThemeContext'
import React from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'

const ThemeSwitch = () => {
  const { theme, switchTheme } = useTheme()

  return (
    <button
      className="fixed top-10 right-10 hover:scale-[1.2] active:scale-105 transition-all"
      onClick={switchTheme}
    >
      {theme === 'dark' ? <BsSun /> : <BsMoon />}
    </button>
  )
}

export default ThemeSwitch
