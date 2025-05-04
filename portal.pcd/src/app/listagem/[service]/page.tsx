'use client'


import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'


const ServicoPage = () => {
  const router = useRouter()
  // Acesso à query diretamente via router.query
  const { servico } = router.query 
  const [servicoName, setServicoName] = useState<string | null>(null)


  useEffect(() => {
    if (servico) {
      setServicoName(servico as string)
    }
  }, [servico])


  if (!servicoName) return <div>Carregando...</div>


  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Detalhes do Serviço: {servicoName}</h1>
    </main>
  )
}


export default ServicoPage
