import { useActiveSectionContext } from '@/context/ActiveSection'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { SectionName } from './types'

const useSectionInView = (sectionName: SectionName, threshold = 0.75) => {
  const { ref, inView } = useInView({
    threshold,
  })
  const { setActiveSection, lastClick } = useActiveSectionContext()
  useEffect(() => {
    if (inView && Date.now() - lastClick > 1000) {
      setActiveSection(sectionName)
    }
  }, [inView, setActiveSection, lastClick, sectionName])

  return { ref }
}

export default useSectionInView
