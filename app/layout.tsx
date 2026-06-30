import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Matthew Watts — Technologist + Creative',
  description: 'Fourth-year Engineering student at the University of Waterloo. Background in Mechanical and Electrical Design. Exploring the intersection of art and tech.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
