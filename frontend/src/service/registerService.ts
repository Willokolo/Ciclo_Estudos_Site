import {api} from "./api";

interface registerData {
    name: string;
    email: string; 
    password: string;
}

interface registerReturn {
    token: string;
    user: {
        id: string;
        name: string;
        email: string;
    }
}

export async function registro(user: registerData): Promise<registerReturn> {
    const { data } = await api.post<registerReturn>('./auth/registro', user);
    return data;
}