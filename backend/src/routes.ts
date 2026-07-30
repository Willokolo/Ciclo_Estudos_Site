import type { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify';
import { createUserController } from './controller/createUserController.js';
import { listTablesByIdController } from './controller/listTablesByIdController.js';
import { registroController } from './controller/registroController.js';
import { loginController } from './controller/loginController.js'

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get("/test", async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true }
    })

    fastify.post("/createUserAll", async (request: FastifyRequest, reply: FastifyReply) => {
        return new createUserController().handle(request, reply);
    })

    fastify.post("/ListTables", async (request: FastifyRequest, reply: FastifyReply) => {
        return new listTablesByIdController().handle(request, reply);
    })

    fastify.post("/registro", registroController);

    fastify.post("/login", loginController);

}