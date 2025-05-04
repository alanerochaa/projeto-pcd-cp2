// src/app/not-found.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#FCE8E1] p-6">
      <h2 className="text-2xl md:text-3xl font-bold text-[#F28C6A] mb-4">
        Conteúdo não encontrado!
      </h2>
      <Image
        src="https://http.cat/404"
        alt="404 - Gato não encontrado"
        width={300}
        height={300}
        className="rounded-md mb-6"
      />
      <Link
        href="/"
        className="text-[#6BA6BA] font-semibold hover:underline"
      >
        Voltar para a página inicial
      </Link>
    </main>
  )
}
