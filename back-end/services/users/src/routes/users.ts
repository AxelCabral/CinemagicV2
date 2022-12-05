import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma'
import { z } from 'zod'

export async function userRoutes(fastify: FastifyInstance) {
    fastify.get('/users', async () => {

        const user = await prisma.user.findMany()

        return { user }
    });

    fastify.post('/users/new', async (request, reply) => {

        const createUserBody = z.object({
            name: z.string(),
            email: z.string(),
            password: z.string(),
        })

        const { name, email, password } = createUserBody.parse(request.body)

        await prisma.user.create({
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

    fastify.delete('/users/:id/delete', async (request, reply) => {
        const id = String(request.headers.id);

        const user = await prisma.user.findUnique({
            where: {
                id,
            },
        })

        if (!user) {
            return reply.status(404).send({
                message: 'O usuário não foi encontrado.'
            })
        }
        await prisma.user.delete({
            where: {
                id
            }
        })

        return reply.status(202).send({
            message: 'Deletado com sucesso!'
        })
    })

    fastify.post('/users/:id/update', async (request, reply) => {

        console.log(request.server);

        const createUserBody = z.object({
            name: z.string(),
            email: z.string(),
            password: z.string(),
        })

        const id = String(request.headers.id);

        const { name, email, password } = createUserBody.parse(request.body)

        const user = await prisma.user.findUnique({
            where: {
                id,
            },
        })

        if (!user) {
            return reply.status(400).send({
                message: 'O usuário não foi encontrado.'
            })
        }

        await prisma.user.update({
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

    fastify.get('/users/update', async (request) => {
        const id = String(request.headers.id);

        const user = await prisma.user.findUnique({
            where: {
                id,
            },
        })

        return { user }
    })

}