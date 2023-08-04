import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
const inter = Inter({ subsets: ['latin'] })
import Footer from '@/components/Footer'

export const metadata = {
  title: 'ASAP WebDevs | Websites | Web APPs | SEO Management',
  description: 'We help businesses with web development needs including SEO, Web Apps, Websites, Hosting, and Domains. ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
      </body>
    </html>
  )
}
