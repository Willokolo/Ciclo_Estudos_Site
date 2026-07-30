import type { FastifyRequest, FastifyReply } from 'fastify';
import { loginService, AuthError } from '../service/loginService.js';

interface userData {
    email: string;
    password: string;
}


export async function loginController(request: FastifyRequest<{ Body: userData }>, reply: FastifyReply) {

    try {

        const { password , email } = request.body;

        const result = await loginService({email , password});

        return reply.status(201).send(result);

    } catch (error) {

        if (error instanceof AuthError) {
            return reply.status(401).send({message: error.message});
        }

        console.error(error);
        return reply.code(500).send({ message: 'Erro interno no servidor' });

    }
}

