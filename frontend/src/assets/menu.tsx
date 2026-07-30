import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
//import { useNavigate } from 'react-router-dom';

interface User {
    name: string;
    password: string;
    email: string;
}

export default function Menu() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const data = localStorage.getItem('user');
        const user = data ? JSON.parse(data) : null;

        if (user) {
            setUser(user);
        }
    }, [])


    return (
        <div className="px-12 py-5 w-full bg-blue-500 p-4 text-white flex items-start justify-between gap-7">
            <h3>{user ? `Bem-vindo, ${user?.name}!` : ''}</h3>
            <div className = "flex gap-6 text-1xl">
                <Link to="/" className="hover:text-blue-200">Início</Link>
                <Link to="/Login" className="hover:text-blue-200">Criar Ciclo</Link>
                <Link to="/Login" className="hover:text-blue-200">Suas Tabelas</Link>
            </div>

        </div>
    )
}
