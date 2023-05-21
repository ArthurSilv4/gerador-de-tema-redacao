import './globals.css'
import { Cabin } from 'next/font/google'

const cabin = Cabin({ subsets: ['latin'] })

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
      className=' text-white'
    >
      <body className={cabin.className + "h-full"}>{children}</body>
    </html>
  )
}
