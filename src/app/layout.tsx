import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gerador de tema de redaçao aleatorio',
  description: 'Gerador de tema de redação aleatorio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br"
      className='h-full w-full bg-sky-950 text-white'
    >
      <body className={inter.className}>{children}</body>
    </html>
  )
}
