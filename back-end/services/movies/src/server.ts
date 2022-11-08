import Fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    log: ['query'],
})

async function bootstrap() {
    const fastify = Fastify({
        logger: true,
    })

    await fastify.register(cors, {
        origin: true, //Mudar para domínio da aplicação quando em produção
    })

    fastify.get('/movies', async () => {

        const movie = await prisma.movie.findMany()

        return { movie }
    });

    fastify.get('/genders', async () => {

        const gender = await prisma.gender.findMany()

        return { gender }
    })

    await fastify.listen({ port: 3333 })
}

bootstrap()