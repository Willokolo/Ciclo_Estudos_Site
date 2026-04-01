import type { FastifyRequest, FastifyReply } from "fastify";
import {createUserServiceM} from "../service/createUserServiceM.js";

class createUserControllerM {
    
    async handle( request: FastifyRequest, reply: FastifyReply) {

        const { name , password , table } = request.body as { name: string , password: string, table: [] };

        const service = new createUserServiceM();

        const customer = await service.execute({ name , password , table })

        return reply.status(201).send(customer);

    }
}

export {createUserControllerM}