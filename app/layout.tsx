import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'India Property Show',
  description: 'Leading the future of innovative exhibitions, dynamic conferences and memorable experiences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

