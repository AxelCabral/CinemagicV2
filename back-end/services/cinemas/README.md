# Serviço de CINEMAS para Aplicação CINEMAGIC

## Tecnologias
- Node.js
- TypeScript
- Fastify
- Prisma
- SQLite
- Mermaid.js

## Para execução ou edição como desenvolverdor (instalação das dependências)

-Instalação NODE (v18.12.0 ou superior recomendada)

-Instalação TypeScript (dev)
comando: yarn add typescript -D

-Instalação Fastify (dep de produção)
comando: yarn add fastify

-Pacote de conversão automática de TS para JS (dev)
comando: yarn add tsx -D

-Intalação do Prisma e Prisma Client (dev e prod)
comando: yarn add prisma -D
comando: yarn add @prisma/client

-Para utilização de Migrations (sempre que houver edição no banco de dados)
comando: yarn prisma migrate dev

-Instalação de dep para geração de ERD (dev)
comando: yarn add prisma-erd-generator @mermaid-js/mermaid-cli -D

-Para gerar ERD (sempre que houver edição no banco de dados)
comando: yarn prisma generate

-Intalação de biblioteca Cors (biblioteca para segurança)
comando: yarn add @fastify/cors

-Para visualização do Banco de dados via web
comando: yarn prisma studio

-Para rodar a seed de população do banco de dados (preencher o arquivo seed.ts antes de executar)
comando: yarn prisma db seed

-Intalação do Zod
comando: yarn add zod

## Não obrigatório e recomendado (config)

No arquivo settings.json (VSCode) - Para formatação automática ao salvar e autocomplete das funções do Prisma

"[prisma]": {
    "editor.defaultFormatter": "Prisma.prisma",
    "editor.formatOnSave": true
}

