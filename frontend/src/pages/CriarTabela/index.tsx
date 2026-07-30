import Menu from "../../assets/menu";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from "react";

export default function CriarTabela() {
  const navigate = useNavigate();

  const [carregando, setCarregando] = useState(false);
  const [qtdMaterias, setQtdMaterias] = useState(0);
  const [qtdHoras, setQtdHoras] = useState(0);

  const data = localStorage.getItem('user');
  const user = data ? JSON.parse(data) : null;

  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  //const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (user === null) { navigate('/Login', { replace: true }); }
  }, []);

  function forms(index: number) {
    return `
       <div data-index=${index} >
      <h3>${index}° Matéria</h3>

      <div className="mb-3">
        <label className="pt-4  font-bold" >
          Digite o nome da matéria:
        </label>
        <br />
        <input
          className="text-slate-900 mt-2 p-3 w-full text-lg font-bold border border-gray-300 bg-slate-50 rounded "
          type="text"
          name="nomeMateria"
          placeholder="Ex: Matemática"
          required
        />
      </div>

      <div>
        <label className="pt-4  font-bold" >
          Digite o peso da matéria:
        </label>
        <br />
        <input
          className="text-slate-900 mt-2 p-3 w-full text-lg font-bold border border-gray-300 bg-slate-50 rounded "
          type="number"
          step="0.1"
          name="pesoMateria"
          placeholder="Ex: 1.5 ou 1.0"
          required
        />
      </div>

      <div>
        <label className="pt-4  font-bold" >
          Quantidade de conteúdo da matéria de 1 a 5:
        </label>
        <br />
        <input
          className="t  ext-slate-900 mt-2 p-3 w-full text-lg font-bold border border-gray-300 bg-slate-50 rounded "
          type="number"
          min="1"
          max="5"
          name="qtdConteudo"
          placeholder="Ex: 1 a 5"
          required
        />
      </div>

      <div>
        <label className="pt-4  font-bold" >
          Dificuldade da matéria de 1 a 5:
        </label>
        <br />
        <input
          className="text-slate-900 mt-2 p-3 w-full text-lg font-bold border border-gray-300 bg-slate-50 rounded "
          type="number"
          min="1"
          max="5"
          name="dificuldade"
          placeholder="Ex: 1 a 5"
          required
        />
      </div>
    </div>
    `;

  }

  function createForms(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const quantidadeMaterias = qtdMaterias;
    const quantidadeHoras = qtdHoras;

    const formsToCreate = [];

    for (let i = 1; i <= quantidadeMaterias; i++) {
      const formHTML = forms(i);
      formsToCreate.push(formHTML);
    } 

    //containerRef.current!.innerHTML = formsToCreate.join('');
  }

  return (
    <div>
      <Menu />

      <div className="w-full min-h-screen bg-slate-900 flex justify-start p-6 ">
        <div className="w-4/15 h-fit bg-slate-50 rounded-2xl p-6 mr-16">
          <form onSubmit={createForms}>
            <label className="pt-4  font-bold" htmlFor="qtdMaterias">Coloque a quantidade de matérias:</label> <br />
            <input className="text-slate-900 mt-2 p-3 w-full text-lg font-bold border border-gray-300 bg-slate-50 rounded " value={qtdMaterias}
              onChange={(e) => setQtdMaterias(parseInt(e.target.value))}
              type="number" id="qtdMaterias" name="qtdMaterias" min="1" required /> <br />

            <br />

            <label className="pt-4 font-bold" htmlFor="qtdHoras">Coloque a quantidade de horas de estudo semanais:</label> <br />
            <input className="text-slate-900 mt-2 p-3 w-full text-lg font-bold border border-gray-300 bg-slate-50 rounded " value={qtdHoras}
              onChange={(e) => setQtdHoras(parseInt(e.target.value))}
              type="number" id="qtdHoras" name="qtdHoras" min="1" required />

            <button type="submit" className="bg-blue-400 hover:bg-blue-700 w-fit mt-4 text-white font-bold p-3 rounded" >
              Enviar
            </button>
          </form>

        </div>
        <main className="w-8/15 min-h-screen bg-slate-50 rounded-2xl p-6" id="fomrs-container" >

        </main>
      </div>
    </div>
  )
}