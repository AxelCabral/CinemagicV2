import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma'
import { z } from 'zod'

export async function cinemaRoutes(fastify: FastifyInstance) {
    fastify.get('/cinemas', async () => {

        const cinema = await prisma.cinema.findMany()

        return { cinema }
    });

    fastify.post('/cinema/new', async (request, reply) => {

        const createCinemaBody = z.object({
            name: z.string(),
            local: z.string(),
            country: z.string(),
            ownerEmail: z.string(),
        })

        const { name, local, country, ownerEmail } = createCinemaBody.parse(request.body)

        await prisma.cinema.create({
            data: {
                name,
                local,
                country,
                ownerEmail
            }
        })

        return reply.status(201).send({
            message: 'Criado com sucesso!'
        })
    })

    fastify.delete('/cinema/:id/delete', async (request, reply) => {
        const id = String(request.headers.id);

        const cinemaV = await prisma.cinema.findUnique({
            where: {
                id,
            },
        })

        if (!cinemaV) {
            return reply.status(404).send({
                message: 'O cinema não foi encontrado.'
            })
        }

        const cinemaOccurrences = await prisma.cinema.findMany({
            where: {
                id,
            },

            include: {
                employeers: {
                    where: {
                        cineId: cinemaV.id
                    }
                }
            }
        })

        if (cinemaOccurrences.length > 0) {
            await prisma.employeer.deleteMany({
                where: {
                    cineId: cinemaV.id
                }
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
            local: z.string(),
            country: z.string(),
            ownerEmail: z.string(),
        })

        const id = String(request.headers.id);

        const { name, local, country, ownerEmail } = createCinemaBody.parse(request.body)

        const cinema = await prisma.cinema.findUnique({
            where: {
                id,
            },
        })

        if (!cinema) {
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
                local,
                country,
                ownerEmail
            }
        })

        return reply.status(200).send({
            message: 'Atualizado com sucesso!'
        })
    })
}