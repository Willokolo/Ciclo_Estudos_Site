import 'dotenv/config';
import { prisma } from "../prisma/index.js";
import bcrypt from 'bcryptjs';

interface MateriaRequest {
    title: string;
    time: number;
}

interface TableRequest {
    title: string;
    description: string;
    materia: MateriaRequest[];
}

interface UserRequest {
    name: string;
    password: string;
    email: string;
    table?: TableRequest[];
}

class createUserService {

    async execute({ name, password, email, table }: UserRequest) {

        const hashPassword = await bcrypt.hash(password, 10); 

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashPassword,
                table: {
                    create: table?.map(t => ({
                        title: t.title,
                        description: t.description,
                        materia: {
                            create: t.materia.map(m => ({
                                title: m.title,
                                time: m.time
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
        return user
    }
}

export { createUserService };