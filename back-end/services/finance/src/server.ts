import cors from '@fastify/cors'
import Fastify from 'fastify'
import { cinemaRoutes } from './routes/cinema'
import { salesRoutes } from './routes/sales'


async function bootstrap() {
    const fastify = Fastify({
        logger: true,
    })
    await fastify.register(cors, {
        origin: true,
    })
    
    await fastify.register(cinemaRoutes)
    await fastify.register(salesRoutes)

    await fastify.listen({ port: 3336 })
}


bootstrap()