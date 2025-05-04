'use client'


import LoginForm from './LoginForm'


export default function LoginPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#FCE8E1] p-6 text-center">
      {/* Logo no topo */}
      <div className="mb-6">
        <img
          src="/imagens/Logo.jpg"
          alt="Logotipo do Incluir.me"
          className="w-[300px] h-[300px] rounded-full object-cover"
        />
      </div>


      {/* Título acima do formulário */}
      <h1 className="text-3xl font-bold text-[#F28C6A] mb-4">
        Bem‑vindo!
      </h1>


      {/* Formulário */}
      <LoginForm />
    </main>
  )
}
