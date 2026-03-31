import type { FastifyRequest, FastifyReply } from "fastify";
import {createUserService} from "../service/createUserService.js";

class createUserController {
    
    async handle( request: FastifyRequest, reply: FastifyReply) {

        const { name , password , table } = request.body as { name: string , password: string, table: [] };

        const service = new createUserService();

        const customer = await service.execute({ name , password , table })

        return reply.status(201).send(customer);

    }
}

export {createUserController}