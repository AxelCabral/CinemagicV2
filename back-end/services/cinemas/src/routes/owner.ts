import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma'
import { z } from 'zod'

export async function ownerRoutes(fastify: FastifyInstance) {
    fastify.get('/owners', async () => {

        const owner = await prisma.owner.findMany()
        
        return { owner }
    });

    fastify.post('/owner/new', async (request, reply) => {

        const createOwnerBody = z.object({
            name: z.string(),
            email: z.string(),
            password: z.string(),
        })

        const { name, email, password } = createOwnerBody.parse(request.body)

        await prisma.owner.create({
            data: {
                name,
                email,
                password
            }
        })

        return reply.status(201).send({
            message: 'Criado com sucesso!'
        })
    })

    fastify.delete('/owner/:id/delete', async (request, reply) => {
        const id = String(request.headers.id);

        const ownerVerify = await prisma.owner.findUnique({
            where: {
                id,
            },
        })

        if (!ownerVerify) {
            return reply.status(404).send({
                message: 'O Dono não foi encontrado.'
            })
        }

        const ownerOccurrences = await prisma.owner.findMany({
            where: {
                id,
            },

            include: {
                movie_theaters: {
                    where: {
                        ownerEmail: ownerVerify.email
                    }
                }
            }
        })

        if (ownerOccurrences.length > 0) {
            await prisma.cinema.deleteMany({
                where: {
                    ownerEmail: ownerVerify.email
                }
            })
        }

        await prisma.owner.delete({
            where: {
                id
            }
        })

        return reply.status(202).send({
            message: 'Deletado com sucesso!'
        })
    })

    fastify.post('/owner/:id/update', async (request, reply) => {
        const createOwnerBody = z.object({
            name: z.string(),
            email: z.string(),
            password: z.string(),
        })

        const id = String(request.headers.id);

        const { name, email, password } = createOwnerBody.parse(request.body)

        const owner = await prisma.owner.findUnique({
            where: {
                id,
            },
        })

        if (!owner) {
            return reply.status(400).send({
                message: 'O Dono não foi encontrado.'
            })
        }

        await prisma.owner.update({
            where: {
                id
            },
            data: {
                name,
                email,
                password
            }
        })

        return reply.status(200).send({
            message: 'Atualizado com sucesso!'
        })
    })
}