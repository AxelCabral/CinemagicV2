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
            description: z.string(),
            createdAt: z.string(),
            userID: z.string(),
        })

        const { cinema_id, value, type, description, createdAt, userID } = createSalesBody.parse(request.body)

        await prisma.sales.create({
            data: {
                cinema_id,
                value,
                type,
                description,
                createdAt,
                userID,
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

    fastify.post('/sales/:id/update', async (request, reply) => {
        
        const createSalesBody = z.object({
            cinema_id: z.undefined(),
            value: z.number(),
            type: z.string(),
            description: z.string()
        })

        const id = String(request.headers.id);

        const { cinema_id, value, type, description } = createSalesBody.parse(request.body)

        const sales = await prisma.sales.findMany({
            where: {
                id,
            },
        })

        if (sales.length == 0) {
            return reply.status(400).send({
                message: 'A venda não foi encontrado.'
            })
        }

        await prisma.sales.update({
            where: {
                id
            },
            data: {
                cinema_id,
                value,
                type,
                description,
            }
        })

        return reply.status(200).send({
            message: 'Atualizado com sucesso!'
        })
    })

    fastify.get('/sales/update', async (request) => {
        const id = String(request.headers.id);

        const sales = await prisma.sales.findUnique({
            where: {
                id,
            },
        })

        return { sales }
    })

    fastify.get('/report/info', async (request) => {
        const cinema_id = String(request.headers.cinema_id);
        const month = String(request.headers.month);
        const year = String(request.headers.year);
        
        const startTime = new Date(year+'-'+month+'-01');
        const endTime = new Date(year+'-'+month+'-31');


        const sales = await prisma.sales.findMany({
            where: {
                AND: [
                  { cinema_id: cinema_id },
                  {
                    createdAt: {
                      gte: startTime,
                      lte: endTime
                    }
                  }
                ]
              }
        })

        return { sales }
    })

}