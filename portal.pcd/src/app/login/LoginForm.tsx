'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff } from 'lucide-react'

export default function LoginForm() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [erro, setErro] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Verifica se o email e a senha pertencem a um dos usuários autorizados
    const usuariosValidos = [
      { email: 'alane@gmail.com', senha: '123456' },
      { email: 'julia@gmail.com', senha: '654321' },
    ]

    const usuarioValido = usuariosValidos.find(
      (usuario) => usuario.email === email && usuario.senha === senha
    )

    if (!usuarioValido) {
      setErro('Email ou senha incorretos.')
      return
    }

    setErro('')
    document.cookie = 'authToken=usuarioAutenticado; path=/; max-age=3600'
    router.push('/home')
  }

  return (
    <div className="bg-white rounded-xl shadow-lg w-full max-w-sm p-8 flex flex-col">
      <h2
        id="login-title"
        className="text-[#F28C6A] font-bold text-2xl mb-6 text-center"
      >
        Login
      </h2>

      <form onSubmit={handleSubmit} className="w-full space-y-3" noValidate>
        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-[#2AA597] text-sm font-bold mb-[2px]"
          >
            Email:
          </label>
          <input
            id="email"
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-1.5 border border-[#6BA6BA] rounded focus:outline-none focus:ring focus:ring-[#6BA6BA] text-sm"
          />
        </div>

        {/* Senha */}
        <div className="relative">
          <label
            htmlFor="senha"
            className="block text-[#2AA597] text-sm font-bold mb-[2px]"
          >
            Senha:
          </label>
          <input
            id="senha"
            type={showPassword ? 'text' : 'password'}
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            className="w-full px-3 py-1.5 border border-[#6BA6BA] rounded pr-10 focus:outline-none focus:ring focus:ring-[#6BA6BA] text-sm"
          />
          <button
            type="button"
            onClick={() => setShowPassword((p) => !p)}
            className="absolute inset-y-0 right-2 flex items-center"
            aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
          >
          </button>
        </div>

        {/* Botão Entrar */}
        <button
          type="submit"
          className="w-full py-2 bg-[#6BA6BA] text-white rounded font-semibold hover:bg-[#5A8A9A] focus:outline-none focus:ring focus:ring-[#F28C6A] text-sm"
        >
          Entrar
        </button>

        {/* Mensagem de erro */}
        {erro && (
          <p
            className="text-[#F551EB] text-sm mt-2 text-center"
            role="alert"
            aria-live="assertive"
          >
            {erro}
          </p>
        )}
      </form>

      {/* Link de cadastro */}
      <p className="mt-6 text-center text-sm">
        Não tem uma conta?{' '}
        <a
          href="/cad-user"
          className="font-bold text-[#cc6b4a] hover:text-[#D9775A]"
        >
          Cadastre‑se
        </a>
      </p>
    </div>
  )
}
