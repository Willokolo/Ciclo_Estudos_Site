import prismaClient from "../prisma";

interface CreateUserAndMateriaProps {
    //contráto sintático, que define a estrutura e o tipo de um onjeto
    //especifica as propriedades e métodos sem implementar lógica
    name: string;
    password: string;
    materia: {
        title: string;
        weight: number;
        quantity: number;
        difficulty: number;
    }[];
}

class createMateriaByService {
    async execute({ name, password, materia}: CreateUserAndMateriaProps) {

        const user = await prismaClient.user.findUnique({
            where: { name }
        })

        if (!user) {
            throw new Error("Esse usuário não existe")
        }

        if (user.password !== password) {
            throw new Error("Senha incorreta")
        }

        const materias = await prismaClient.materia.createMany({
            data: materia.map(item => ({
                title: item.title,
                weight: item.weight,
                quantity: item.quantity,
                difficulty: item.difficulty,
                userId: user.id
            })) 

        })

        const materiasList = await prismaClient.materia.findMany({
            where: {
                userId: user.id
            }
        })

        return materiasList

    }
}

export {createMateriaByService};
