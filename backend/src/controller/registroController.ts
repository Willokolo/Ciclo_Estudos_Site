import type { FastifyRequest, FastifyReply } from "fastify";
import { registroService } from "../service/registroService.js";

interface userData {
    name: string;
    password: string;
    email: string;
}

export async function registroController(request: FastifyRequest<{ Body: userData }>, reply: FastifyReply) {

    try {
        const { name, password, email } = request.body;

        const customer = await registroService({ name, password, email })

        return reply.status(201).send(customer);

    } catch (error) {
        console.error(error);
        return reply.code(500).send({ message: 'Erro interno no servidor' });
    }
}
