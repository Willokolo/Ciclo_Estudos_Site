import Fastify from 'fastify';
import cors from '@fastify/cors';
import { routes } from './routes.js';

const app = Fastify({ logger: true });

const start = async () => {

    await app.register(routes);
    await app.register(cors);

    await app.register(routes, { prefix: '/auth' });

    try {
        await app.listen({ port: 3000 });

    } catch (err) {
        process.exit(1);
    }
}

start();