🩺 Clínica Agendamentos
Sistema web para gerenciamento de agendamentos em clínicas médicas, desenvolvido com foco em performance, acessibilidade e boas práticas modernas de desenvolvimento.


📦 Tecnologias Utilizadas
Next.js 13 (App Router)

TypeScript

Tailwind CSS para estilização

Drizzle ORM para mapeamento objeto-relacional

PostgreSQL como banco de dados relacional

ESLint e Prettier para padronização de código

Zod para validação de dados

React Hook Form para gerenciamento de formulários

🚀 Como Executar Localmente
Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/guh2660/clinica-agendamentos.git
cd clinica-agendamentos
Instale as dependências:

bash
Copiar
Editar
npm install
# ou
yarn install
Configure as variáveis de ambiente:

Crie um arquivo .env.local na raiz do projeto com as seguintes variáveis:

env
Copiar
Editar
DATABASE_URL=postgresql://usuario:senha@localhost:5432/clinica
Execute as migrações (se aplicável):

bash
Copiar
Editar
npm run db:migrate
Inicie o servidor de desenvolvimento:

bash
Copiar
Editar
npm run dev
O aplicativo estará disponível em http://localhost:3000.

📁 Estrutura de Pastas
ruby
Copiar
Editar
├── src/
│   ├── app/             # Páginas e rotas
│   ├── components/      # Componentes reutilizáveis
│   ├── lib/             # Configurações e utilitários
│   ├── db/              # Configurações do banco de dados
│   └── styles/          # Estilos globais
├── public/              # Arquivos públicos
├── .vscode/             # Configurações do editor
├── .gitignore
├── drizzle.config.ts    # Configuração do Drizzle ORM
├── next.config.ts       # Configuração do Next.js
├── package.json
└── README.md

✅ Funcionalidades
Cadastro e autenticação de usuários

Agendamento de consultas médicas

Visualização de horários disponíveis

Painel administrativo para gestão de agendamentos

Responsividade para dispositivos móveis

📌 Próximas Implementações
Integração com sistemas de pagamento

Notificações por e-mail e SMS

Dashboard com estatísticas de agendamentos

Suporte a múltiplas especialidades médicas

