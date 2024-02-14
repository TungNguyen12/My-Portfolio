'use client'

import React, { useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

type ThemeContextType = {
  theme: Theme
  switchTheme: () => void
}
const ThemeContext = React.createContext<ThemeContextType | null>(null)

type ThemeContextProviderProps = {
  children: React.ReactNode
}

export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (context === null) {
    throw new Error('useTheme must be used within a ThemeContextProvider')
  }
  return context
}

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<Theme>('light')
  const switchTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      window.localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
    } else {
      setTheme('light')
      window.localStorage.setItem('theme', 'light')
      document.documentElement.classList.remove('dark')
    }
  }

  useEffect(() => {
    const localStorageTheme = window.localStorage.getItem(
      'theme'
    ) as Theme | null

    if (localStorageTheme === 'dark') {
      setTheme(localStorageTheme)
      document.documentElement.classList.add('dark')
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
      document.documentElement.classList.add('dark')
    }
  }, [])
  return (
    <ThemeContext.Provider
      value={{
        theme,
        switchTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
