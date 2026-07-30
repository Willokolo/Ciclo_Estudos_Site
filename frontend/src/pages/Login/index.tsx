import { useState, type SubmitEvent } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router";
import Menu from "../../assets/menu";
import { login } from '../../service/loginService';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [carregando, setCarregando] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setCarregando(true);

    try {
      const data = await login({ email, password });

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      navigate('/CriarTabela', { replace: true });

    } catch (error: any) {

      const mensagem = error.response?.data?.message ?? 'Erro ao fazer login ' + error;
      setError(mensagem);

    } finally {

      setCarregando(false);

    }
  }

  return (
    <div>
      <Menu />

      <div className="w-full min-h-screen bg-slate-900 flex justify-center p-6">

        <form className="w-lg p-6 space-y-2  flex justify-start list-none flex-col text-slate-50" onSubmit={handleSubmit}>
          <h2 className="text-white text-4xl font-bold">Login</h2>

          <label htmlFor="email" className="pt-4 font-bold">Email: </label>
          <input type="text" id="email" placeholder="exemplo@gmail.com"
            className="text-slate-900 p-4 font-bold bg-slate-50 rounded-2xl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password" className="pt-4 font-bold">Senha: </label>
          <input type="password" id="password" placeholder="Digite sua senha"
            className="text-slate-900 p-4 font-bold bg-slate-50 rounded-2xl"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <p className="text-white text-sm">Não tem uma conta? <Link to="/Registro" className="text-blue-400 hover:text-blue-700">Crie uma aqui</Link></p>

          <button type="submit" className="w-fit mt-4 bg-blue-400 hover:bg-blue-700 text-white font-bold p-3 rounded"
            disabled={carregando}>{carregando ? 'Entrando...' : 'Entrar'}</button>
            
        </form>
      </div>
    </div>
  )
}