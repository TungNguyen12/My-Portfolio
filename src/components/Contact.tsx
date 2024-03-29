'use client'

import React from 'react'
import SectionHeading from './SectionHeading'
import useSectionInView from '../../lib/hooks'
import { sendEmail } from '@/functions/sendEmail'
import { callWorker } from '@/functions/callWorker'
import SubmitButton from './SubmitButton'
import toast from 'react-hot-toast'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

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
          // const { formData, error } = await sendEmail(data)
          const { formDataAxios, axiosError }: any = await callWorker(data)
          if (axiosError) {
            // toast.error(error)
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
        <div className="flex justify-between">
          <SubmitButton />

          <div className="flex gap-4">
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
          </div>
        </div>
      </form>
    </section>
  )
}

export default Contact
