import type { Select } from "@prisma/client/runtime/library";
import { prisma } from "../prisma/index.js";

interface SelectUser {
    name: string;
    password: string;
}

class listTablesIdService {

    async execute({ name, password}: SelectUser) {

        const user = await prisma.user.findFirst({
            where: {name}
        })

        if (!user) {
            throw new Error("Usuário não encontrado");
        }

        if (user.password !== password) {
            throw new Error("Senha incorreta");
        }

        const tables = await prisma.table.findMany({
            where: {
                userId: user.id
            }, 
            include: {
                materia: {
                    select: {
                        id: false,
                        title: true,
                        time: true
                    }
                },
                user: {
                    select: {
                        id: false,
                        name: true,
                        password: false
                    }
                }
            }, 
        })

        return tables;
    }
}

export { listTablesIdService}