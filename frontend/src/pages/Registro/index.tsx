import { Link } from "react-router";
import Menu from "../../assets/menu";
import { useNavigate } from 'react-router-dom';
import { useState, useRef } from "react";
import { registro } from "../../service/registerService.ts";

export default function Registro() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [carregando, setCarregando] = useState(false);
  

  const senhasIguais = password !== '' && password === confirmPassword;

  const nameRef = useRef<HTMLInputElement | null>(null)
  const emailRef = useRef<HTMLInputElement | null>(null)
  const senhaRef = useRef<HTMLInputElement | null>(null)

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setCarregando(true);

    if (!nameRef.current?.value || !emailRef.current?.value || !senhaRef.current?.value) {
      setError("Preencha todos os campos");
      return;
    }

    try {

      const data = await registro({ name, email, password });

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      navigate('/CriarTabela', { replace: true });

    } catch (error: any) {
      setError(error.response?.data?.message ?? 'Erro ao registrar usuário');

    } finally {
      setCarregando(false);
    }

  }

  return (
    <div>
      <Menu />
      <div className="w-full min-h-screen bg-slate-900 flex justify-center p-6">

        <form className="w-lg p-6 space-y-2  flex justify-start list-none flex-col text-slate-50" onSubmit={handleSubmit}>
          <h2 className="text-white text-4xl font-bold">Registro</h2>

          <label htmlFor="nome" className="pt-4 font-bold">Nome: </label>
          <input
            type="text"
            id="nome"
            placeholder="Digite seu nome"
            className="text-slate-900 p-4 font-bold bg-slate-50 rounded-2xl"
            ref={nameRef}
            value = {name}
            onChange = {e => setName(e.target.value)}
            required
          />

          <label htmlFor="email" className="pt-4 font-bold">Email: </label>
          <input
            type="text"
            id="email"
            placeholder="exemplo@gmail.com"
            className="text-slate-900 p-4 font-bold bg-slate-50 rounded-2xl"
            ref={emailRef}
            value = {email}
            onChange = {e => setEmail(e.target.value)}
            required
          />

          <label htmlFor="senha" className="pt-4 font-bold">Senha: </label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            id="senha"
            placeholder="Digite sua senha"
            className="text-slate-900 p-4 font-bold bg-slate-50 rounded-2xl"
            ref={senhaRef}
            required
          />

          <label htmlFor="confirmarSenha" className="pt-4 font-bold">Confirmar Senha: </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            id="confirmarSenha"
            placeholder="Digite sua senha novamente"
            className="text-slate-900 p-4 font-bold bg-slate-50 rounded-2xl"
            required
          />

          {!senhasIguais && (
            <p className="text-red-500">As senhas não coincidem.</p>
          )}

          <p className="text-white text-sm">Já tem uma conta? <Link to="/Login" className="text-blue-400 hover:text-blue-700">Faça o login aqui</Link></p>

          {error && <p className="text-red-500">{error}</p>}

          <button type="submit" className={`transition-colors ${senhasIguais ? 'bg-blue-400 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'} w-fit mt-4 text-white font-bold p-3 rounded`} disabled = {carregando}>
            {carregando ? 'Registrando...' : 'Registrar'}
          </button>
        </form>

      </div>
    </div>

  )
}