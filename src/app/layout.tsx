import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '🔑 Genepass',
  description: 'A Password Generator 🔑',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body
        className={inter.className}
        suppressHydrationWarning={true}>
          {children}
      </body>
    </html>
  )
}
