import type { FastifyRequest, FastifyReply } from "fastify";
import {createUserService} from "../service/createUserService.js";

class createUserController {
    
    async handle( request: FastifyRequest, reply: FastifyReply) {

    const { name , password , email , table } = request.body as { name: string , password: string, email: string, table: [] };

        const service = new createUserService();

        const customer = await service.execute({ name , password , email , table })

        return reply.status(201).send(customer);

    }
}

export {createUserController}