 --- Requerimentos --- 
 
 Node JS instalado

 --- Comandos para inicializar --- 

yarn install                                // Caso não tenha o Yarn Instalado

 --- Instalação prisma client e express --- 

yarn add @prisma/client express

 --- Instalação types express prisma tsnode e typescript como Dev --- 

yarn add @types/express prisma ts-node-dev typescript -D

 --- Inicialização do Prisma ( Caso o projeto não tenha a pasta prisma ) --- 

yarn prisma init

 --- Geração do prisma caso o mesmo ainda não tenha iniciado  --- 

yarn prisma generate

 --- Para garantir que o projeto esteja em dia com o Banco de dados utilize o Migration --- 

yarn prisma migrate dev

 --- Para rodar o microservice ---

 yarn run dev