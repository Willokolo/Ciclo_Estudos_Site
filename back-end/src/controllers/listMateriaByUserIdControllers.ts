import type { FastifyRequest, FastifyReply } from "fastify";
import { listMateriaByUserIdService } from "../services/listMateriaByUserIdService";

class listMaterialByUserId {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const {name , password} = request.body as {name: string, password: string};

        const service = new listMateriaByUserIdService();

        const materias = await service.execute({ name , password })

        return reply.status(201).send(materias);
    }
}

export {listMaterialByUserId}