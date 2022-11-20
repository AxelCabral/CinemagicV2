import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma'
import { z } from 'zod'

export async function employeerRoutes(fastify: FastifyInstance) {
    fastify.get('/employeers', async () => {

        const employeer = await prisma.employeer.findMany()
        
        return { employeer }
    });

    fastify.post('/employeer/new', async (request, reply) => {

        const createEmployeerBody = z.object({
            name: z.string(),
            email: z.string(),
            phone_number: z.string(),
            cineId: z.string(),
        })

        const { name, email, phone_number, cineId } = createEmployeerBody.parse(request.body)

        await prisma.employeer.create({
            data: {
                name,
                email,
                phone_number,
                cineId
            }
        })

        return reply.status(201).send({
            message: 'Criado com sucesso!'
        })
    })

    fastify.delete('/employeer/:id/delete', async (request, reply) => {
        const id = String(request.headers.id);

        const employeerVerify = await prisma.employeer.findUnique({
            where: {
                id,
            },
        })

        if (!employeerVerify) {
            return reply.status(404).send({
                message: 'O empregado não foi encontrado.'
            })
        }

        await prisma.employeer.delete({
            where: {
                id
            }
        })

        return reply.status(202).send({
            message: 'Deletado com sucesso!'
        })
    })

    fastify.post('/employeer/:id/update', async (request, reply) => {
        const createEmployeerBody = z.object({
            name: z.string(),
            email: z.string(),
            phone_number: z.string(),
            cineId: z.string(),
        })

        const id = String(request.headers.id);

        const { name, email, phone_number, cineId } = createEmployeerBody.parse(request.body)

        const employeer = await prisma.employeer.findUnique({
            where: {
                id,
            },
        })

        if (!employeer) {
            return reply.status(400).send({
                message: 'O empregado não foi encontrado.'
            })
        }

        await prisma.employeer.update({
            where: {
                id
            },
            data: {
                name,
                email,
                phone_number,
                cineId
            }
        })

        return reply.status(200).send({
            message: 'Atualizado com sucesso!'
        })
    })
}