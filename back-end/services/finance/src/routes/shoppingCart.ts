import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma'
import { z } from 'zod'

export async function cartRoutes(fastify: FastifyInstance) {
    fastify.get('/products/cart', async (request) => {
        //const id = String(request.headers.id);
        const id = "userID123"
        const Pcart = await prisma.shoppingCart.findMany({
            where: {
                userId: id,
                NOT: {
                    hasProduct: null
                }
            },
            include: { hasProduct: true },
        })
        const Ccart = await prisma.shoppingCart.findMany({
            where: {
                userId: id,
                NOT: {
                    hasCombo: null
                }
            },
            include: { hasCombo: true },
        })
        return { Pcart, Ccart }
    });

    fastify.delete('/products/cart/:id/delete', async (request, reply) => {
        const id = String(request.headers.id);

        const cart = await prisma.shoppingCart.findUnique({
            where: {
                cartId: id,
            }
        })

        if (!cart) {
            return reply.status(404).send({
                message: 'O produto não foi encontrado.'
            })
        }

        await prisma.shoppingCart.delete({
            where: {
                cartId: id,
            }
        })

        return reply.status(202).send({
            message: 'Deletado com sucesso!'
        })
    })

    fastify.post('/products/cart/:id/add', async (request, reply) => {
        const idT = String(request.headers.id);
        const isAProduct = await prisma.products.findUnique({
            where: {
                id: idT,
            }
        })
        const isACombo = await prisma.combo.findUnique({
            where: {
                id: idT,
            }
        })

        if (isAProduct) {
            await prisma.shoppingCart.create({
                data: {
                    userId: 'userID123',
                    productID: idT,
                    comboID: null,
                }
            })
        }
        else if (isACombo) {
            await prisma.shoppingCart.create({
                data: {
                    userId: 'userID123',
                    productID: null,
                    comboID: idT,
                }
            })
        }
        else {
            return reply.status(505).send({
                message: "Produto não encontrado!"
            })
        }


        return reply.status(201).send({
            message: 'Criado com sucesso!'
        })
    })
}