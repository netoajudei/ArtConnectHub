import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Super Lista | O Super-Herói das Suas Compras',
  description: 'Economize tempo e dinheiro nas compras do seu estabelecimento com o Super Lista, o app de cotação de alimentos que funciona como um super-herói!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Comic+Neue:wght@400;700&family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
        <meta property="og:title" content="Super Lista | O Super-Herói das Suas Compras" />
        <meta property="og:description" content="Economize tempo e dinheiro nas compras do seu estabelecimento com o Super Lista, o app de cotação de alimentos que funciona como um super-herói!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://superlista.com.br" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

