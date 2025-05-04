# 📘 **Portal PCD – Acessibilidade e Informação**

## 🌟 **Objetivo do Projeto**

Este projeto tem como objetivo o desenvolvimento de um portal de **acessibilidade digital para Pessoas com Deficiência (PCDs)**, oferecendo informações úteis sobre saúde, mobilidade, inclusão educacional, direitos, benefícios e suporte psicológico.

O sistema foi desenvolvido utilizando **Next.js 15.3 ou superior**, **TypeScript** e **TailwindCSS**, com foco na navegação acessível e controle de usuários por autenticação via **cookies** e manipulação de dados utilizando **LocalStorage**.

---

## 🧩 **Tecnologias Utilizadas**

- ⚛️ [Next.js 15.3+](https://nextjs.org/) ![Next.js](https://img.shields.io/badge/Next.js-15.3+-black)
- 🦸‍♀️ [React](https://reactjs.org/) ![React](https://img.shields.io/badge/React-17-blue)
- 🎨 [TailwindCSS](https://tailwindcss.com/) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-2.2-blue)
- 🖥️ [TypeScript](https://www.typescriptlang.org/) ![TypeScript](https://img.shields.io/badge/TypeScript-4.4-blue)
- 🍪 [Cookies](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie) ![Cookies](https://img.shields.io/badge/Cookies-Enabled-yellow)
- 💾 [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) ![LocalStorage](https://img.shields.io/badge/LocalStorage-Enabled-lightgreen)

---

## 🧠 **Funcionalidades**

### 🔒 **Autenticação e Proteção de Rotas**

- A autenticação é realizada por **cookies**.
- A navegação entre páginas exige que o usuário esteja autenticado, com exceção das páginas **login** e **cadastro**.
  
### 🔄 **Simulação de Manipulação de Dados**

- **LocalStorage** é usado para simular **GET** e **POST** de dados, permitindo a atualização e recuperação das informações do usuário.

### 📱 **Páginas Principais**

- **/login**: Página pública de login.
- **/cad-user**: Cadastro de novos usuários.
- **/home**: Página inicial do sistema (pública).
- **/listagem**: Listagem de serviços para PCDs.
- **/update**: Página de atualização/edição de dados do usuário.

### 📝 **Listagem de Serviços**

A página de **listagem** contém informações sobre os seguintes serviços:

1. **Serviços de Saúde e Reabilitação**
2. **Benefícios e Direitos**
3. **Emprego e Profissionalização**
4. **Educação Inclusiva**
5. **Acessibilidade Urbana e Mobilidade**
6. **Comunidades e Apoio Psicológico**
7. **Produtos e Tecnologia Assistiva**
8. **Denúncias e Reclamações**

---

## 🗂 **Estrutura do Projeto**
```

portal-pcd/
│
├── public/
│   └── imagens/                  # Imagens utilizadas no projeto
│
├── src/
│   ├── app/
│   │   ├── cad-user/             # Rota relacionada a usuários
│   │   ├── home/                 # Rota relacionada à página inicial
│   │   ├── listagem/             # Rota de listagem
│   │   ├── login/                # Rota de login
│   │   └── update/               # Rota de atualização
│   │
│   ├── components/               # Componentes reutilizáveis
│   │   ├── Footer/               # Componente de rodapé
│   │   └── Header/               # Componente de cabeçalho
│   │
│   ├── globals.css               # Estilos globais
│   ├── layout.tsx                # Layouts e estrutura das páginas
│   ├── not-found.tsx             # Página de erro 404 (não encontrado)
│   └── pages/                    # Páginas principais do projeto
│
├── .gitignore                    # Arquivo para ignorar arquivos e pastas no Git
├── tailwind.config.js            # Configuração do TailwindCSS
├── postcss.config.js             # Configuração do PostCSS
├── package-lock.json             # Controle de versão de dependências
├── package.json                  # Dependências e scripts do projeto
└── README.md                     # Este arquivo

```
## 📊 **Como Rodar o Projeto Localmente**

Para rodar o projeto localmente, siga os seguintes passos:

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/portal-pcd.git
    ```

2. Acesse a pasta do projeto:

    ```bash
    cd portal-pcd
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Rode o servidor de desenvolvimento:

    ```bash
    npm run dev
    ```

5. Acesse o portal em [http://localhost:3000](http://localhost:3000)

---

## 🌟 **Contribuidoras**

- [**Alane Rocha rm561052**](https://github.com/alanerochaa)
- [**Julia Damasceno Busso rm560293**](https://github.com/juliabusso)
