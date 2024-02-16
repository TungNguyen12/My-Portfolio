import React from 'react'

const Footer = () => {
  return (
    <footer className="mb-4 px-4 text-center text-gray-400">
      <small className="mb-2 block text-xs">&copy; 2024 Tung Nguyen</small>
      <p className="text-xs">
        https://dash.cloudflare.com/f744ca30ae80a66e052794da3886f018/domains
        <span className="font-semibold">Build with: </span>
        Next.js, Tailwind CSS, Framer Motion, Typescript, React Email and Resend
        <br />
        <span className="font-semibold">Deploy on: </span>
        Cloudflare
      </p>
    </footer>
  )
}

export default Footer
