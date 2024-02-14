import React from 'react'
import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'

type ContactFormEmailProps = {
  message: string
}

const ContactFormEmail = ({ message }: ContactFormEmailProps) => {
  return (
    <Html>
      <Head>
        <Preview>Preview text for this email</Preview>
        <Tailwind>
          <Body className="bg-white my-auto mx-auto font-sans px-2">
            <Container>
              <Section>
                <Img
                  src={'../../public/Durango.jpg'}
                  width="100"
                  height="37"
                  alt="React email"
                  className="my-0 mx-auto"
                ></Img>
              </Section>

              <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                Join <strong>{message}</strong> on <strong>Vercel</strong>
              </Heading>
            </Container>
          </Body>
        </Tailwind>
      </Head>
    </Html>
  )
}

export default ContactFormEmail
