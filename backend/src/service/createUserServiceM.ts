import { PrismaClient } from "@prisma/client";
import { prisma } from "../prisma/index.js";

interface MateriaRequest {
    title: string;
    weight: number;
    quantity: number;
    difficulty: number;
}

interface TableRequest {
    title: string;
    description: string;
    hours: number;
    qtdmateria: number;
    materia: MateriaRequest[];
}

interface UserRequest {
    name: string;
    password: string;
    table?: TableRequest[];
}

class createUserServiceM {
    async execute({ name, password, table }: UserRequest) {

        if (!name || !password) {
            throw new Error("Preencha os campos");
        }

        const user = await prisma.user.create({
            data: {
                name,
                password,
                table: {
                    create: table?.map(t => ({
                        title: t.title,
                        description: t.description,
                        qtdmateria: t.qtdmateria,
                        hours: t.hours,
                        materia: {
                            create: t.materia.map(m => ({
                                title: m.title,
                                weight: m.weight,
                                quantity: m.quantity,
                                difficulty: m.difficulty
                            })) || []
                        }
                    })) || []

                }
            },
            include: {
                table: {
                    include: {
                        materia: true
                    }
                }
            }
        })
        return user;
    }
}

export {createUserServiceM};