'use client'
import './globals.css'
import { ReactNode } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <head>
        <title>Incluir.me – Portal PCD</title>
      </head>
      <body className="flex flex-col min-h-screen">
        
        <Header />
        <main className="flex-1 overflow-auto bg-[#FCE8E]">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
