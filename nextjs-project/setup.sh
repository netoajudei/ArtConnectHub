#!/bin/bash

echo "🚀 Configurando ArtConnectHub Next.js..."

# Verificar se o Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não encontrado. Por favor, instale o Node.js 18+ primeiro."
    exit 1
fi

# Verificar versão do Node.js
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js 18+ é necessário. Versão atual: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) encontrado"

# Instalar dependências
echo "📦 Instalando dependências..."
npm install

# Copiar arquivo de ambiente
if [ ! -f .env.local ]; then
    echo "🔧 Configurando variáveis de ambiente..."
    cp env.example .env.local
    echo "⚠️  Por favor, edite o arquivo .env.local com suas configurações"
fi

# Criar diretório drizzle
mkdir -p drizzle

echo "✅ Instalação concluída!"
echo ""
echo "📋 Próximos passos:"
echo "1. Edite o arquivo .env.local com suas configurações de banco"
echo "2. Execute 'npm run dev' para iniciar o servidor de desenvolvimento"
echo "3. Acesse http://localhost:3000 no seu navegador"
echo ""
echo "🚀 Para executar: npm run dev"





