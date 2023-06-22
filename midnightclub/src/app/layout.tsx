import { ReactNode } from 'react'
import './globals.css'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
  Poppins,
} from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-bai-jamjuree',
})
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'Midnight Club',
  description: 'For a midnight players',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} ${poppins.variable} bg-background font-sans`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
