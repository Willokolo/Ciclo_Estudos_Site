import { prisma } from "../prisma/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

interface userData {
    email: string; 
    password: string;
}

export class AuthError extends Error {}


export async function loginService({email, password}: userData ) {
    const user = await prisma.user.findUnique({
        where: {email}
    });

    if (!user) {
        throw new AuthError("Usuário não encontrado");
    }
    const confirmPassword = await bcrypt.compare(password, user.password);
    
    if (!confirmPassword) {
        throw new AuthError("Senha Incorreta")
    }
    const token = jwt.sign(
        { userId: user.id, email: user.email, name: user.name},
        process.env.JWT_SECRET as string,
        { expiresIn: '1d' }
    );
    return {
        token, 
        user: {id: user.id, name: user.name, email: user.email}
    };
} 
