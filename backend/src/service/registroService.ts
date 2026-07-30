import { prisma } from "../prisma/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

interface UserRequest {
    name: string;
    password: string;
    email: string;
}


export async function registroService({ name, password, email }: UserRequest) {

    const hashPassword = await bcrypt.hash(password, 10);


    const user = await prisma.user.create({
        data: {
            name,
            password: hashPassword,
            email
        }
    });

    const token = jwt.sign(
        { userId: user.id, email: user.email, name: user.name },
        process.env.JWT_SECRET as string,
        { expiresIn: '1d' }
    );

    return {
        token, 
        user: {id: user.id, name: user.name, email: user.email}
    };
}


