import prismaClient from "../prisma";

interface SelectUserProps {
    name: string,
    password: string
}

class listMateriaByUserIdService {
    async execute({name, password}: SelectUserProps){

        const user = await prismaClient.user.findUnique({
            where: { name }
        })

        if (!user) {
            throw new Error("Esse usuário não existe")
        }

        if(user?.password !== password) {
            ("Senha incorreta")
        }

        const materias = await prismaClient.materia.findMany({
            where: {
                userId: user.id
            }
        })

        return materias

    }
}

export {listMateriaByUserIdService};