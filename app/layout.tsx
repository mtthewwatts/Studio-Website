import type { Metadata } from 'next'
import './globals.css'
import { SiteProvider } from '@/lib/site-context'
import Topbar from '@/components/Topbar'
import MenuOverlay from '@/components/MenuOverlay'
import SearchOverlay from '@/components/SearchOverlay'

export const metadata: Metadata = {
  title: {
    default: 'Matthew Watts — Technologist + Creative',
    template: '%s | Matthew Watts',
  },
  description: 'Fourth-year Engineering student at the University of Waterloo. Background in Mechanical and Electrical Design. Exploring the intersection of art and tech.',
  icons: {
    // Placeholder favicon — swap for real artwork whenever you have it.
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SiteProvider>
          <Topbar />
          <MenuOverlay />
          <SearchOverlay />
          {children}
        </SiteProvider>
      </body>
    </html>
  )
}
