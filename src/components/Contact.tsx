'use client'

import React from 'react'
import SectionHeading from './SectionHeading'
import useSectionInView from '../../lib/hooks'
import { sendEmail } from '@/functions/sendEmail'
import { callWorker } from '@/functions/callWorker'
import SubmitButton from './SubmitButton'
import toast from 'react-hot-toast'

const Contact = () => {
  const { ref } = useSectionInView('Contact', 1)
  return (
    <section
      id="contact"
      ref={ref}
      className="mb-20 mt-28 sm:mb-28 w-[min(100%, 38rem)]"
    >
      <SectionHeading>Contact me</SectionHeading>
      <p>
        You can contact me at{' '}
        <a href="nvtung382@gmail.com" className="underline">
          nvtung382@gmail.com
        </a>{' '}
        or through this form
      </p>

      <form
        action={async (data) => {
          const { formData, error } = await sendEmail(data)
          const { formDataAxios, axiosError } = await callWorker(data)
          if (error) {
            toast.error(error)
            toast.error(axiosError)
            return
          }

          toast.success('Sent to Pete successfully')
        }}
        className=" flex flex-col align-center mt-12 w-[100%]"
      >
        <input
          type="email"
          className="borderBlack solid rounded-md w-inherit h-12 mb-4 pl-3  darkThemeContact"
          placeholder="Your email"
          required
          maxLength={100}
          name="senderEmail"
        />
        <textarea
          placeholder="Your message"
          className="borderBlack solid rounded-md h-[16rem] mb-4 p-3 darkThemeContact"
          required
          maxLength={400}
          name="message"
        ></textarea>
        <SubmitButton />
      </form>
    </section>
  )
}

export default Contact
