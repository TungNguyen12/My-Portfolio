'use client'

import React, { ReactNode, createContext, useContext, useState } from 'react'
import { SectionName } from '../../lib/types'

type ActiveSectionContextProviderProps = { children: ReactNode }

type ActiveSectionContextType = {
  activeSection: SectionName
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
  lastClick: number
  setLastClick: React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null)

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext)

  if (context === null) {
    throw new Error(
      'useActiveSectionContext only be used inside a ActiveSectionContextProvider'
    )
  }

  return context
}

const ActiveSectionContextProvider = ({
  children,
}: ActiveSectionContextProviderProps) => {
  const [activeSection, setActiveSection] = useState<SectionName>('Home')
  const [lastClick, setLastClick] = useState(0)
  return (
    <ActiveSectionContext.Provider
      value={{ activeSection, setActiveSection, lastClick, setLastClick }}
    >
      {children}
    </ActiveSectionContext.Provider>
  )
}

export default ActiveSectionContextProvider
