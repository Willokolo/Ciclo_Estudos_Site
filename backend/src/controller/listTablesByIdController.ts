import type { FastifyRequest, FastifyReply } from "fastify";
import { listTablesIdService } from "../service/listTablesIdService.js";

class listTablesByIdController {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const {name , password} = request.body as {name: string, password: string};

        const service = new listTablesIdService();

        const tables = await service.execute({ name , password })

        return reply.status(201).send(tables);
    }
}

export { listTablesByIdController }