import prismaClient from "../prisma";

interface CreateUserProps {
    //contráto sintático, que define a estrutura e o tipo de um onjeto
    //especifica as propriedades e métodos sem implementar lógica
    name: string;
    password: string;
    materia?: {
        title: string;
        weight: number;
        quantity: number;
        difficulty: number;
    }[];
}

class CreateUserService {

    async execute({ name, password, materia }: CreateUserProps) {

        if (!name || !password) {
            throw new Error("Preencha os campos");
        }

        const user = await prismaClient.user.create({
            data: {
                //aqui ficam os items que irão passar
                name,
                password,
                materia: {
                    create: materia as any
                    //Isso diz literalmente, confia no pai, verifica nn
                }
            },
            include: {
                materia: true
                //traz a relação inteira do objeto
            }
        })

        return user;
    }

}

export { CreateUserService };