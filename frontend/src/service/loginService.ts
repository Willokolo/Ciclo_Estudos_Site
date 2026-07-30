import {api} from "./api";

interface loginData {
    email: string; 
    password: string;
}

interface loginReturn {
    token: string;
    user: {
        id: string;
        name: string;
        email: string;
    }
}

export async function login(user: loginData): Promise<loginReturn> {
    const { data } = await api.post<loginReturn>('./auth/login', user);
    return data;
}