import cors from '@fastify/cors'
import Fastify from 'fastify'
import { salesRoutes } from './routes/sales'
import { productsRoutes } from './routes/products'


async function bootstrap() {
    const fastify = Fastify({
        logger: true,
    })
    await fastify.register(cors, {
        origin: true,
    })
    
    await fastify.register(salesRoutes)
    await fastify.register(productsRoutes)
    
    await fastify.listen({ port: 3336 })
}


bootstrap()