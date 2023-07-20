import './globals.css'
import type { Metadata } from 'next'
import {
  Montserrat as Montserrat,
  Crimson_Text as CrimsonText,
  Barlow_Condensed as BarlowCondensed,
} from 'next/font/google'


const montserrat = Montserrat({ weight: ['100', '300'], subsets: ['latin'], variable: '--font-montserrat' })
const crimsonText = CrimsonText({ weight: ['400', '600'], subsets: ['latin'], variable: '--font-crimson-text' })
const barlowCondensed = BarlowCondensed({ weight: ['600'], subsets: ['latin'], variable: '--font-barlow-condensed' })

export const metadata: Metadata = {
  title: 'Lais Tattoo',
  description: 'Faço desenhos únicos para sua pele',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
