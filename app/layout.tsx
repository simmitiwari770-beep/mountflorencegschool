import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Mount Florence G School | Excellence in Education',
  description: 'Mount Florence G School - A premier educational institution dedicated to holistic development and academic excellence. Nurturing future leaders with values, knowledge, and global perspective.',
  keywords: 'school, education, Mount Florence, academic excellence, holistic education',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
