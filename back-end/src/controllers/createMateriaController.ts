import type { FastifyRequest, FastifyReply } from "fastify";
import { createMateriaByService } from "../services/createMateriaService";

class createMateriaController {

    async handle(request: FastifyRequest, reply: FastifyReply) {

            const { name , password , materia } = request.body as 
            {name:string, password: string, materia: 
                {title: string, 
                    weight: number, 
                    quantity: number, 
                    difficulty: number
                }[]};

        const service = new createMateriaByService();

        const materias = await service.execute({name, password, materia });

                return reply.status(201).send(materias);

    }
}

export {createMateriaController};