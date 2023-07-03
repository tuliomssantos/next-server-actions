import './globals.css'

import { Inter } from 'next/font/google'

import { Navbar } from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Server Actions',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="mx-auto max-w-xl p-4 bg-stone-200 min-h-screen text-black">
          {children}
        </main>
      </body>
    </html>
  )
}
