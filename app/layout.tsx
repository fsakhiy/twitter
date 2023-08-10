import './globals.css'
import type { Metadata } from 'next'
import { Inter, REM, Prompt } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const rem = REM({
  subsets: ['latin'],
  weight: ["400", "600", "700"]
})
const prompt = Prompt({
  subsets: ['latin'],
  weight: ['400', '600', '700']
})

export const metadata: Metadata = {
  title: 'twitter',
  description: 'a twitter clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={prompt.className}>{children}</body>
    </html>
  )
}
