import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma'
import { z } from 'zod'

export async function cinemaRoutes(fastify: FastifyInstance) {
    fastify.get('/cinema', async () => {

        const cinemaSales = await prisma.cinema.findMany()

        return { cinemaSales }
    });

    fastify.post('/cinema/new', async (request, reply) => {

        const createCinemaSalesBody = z.object({
            name: z.string(),
        })

        const { name } = createCinemaSalesBody.parse(request.body)

        await prisma.cinema.create({
            data: {
                name
            }
        })

        return reply.status(201).send({
            message: 'Criado com sucesso!'
        })
    })

    fastify.delete('/cinema/:id/delete', async (request, reply) => {
        const id = String(request.headers.id);

        const cinemaD = await prisma.cinema.findUnique({
            where: {
                id,
            },
        })

        if (!cinemaD) {
            return reply.status(404).send({
                message: 'O cinema não foi encontrado.'
            })
        }

        await prisma.cinema.delete({
            where: {
                id
            }
        })

        return reply.status(202).send({
            message: 'Deletado com sucesso!'
        })
    })

}