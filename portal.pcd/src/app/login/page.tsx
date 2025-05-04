'use client'


import LoginForm from './loginForm'


export default function LoginPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#FCE8E1] p-6 text-center">
      <div className="mb-6">
        <img
          src="/imagens/logo.png"
          alt="Logo do Portal PCD"
          className="w-[300px] h-[300px] rounded-full object-cover"
        />
      </div>

      <h1 className="text-3xl font-bold text-[#F28C6A] mb-4">
        Bem‑vindo!
      </h1>

      <LoginForm />
    </main>
  )
}
