import Fastify from 'fastify'
import cors from '@fastify/cors'
import { sessionRoutes } from './routes/session'


async function bootstrap() {
    const fastify = Fastify({
        logger: true,
    })

    await fastify.register(cors, {
        origin: true, //Mudar para domínio da aplicação quando em produção
    })

    await fastify.register(sessionRoutes)
    

    await fastify.listen({ port: 3340 })
}

bootstrap()