import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma'
import { z } from 'zod'

export async function sessionRoutes(fastify: FastifyInstance) {
    fastify.get('/session', async () => {

        const session = await prisma.session.findMany()

        return { session }
    });

    fastify.post('/session/new', async (request, reply) => {

        const createSessionBody = z.object({
            date: z.string(),
            start_time: z.string(),
            capacity: z.number(),
            id_filme: z.string(),
            id_cinema: z.string(),
        })

        const { date, start_time, capacity, id_filme, id_cinema } = createSessionBody.parse(request.body)

        await prisma.session.create({
            data: {
                date,
                start_time,
                capacity,
                id_filme,
                id_cinema,
            }
        })

        return reply.status(201).send({
            message: 'Criado com sucesso!'
        })
    })

    fastify.delete('/session/:id/delete', async (request, reply) => {
        const id = String(request.headers.id);

        const session = await prisma.session.findUnique({
            where: {
                id,
            },
        })

        if (!session) {
            return reply.status(404).send({
                message: 'Sessão não foi encontrada.'
            })
        }

        await prisma.session.delete({
            where: {
                id
            }
        })

        return reply.status(202).send({
            message: 'Deletada com sucesso!'
        })
    })

    fastify.post('/session/:id/update', async (request, reply) => {
        const createSessionBody = z.object({
            date: z.string(),
            start_time: z.string(),
            capacity: z.number(),
            id_filme: z.string(),
            id_cinema: z.string(),
        })

        const id = String(request.headers.id);

        const { date, start_time, capacity, id_filme, id_cinema } = createSessionBody.parse(request.body)

        const session = await prisma.session.findUnique({
            where: {
                id,
            },
        })

        if (!session) {
            return reply.status(400).send({
                message: 'A sessão não foi encontrada.'
            })
        }

        await prisma.session.update({
            where: {
                id
            },
            data: {
                date,
                start_time,
                capacity,
                id_filme,
                id_cinema
            }
        })

        return reply.status(200).send({
            message: 'Atualizado com sucesso!'
        })
    })
    fastify.get('/session/info', async (request) => {

        const id = String(request.headers.id);
        const session = await prisma.session.findMany({
            where: {
                id_filme: id,
            },
        })
        return { session }
    });

}