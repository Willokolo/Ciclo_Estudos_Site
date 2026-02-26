import type { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify';
import      { CreateUserController } from './controllers/createUserController';
import      { listMaterialByUserId } from './controllers/listMateriaByUserIdControllers';
import { createMateriaController } from './controllers/createMateriaController';

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get("/test", async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true }

    })

    fastify.post("/create_user", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateUserController().handle(request, reply);

    })

    fastify.post("/list_materia", async (request: FastifyRequest, reply: FastifyReply) => {
        return new listMaterialByUserId().handle(request, reply);
    })

    fastify.post("/create_materia", async (request: FastifyRequest, reply: FastifyReply) => {
        return new createMateriaController().handle(request, reply);
    })
}