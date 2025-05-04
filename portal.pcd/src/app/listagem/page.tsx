'use client';

import Image from 'next/image';
import Link from 'next/link';

const servicos = [
  {
    title: "Serviços de Saúde e Reabilitação",
    href: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-da-pessoa-com-deficiencia",
    description: "No site do Gov.br você encontra a maioria das formas de saúde e reabilitação que o Brasil tem para oferecer",
    image: "/imagens/reabilitacao.jpg",
  },
  {
    title: "Benefícios e Direitos",
    href: "https://educacao.uol.com.br/noticias/2024/09/10/o-que-e-pcd-entenda-a-sigla-e-quem-tem-direito-a-beneficios.htm",
    description: "Informações sobre auxílios, aposentadoria, isenções e leis de proteção à pessoa com deficiência.",
    image: "/imagens/direitos.jpg",
  },
  {
    title: "Emprego e Profissionalização",
    href: "https://www.portaldainclusao.org.br/cms/solicitacao-de-participacao",
    description: "Oportunidades de trabalho, capacitação e inclusão no mercado profissional.",
    image: "/imagens/emprego.jpg",
  },
  {
    title: "Educação Inclusiva",
    href: "https://todospelaeducacao.org.br/noticias/conheca-o-historico-da-legislacao-sobre-educacao-inclusiva/",
    description: "Direitos e recursos para acesso à educação com suporte e equidade.",
    image: "/imagens/educacao.png",
  },
  {
    title: "Acessibilidade Urbana e Mobilidade",
    href: "https://itdp.org/wp-content/uploads/2022/06/Acesso-para-pessoas-com-deficiencia-em-areas-urbanas.pdf",
    description: "Conheça mais sobre infraestrutura, transporte e acessos adequados para todos os espaços públicos.",
    image: "/imagens/acessibilidade.jpg",
  },
  {
    title: "Comunidades e Apoio Psicológico",
    href: "https://www.gov.br/mds/pt-br/acoes-e-programas/suas/unidades-de-atendimento/servico-de-acolhimento-para-pessoas-com-deficiencia",
    description: "Acolhimento emocional e atendimento psicológico especializado. Saiba como acessar essas formas de ajuda.",
    image: "/imagens/comunidade.jpg",
  },
  {
    title: "Produtos e Tecnologia Assistiva",
    href: "https://www.icom.app/tecnologia-assistiva-oque-e-tipos-e-ferramentas/",
    description: "Ferramentas, dispositivos e inovações para promover autonomia e inclusão.",
    image: "/imagens/tecnologia.jpg",
  },
  {
    title: "Denúncias e Reclamações",
    href: "https://capital.sp.gov.br/web/pessoa_com_deficiencia/w/publicacoes/307925",
    description: "Canais para relatar violações de direitos, abusos ou falta de acessibilidade. Atende 24h, todos os dias.",
    image: "/imagens/denuncias.jpg",
  },
];

export default function ListagemPage() {
  return (
    <main className="min-h-screen bg-[#FCE8E1] p-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#F28C6A] mb-10">
        Serviços para Pessoas com Deficiência
      </h1>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {servicos.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-5 border border-[#F28C6A]/30"
          >
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-[#2AA597]">{item.title}</h2>
              <p className="text-sm text-gray-600 mt-2">{item.description}</p>
            </div>

            <div className="mb-4">
              <p className="text-[#F28C6A] underline hover:text-[#F28C6A]/90">
                Acesse o serviço
              </p>
            </div>

            <div className="overflow-hidden rounded-md mb-4">
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={180}
                className="object-contain w-full"
              />
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
