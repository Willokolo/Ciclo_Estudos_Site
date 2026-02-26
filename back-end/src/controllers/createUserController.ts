import type { FastifyRequest, FastifyReply } from "fastify";
import { CreateUserService } from "../services/creatUserService";

class CreateUserController {

    async handle( request: FastifyRequest, reply: FastifyReply) {

        const { name, password, materia} = request.body as { name: string, password: string, materia: []};
        console.log(name, password);

        const service = new CreateUserService();

        const customer = await service.execute({ name, password, materia });

        return reply.status(201).send(customer);

    }

}

export { CreateUserController };