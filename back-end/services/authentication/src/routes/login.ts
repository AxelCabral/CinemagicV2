import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma'
import { z } from 'zod'

export async function loginRoutes(fastify: FastifyInstance) {
    fastify.get('/login', async () => {

        const login = await prisma.login.findMany()

        return { login }
    });

    fastify.post('/login/new', async (request, reply) => {

        const createLoginBody = z.object({
            email: z.string(),
            password: z.string(),
        })

        const { email, password } = createLoginBody.parse(request.body)

        await prisma.login.create({
            data: {
                email,
                password
            }
        })

        return reply.status(201).send({
            message: 'Logado com sucesso!'
        })
    })

    fastify.delete('/login/:id/delete', async (request, reply) => {
        const id = String(request.headers.id);

        const login = await prisma.login.findUnique({
            where: {
                id,
            },
        })

        if(!login){
            return reply.status(404).send({
                message: 'Erro em finalizar sessão.'
            })
        }
        await prisma.login.delete({
            where: {
                id
            }
        })

        return reply.status(202).send({
            message: 'Sessão finalizada com sucesso!'
        })
    })

}