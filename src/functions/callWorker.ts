import ContactFormEmail from '@/email/ContactFormEmail'
import axios from 'axios'
import React from 'react'

export const callWorker = async (data: FormData) => {
  const message = data.get('message')
  const senderEmail = data.get('senderEmail')

  const postedMail = await axios.post(
    'https://resend-portfolio.nvtung382.workers.dev/',
    {
      from: 'From Contact form at my portfolio<onboarding@resend.de>',
      to: 'nvtung382@gmail.com',
      subject: 'Message from my portfolio',
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
      }),
    }
  )
  return postedMail
}
