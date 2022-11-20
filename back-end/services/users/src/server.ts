import Fastify from 'fastify'
import cors from '@fastify/cors'
import { userRoutes } from './routes/users'

async function bootstrap() {
    const fastify = Fastify({
        logger: true,
    })

    await fastify.register(cors, {
        origin: true, //Mudar para domínio da aplicação quando em produção
    })

    await fastify.register(userRoutes)

    await fastify.listen({ port: 3332 })
}

bootstrap()