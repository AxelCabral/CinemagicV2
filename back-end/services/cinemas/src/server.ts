import Fastify from 'fastify'
import cors from '@fastify/cors'
import { ownerRoutes } from './routes/owner'
import { cinemaRoutes } from './routes/cinema'
import { employeerRoutes } from './routes/employeer'

async function bootstrap() {
    const fastify = Fastify({
        logger: true,
    })

    await fastify.register(cors, {
        origin: true, //Mudar para domínio da aplicação quando em produção
    })

    await fastify.register(ownerRoutes)
    await fastify.register(cinemaRoutes)
    await fastify.register(employeerRoutes)

    await fastify.listen({ port: 3331 })
}

bootstrap()