'use server'

import { Resend } from 'resend'
import { extractErrorMessage, validateData } from '../../lib/utils'
import ContactFormEmail from '@/email/ContactFormEmail'
import React from 'react'

const resend = new Resend(process.env.RESEND_API_KEY)

resend.domains.verify('tungnguyen.site')

export const sendEmail = async (data: FormData) => {
  const message = data.get('message')
  const senderEmail = data.get('senderEmail')

  if (!validateData(message, 100)) {
    return {
      error: 'Invalid message',
    }
  }

  if (!validateData('senderEMail', 500)) {
    return {
      error: 'Invalid message',
    }
  }

  let formData = {}
  try {
    formData = await resend.emails.send({
      from: 'From Contact form at my portfolio<onboarding@resend.de>',
      to: 'nvtung382@gmail.com',
      subject: 'Message from my portfolio',
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
      }),
    })
  } catch (error: unknown) {
    return {
      error: extractErrorMessage(error),
    }
  }

  return {
    formData,
  }
}
