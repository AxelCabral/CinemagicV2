import Fastify from 'fastify'
import cors from '@fastify/cors'
import { z } from 'zod'
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

    fastify.post('/movies/new', async (request, reply) => {

        const createMovieBody = z.object({
            title: z.string(),
            releaseDate: z.string(),
            lengthInMinutes: z.number(),
            coverUrl: z.string(),
        })

        const { title, releaseDate, lengthInMinutes, coverUrl } = createMovieBody.parse(request.body)

        await prisma.movie.create({
            data: {
                title,
                releaseDate,
                lengthInMinutes,
                coverUrl
            }
        })

        const message = "Criado com sucesso!";

        return reply.status(201).send({ message })
    })

    await fastify.listen({ port: 3333 })
}

bootstrap()