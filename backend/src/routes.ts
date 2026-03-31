import type { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify';
import { createUserController } from './controller/createUserController.js';

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get("/test", async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true }
    })

    fastify.post("/createUserAll", async (request: FastifyRequest, reply: FastifyReply) => {
        return new createUserController().handle(request, reply);
    })

}