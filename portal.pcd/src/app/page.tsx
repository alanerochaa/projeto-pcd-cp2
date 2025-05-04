'use client'


import { useRouter } from 'next/navigation'
import { useEffect } from 'react'


export default function HomePage() {
  const router = useRouter()


  useEffect(() => {
    const isAuthenticated = document.cookie.includes('token=')
    if (isAuthenticated) {
      router.push('/home')
    }
  }, [router])


  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#FCE8E1] p-6 text-center">
      <div className="mb-6">
        <img
          src="/imagens/logo.png"
          alt="Logo do Portal PCD"
          className="w-[300px] h-[300px] rounded-full object-cover"
        />
      </div>


      <h1 className="text-3xl md:text-4xl font-bold text-[#F28C6A] mb-4">
        Portal - PCD : Acesso, voz e acolhimento em um só lugar.
      </h1>


      <p className="text-xl text-[#2AA597] mb-2">
        🖐️ Olá! Seja muito bem-vindo(a) ao <strong>Portal-PCD</strong>!
      </p>


      <p className="text-lg text-gray-700 max-w-xl mb-4">
        Aqui, você encontra informações confiáveis, organizadas e feitas para você — com foco em <strong>acessibilidade</strong>, <strong>inclusão</strong> e <strong>autonomia</strong>.
      </p>


      <p className="text-md text-gray-600 mb-6">
        🌟 Porque incluir não é favor, é <strong>direito</strong>.
      </p>


     
      <div className="flex flex-row flex-wrap justify-center gap-6">
        <button
          onClick={() => router.push('/login')}
          aria-label="Ir para a tela de login"
          className="bg-[#6BA6BA] hover:bg-[#5A8A9A] text-white px-10 py-5 rounded-xl font-semibold transition text-xl focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-[#F28C6A]"
        >
          Fazer Login
        </button>


        <button
          onClick={() => router.push('/cad-user')}
          aria-label="Ir para a tela de cadastro"
          className="border-2 border-[#6BA6BA] text-[#6BA6BA] px-10 py-5 rounded-xl font-semibold hover:bg-[#E6F7F5] transition text-xl focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-[#2AA597]"
        >
          Cadastrar-se
        </button>
      </div>
    </main>
  )
}