import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import ActiveSectionContextProvider from '@/context/ActiveSection'
import { Toaster } from 'react-hot-toast'
import ThemeSwitch from '@/components/ThemeSwitch'
import ThemeContextProvider from '@/context/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tung Nguyen',
  description: 'Hire me',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👾</text></svg>
"
        />
      </head>
      <body
        className={`${inter.className} bg-white text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:opacity-90 relative transition-colors duration-500  `}
      >
        <div className="bg-[#d68d8d] dark:bg-[#58a769] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[15rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#918ad1] dark:bg-[#3d5d6b] absolute top-[-1rem] -z-10 left-[35rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[15rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[15rem] 2xl:left-[-5rem]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="bottom-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
