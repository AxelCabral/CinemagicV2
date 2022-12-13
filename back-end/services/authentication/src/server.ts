import cors from '@fastify/cors'
import Fastify from 'fastify'
import { loginRoutes } from './routes/login'
import { userRoutes } from './routes/user'


async function bootstrap() {
    const fastify = Fastify({
        logger: true,
    })
    await fastify.register(cors, {
        origin: true,
    })

    await fastify.register(userRoutes)
    await fastify.register(loginRoutes)

    await fastify.listen({ port: 3339 })
}


bootstrap()