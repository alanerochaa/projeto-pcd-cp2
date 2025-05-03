'use client'


import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Accessibility, Newspaper, Users } from 'lucide-react'


export default function Home() {
  const router = useRouter()


  useEffect(() => {
    const token = document.cookie
      .split('; ')
      .find((row) => row.startsWith('authToken='))
    if (!token) {
      router.push('/login')
    }
  }, [router])


  return (
    <main className="min-h-screen bg-blue-50 flex flex-col items-center p-8 font-sans">
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 text-center leading-tight">
        Portal PCD – Acessibilidade e Informação
      </h1>


      <p className="text-lg md:text-xl text-blue-800 text-center max-w-2xl mb-10">
        Acesse serviços exclusivos, atualize seus dados e fique por dentro das notícias mais relevantes sobre acessibilidade.
      </p>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mb-12">
        <button
          onClick={() => router.push('/listagem')}
          className="bg-blue-600 hover:bg-blue-700 text-white text-lg md:text-xl font-medium py-5 px-7 rounded-2xl shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
        >
          📄 Ver Serviços para PCDs
        </button>


        <button
          onClick={() => router.push('/update')}
          className="bg-green-600 hover:bg-green-700 text-white text-lg md:text-xl font-medium py-5 px-7 rounded-2xl shadow-md focus:outline-none focus:ring-4 focus:ring-green-300 transition"
        >
          ✏️ Atualizar Meus Dados
        </button>
      </div>


      {/* Seção de Notícias */}
      <section className="w-full max-w-5xl bg-white p-6 rounded-xl shadow-lg mb-12">
        <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
          <Newspaper className="w-6 h-6" />
          Notícias Acessíveis
        </h2>
        <ul className="space-y-3 text-base text-blue-800 list-disc list-inside">
          <li>📜 <strong>Lei de Inclusão:</strong> Novas mudanças nos benefícios assistenciais.</li>
          <li>🏢 <strong>Empregabilidade:</strong> Empresas que mais contratam pessoas com deficiência em 2025.</li>
          <li>🩺 <strong>Saúde:</strong> Novo protocolo de atendimento prioritário aprovado pelo SUS.</li>
          <li>🎓 <strong>Educação:</strong> Universidades ampliam acesso para estudantes com deficiência.</li>
          <li>🚌 <strong>Transporte:</strong> Cartão transporte gratuito agora com validade estendida.</li>
          <li>📱 <strong>Tecnologia:</strong> Aplicativos com acessibilidade premiados internacionalmente.</li>
          <li>🦽 <strong>Mobilidade Urbana:</strong> Novas rampas de acesso em 300 pontos da cidade.</li>
        </ul>
      </section>


      {/* Seção de Depoimentos */}
      <section className="w-full max-w-5xl bg-white p-6 rounded-xl shadow-lg mb-12">
        <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
          <Users className="w-6 h-6" />
          Depoimentos Reais
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-100 p-4 rounded-xl shadow">
            <p className="text-blue-900 font-medium">"Consegui meu primeiro emprego através desse portal. Obrigada!"</p>
            <p className="text-blue-600 text-sm mt-2">– Mariana, 27 anos</p>
          </div>
          <div className="bg-blue-100 p-4 rounded-xl shadow">
            <p className="text-blue-900 font-medium">"As notícias me ajudam a entender meus direitos todos os dias."</p>
            <p className="text-blue-600 text-sm mt-2">– Jorge, 41 anos</p>
          </div>
          <div className="bg-blue-100 p-4 rounded-xl shadow">
            <p className="text-blue-900 font-medium">"Fui muito bem atendida na atualização dos meus dados. Portal fácil de usar."</p>
            <p className="text-blue-600 text-sm mt-2">– Larissa, 33 anos</p>
          </div>


        </div>
      </section>


      <button
        onClick={() => {
          document.cookie = 'authToken=; Max-Age=0'
          router.push('/login')
        }}
        className="mt-4 bg-red-600 hover:bg-red-700 text-white text-lg font-semibold py-3 px-6 rounded-xl focus:outline-none focus:ring-4 focus:ring-red-300 transition"
      >
        🚪 Sair
      </button>
    </main>
  )
}


