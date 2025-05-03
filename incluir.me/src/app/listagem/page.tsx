'use client'


import Link from 'next/link'


const servicos = [
  { nome: 'Saúde e Reabilitação', slug: 'saude' },
  { nome: 'Benefícios e Direitos', slug: 'beneficios' },
  { nome: 'Emprego e Profissionalização', slug: 'emprego' },
  { nome: 'Educação Inclusiva', slug: 'educacao' },
  { nome: 'Acessibilidade Urbana', slug: 'mobilidade' },
  { nome: 'Apoio Psicológico', slug: 'psicologico' },
  { nome: 'Tecnologia Assistiva', slug: 'tecnologia' },
  { nome: 'Denúncias e Reclamações', slug: 'denuncias' },
]


export default function ListagemPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Serviços para o público PCD</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {servicos.map((servico) => (
          <li key={servico.slug}>
            <Link href={`/listagem/${servico.slug}`}>
              <div className="bg-blue-100 hover:bg-blue-200 p-4 rounded shadow cursor-pointer">
                {servico.nome}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}


