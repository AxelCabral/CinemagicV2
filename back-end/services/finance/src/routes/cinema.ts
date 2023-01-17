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

    fastify.post('/cinema/:id/update', async (request, reply) => {
        
        const createCinemaBody = z.object({
            name: z.string(),
        })

        const id = String(request.headers.id);

        const { name } = createCinemaBody.parse(request.body)

        const cinema = await prisma.cinema.findMany({
            where: {
                id,
            },
        })

        if (cinema.length == 0) {
            return reply.status(400).send({
                message: 'O cinema não foi encontrado.'
            })
        }

        await prisma.cinema.update({
            where: {
                id
            },
            data: {
                name,
            }
        })

        return reply.status(200).send({
            message: 'Atualizado com sucesso!'
        })
    })

    fastify.get('/cinema/update', async (request) => {
        const id = String(request.headers.id);

        const cinema = await prisma.cinema.findUnique({
            where: {
                id,
            },
        })

        return { cinema }
    })

}