'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CadastroForm() {
  const router = useRouter();
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [tipoMensagem, setTipoMensagem] = useState<'sucesso' | 'erro' | ''>(''); 
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  // Carregar os usuários do localStorage
  const carregarUsuarios = () => {
    const usuarios = localStorage.getItem('usuarios');
    return usuarios ? JSON.parse(usuarios) : [];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const usuarios = carregarUsuarios();

    // Verificando se o usuário já existe
    const jaExiste = usuarios.some(
      (usuario: any) =>
        usuario.nome === nome &&
        usuario.sobrenome === sobrenome &&
        usuario.email === email &&
        usuario.cpf === cpf &&
        usuario.telefone === telefone
    );

    if (jaExiste) {
      setMensagem('Erro ao cadastrar. Usuário já existe.');
      setTipoMensagem('erro');
      return;
    }

    const novoUsuario = {
      nome,
      sobrenome,
      email,
      cpf,
      telefone,
      senha
    };

    // Adicionar novo usuário e salvar no localStorage
    usuarios.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    setMensagem('Cadastro realizado com sucesso!');
    setTipoMensagem('sucesso');

    setTimeout(() => {
      router.push('/login');
    }, 2000);
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-[#FCE8E1] p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full sm:max-w-md md:max-w-sm lg:max-w-xs xl:max-w-xs">
        <div className="text-center mb-6">
          <img
            src="/imagens/logo.png"
            alt="Logo do Portal PCD"
            className="w-[300px] h-[300px] rounded-full object-cover"
          />
        </div>

        <h1 className="text-3xl font-bold text-[#F28C6A] mb-4 text-center">Cadastre-se</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nome" className="block text-[#2AA597] text-sm font-bold">Nome</label>
            <input
              type="text"
              id="nome"
              className="w-full px-3 py-1.5 border border-[#6BA6BA] rounded focus:outline-none focus:ring focus:ring-[#6BA6BA] text-sm"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Seu nome"
            />
          </div>

          <div>
            <label htmlFor="sobrenome" className="block text-[#2AA597] text-sm font-bold">Sobrenome</label>
            <input
              type="text"
              id="sobrenome"
              className="w-full px-3 py-1.5 border border-[#6BA6BA] rounded focus:outline-none focus:ring focus:ring-[#6BA6BA] text-sm"
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
              placeholder="Seu sobrenome"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-[#2AA597] text-sm font-bold">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-1.5 border border-[#6BA6BA] rounded focus:outline-none focus:ring focus:ring-[#6BA6BA] text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu email"
            />
          </div>

          <div>
            <label htmlFor="cpf" className="block text-[#2AA597] text-sm font-bold">CPF</label>
            <input
              type="text"
              id="cpf"
              className="w-full px-3 py-1.5 border border-[#6BA6BA] rounded focus:outline-none focus:ring focus:ring-[#6BA6BA] text-sm"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              placeholder="000.000.000-00"
            />
          </div>

          <div>
            <label htmlFor="telefone" className="block text-[#2AA597] text-sm font-bold">Telefone</label>
            <input
              type="text"
              id="telefone"
              className="w-full px-3 py-1.5 border border-[#6BA6BA] rounded focus:outline-none focus:ring focus:ring-[#6BA6BA] text-sm"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              placeholder="(00) 00000-0000"
            />
          </div>

          <div className="relative">
            <label htmlFor="senha" className="block text-[#2AA597] text-sm font-bold">Senha</label>
            <input
              type={senhaVisivel ? 'text' : 'password'}
              id="senha"
              className="w-full px-3 py-1.5 border border-[#6BA6BA] rounded focus:outline-none focus:ring focus:ring-[#6BA6BA] text-sm pr-10"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Senha"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              onClick={() => setSenhaVisivel(!senhaVisivel)}
            >
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-[#6BA6BA] text-white rounded font-semibold hover:bg-[#5A8A9A] focus:outline-none focus:ring focus:ring-[#F28C6A] text-sm"
          >
            Criar Conta
          </button>
        </form>

        {mensagem && (
          <div
            className={`mt-4 text-center text-sm ${tipoMensagem === 'sucesso' ? 'text-green-600' : 'text-red-600'}`}
          >
            {mensagem}
          </div>
        )}

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Já possui uma conta?{' '}
            <Link href="/login" className="text-[#6BA6BA] hover:underline">
              Faça login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
