import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma'
import { z } from 'zod'

export async function salesRoutes(fastify: FastifyInstance) {
    fastify.get('/sales', async () => {

        const sales = await prisma.sales.findMany()

        return { sales }
    });

    fastify.post('/sales/new', async (request, reply) => {

        const createSalesBody = z.object({
            cinema_id: z.string(),
            value: z.number(),
            type: z.string(),
            description: z.string()
        })

        const { cinema_id, value, type, description} = createSalesBody.parse(request.body)

        await prisma.sales.create({
            data: {
                cinema_id,
                value,
                type,
                description
            }
        })

        return reply.status(201).send({
            message: 'Criado com sucesso!'
        })
    })

    fastify.delete('/sales/:id/delete', async (request, reply) => {
        const id = String(request.headers.id);

        const sale = await prisma.sales.findUnique({
            where: {
                id,
            },
        })

        if (!sale) {
            return reply.status(404).send({
                message: 'A venda não foi encontrada.'
            })
        }

        await prisma.sales.delete({
            where: {
                id
            }
        })

        return reply.status(202).send({
            message: 'Deletado com sucesso!'
        })
    })

}