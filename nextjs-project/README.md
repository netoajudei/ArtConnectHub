# ArtConnectHub - Next.js

Este é o projeto ArtConnectHub refatorado para Next.js 14 com App Router e Tailwind CSS.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Radix UI** - Componentes acessíveis
- **React Query** - Gerenciamento de estado do servidor
- **Drizzle ORM** - ORM para banco de dados
- **Framer Motion** - Animações

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── dashboard/         # Páginas do dashboard
│   ├── auth/             # Páginas de autenticação
│   ├── globals.css       # Estilos globais
│   ├── layout.tsx        # Layout raiz
│   └── page.tsx          # Página inicial
├── components/            # Componentes reutilizáveis
│   ├── ui/               # Componentes de UI base
│   ├── dashboard/        # Componentes do dashboard
│   └── providers/        # Providers de contexto
├── hooks/                 # Hooks customizados
├── lib/                   # Utilitários e configurações
└── types/                 # Definições de tipos
```

## 🛠️ Instalação

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Configurar variáveis de ambiente:**
   ```bash
   cp .env.example .env.local
   ```

3. **Executar em desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Build para produção:**
   ```bash
   npm run build
   npm start
   ```

## 🔧 Scripts Disponíveis

- `npm run dev` - Executa em modo desenvolvimento
- `npm run build` - Cria build de produção
- `npm run start` - Executa build de produção
- `npm run lint` - Executa linter
- `npm run db:push` - Atualiza schema do banco

## 🌐 Rotas Disponíveis

- `/` - Página inicial
- `/auth` - Página de autenticação
- `/dashboard` - Dashboard principal
- `/dashboard/listas` - Gerenciamento de listas
- `/dashboard/videos` - Gerenciamento de vídeos

## 📱 Funcionalidades

- ✅ Sistema de autenticação
- ✅ Dashboard responsivo
- ✅ Upload de vídeos e imagens
- ✅ Gestão de listas
- ✅ Interface moderna com Tailwind CSS
- ✅ Componentes acessíveis com Radix UI
- ✅ Animações com Framer Motion

## 🔒 Autenticação

O sistema de autenticação está configurado com:
- Context API para gerenciamento de estado
- Persistência no localStorage
- Rotas protegidas
- Middleware de autenticação

## 🎨 Estilização

- Tailwind CSS para estilos utilitários
- Sistema de design tokens
- Suporte a tema escuro/claro
- Componentes UI consistentes
- Animações e transições suaves

## 📊 Banco de Dados

- Drizzle ORM para queries type-safe
- Schema Zod para validação
- Migrations automáticas
- Suporte a múltiplos bancos

## 🚀 Deploy

O projeto está configurado para deploy em:
- Vercel (recomendado)
- Netlify
- AWS Amplify
- Qualquer plataforma que suporte Next.js

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.





