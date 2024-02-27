'use client'

import React from 'react'
import SectionHeading from './SectionHeading'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { experiencesData } from '../../lib/data'
import useSectionInView from '../../lib/hooks'
import { useTheme } from '@/context/ThemeContext'

const Experience = () => {
  const { ref } = useSectionInView('Experience', 0.4)
  const { theme } = useTheme()
  return (
    <section id="experience" ref={ref}>
      <SectionHeading>Career Growth Milestones</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === 'light' ? '#f3f4f6' : 'rgb(255 255 255 / 0.1)',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.05',
                padding: '1.3rem 3rem',
                zIndex: 100,
              }}
              visible={true}
              contentArrowStyle={{
                borderRight: '0.4rem solid grey',
              }}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{
                zIndex: 10,
                background: theme === 'light' ? '#f3f4f6' : 'rgb(17 24 39)',
              }}
            >
              <h3 className="font-semibold capitalize">{experience.title}</h3>
              <p className="font-normal !mt-0">{experience.location}</p>
              <p className="!mt-1 font-normal text-gray-600 dark:text-gray-300">
                {experience.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  )
}

export default Experience
