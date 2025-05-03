// src/app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <head>
        <title>Incluir.me – Portal PCD</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
