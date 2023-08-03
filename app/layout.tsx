import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RockOClock',
  description: 'Using nasa api to display past and future rocks passing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-gradient-to-l from-slate-900 to-blue-900'>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
