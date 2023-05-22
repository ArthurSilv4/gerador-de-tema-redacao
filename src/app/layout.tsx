import './globals.css'
import { Cabin } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'


const cabin = Cabin({ subsets: ['latin'] })

export const metadata = {
  title: 'Gerador de tema de redaçao aleatorio',
  description: 'Gerador de tema de redação aleatorio',

  icons:{
    icon: {url:'/favicon.ico', type:'image/ico'},
    shortcut: {url:'/favicon.ico', type:'image/ico'}
  }
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
      <body className={cabin.className + "h-full"}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
