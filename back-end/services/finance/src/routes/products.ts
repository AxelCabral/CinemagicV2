import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma'
import { z } from 'zod'

export async function productsRoutes(fastify: FastifyInstance) {
    fastify.get('/products', async () => {

        const products = await prisma.products.findMany()

        return { products }
    });

    fastify.post('/products/new', async (request, reply) => {

        const createproductsBody = z.object({
            urlImg: z.string(),
            price: z.number(), 
            name: z.string(),
        })

        const { urlImg, price, name } = createproductsBody.parse(request.body)

        await prisma.products.create({
            data: {
                urlImg,
                price,
                name,
            }
        })

        return reply.status(201).send({
            message: 'Criado com sucesso!'
        })
    })

    fastify.delete('/products/:id/delete', async (request, reply) => {
        const id = String(request.headers.id);
        
        const sale = await prisma.products.findUnique({
            where: {
                id,
            },
        })

        if (!sale) {
            return reply.status(404).send({
                message: 'O produto não foi encontrado.'
            })
        }

        await prisma.products.delete({
            where: {
                id
            }
        })

        return reply.status(202).send({
            message: 'Deletado com sucesso!'
        })
    })

    fastify.post('/products/:id/update', async (request, reply) => {
        
        const createproductsBody = z.object({
            urlImg: z.string(),
            price: z.number(), 
            name: z.string(),
        })

        const id = String(request.headers.id);

        const { urlImg, price, name } = createproductsBody.parse(request.body)

        const products = await prisma.products.findMany({
            where: {
                id,
            },
        })

        if (products.length == 0) {
            return reply.status(400).send({
                message: 'O produto não foi encontrado.'
            })
        }

        await prisma.products.update({
            where: {
                id
            },
            data: {
                urlImg,
                price,
                name,
            }
        })

        return reply.status(200).send({
            message: 'Atualizado com sucesso!'
        })
    })

    fastify.get('/products/update', async (request) => {
        const id = String(request.headers.id);

        const products = await prisma.products.findUnique({
            where: {
                id,
            },
        })

        return { products }
    })

}