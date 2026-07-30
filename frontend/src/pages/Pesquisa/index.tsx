import { SectionTitle, line } from "../../assets/elements";
import { Link } from "react-router-dom";
import Menu from "../../assets/menu";

export default function Pesquisa() {
  
  return (
    <div>
      <Menu />
      <div className="w-full min-h-screen bg-slate-900 flex justify-start p-6">
        <main className="w-3/4 min-h-screen bg-slate-50 rounded-3xl p-6">

          <div className="space-y-4 p-6">

            <SectionTitle>O que é um ciclo de estudos?</SectionTitle>

            <p className="text-sm text-gray-600 ">
              Antes de montar seu ciclo de estudos, entenda o que é um ciclo. Se você quer apenas fazer seu ciclo <Link to="/Login" className="text-sm underline text-blue-500 hover:text-blue-700">clique aqui.</Link>
            </p>

            <p className="">
              Muitos estudantes utilizam o tradicional cronograma de estudos, onde se define exatamente o que estudar em cada dia e horário da semana. No entanto, esse modelo apresenta falhas críticas, como a falta de flexibilidade: se algo inesperado acontece, o estudante não consegue cumprir a meta do dia, o que acaba desorganizando todo o restante da semana.
            </p>

            {line()}

          </div>

          <div className="space-y-4 p-6">

            <SectionTitle>Quais são seus benefícios?</SectionTitle>

            <div className="bg-blue-100 p-4 rounded-lg inline-flex items-start gap-4 w-full border border-slate-400">
              <div>
                ⚡
              </div>
              <p className="">
                <strong className="text-semibold">Flexibilidade Real:</strong> O ciclo não impõe a pressão de cumprir horas fixas por dia sem falhar. Se você tiver um imprevisto, simplesmente retoma o estudo de onde parou, sem "embolar" o conteúdo das próximas matérias.
              </p>
            </div>

            <div className="bg-blue-100 p-4 rounded-lg inline-flex items-start gap-4 w-full border border-slate-400">
              <div>
                🧠
              </div>
              <p className="">
                <strong className="text-semibold">Redução da Sobrecarga e Desmotivação:</strong> Diferente dos cronogramas densos que podem gerar sentimentos de impotência e desmotivação quando não são cumpridos, o ciclo respeita o seu ritmo.
              </p>
            </div>

            <div className="bg-blue-100 p-4 rounded-lg inline-flex items-start gap-4 w-full border border-slate-400">
              <div>
                🎯
              </div>
              <p className="">
                <strong>Priorização Inteligente:</strong> O método organiza seu tempo com base em critérios objetivos, como o peso da matéria na sua prova, a quantidade de conteúdo a ser estudado e o seu nível de dificuldade em cada assunto.
              </p>
            </div>

            <div className="bg-blue-100 p-4 rounded-lg inline-flex items-start gap-4 w-full border border-slate-400">
              <div>
                📋
              </div>
              <p className="">
                <strong>Organização Constante:</strong> Ele evita a falta de foco, garantindo que você dedique mais tempo às disciplinas que realmente farão diferença na sua aprovação, tratando cada atividade com a devida importância.
              </p>
            </div>

            {line()}

          </div>

          <div className="space-y-4 p-6">

            <SectionTitle>Como montar seu ciclo?</SectionTitle>

            <div className="inline-flex items-start gap-4">
              <div className="bg-blue-100 p-4 rounded-4xl w-8 h-8 border-2 flex justify-center items-center border-slate-400 text-blue-950">1</div>
              <div>
                <strong className="text-xl text-blue-950">Defina sua janela de estudos</strong>
                <p className="py-2">Antes de olhar para as matérias, pegue um papel e caneta e anote as seguintes informações:</p>
                <p>Analise sua rotina semanal e identifique em quantas horas você pode se dedicar exclusivamente aos estudos. Como cada realidade é única — seja você alguém que trabalha, faz faculdade ou cursos extras —, escolha blocos de tempo que funcionem para você.</p>
              </div>
            </div>

            <div className="inline-flex items-start gap-4">
              <div className="bg-blue-100 p-4 rounded-4xl w-8 h-8 border-2 flex justify-center items-center border-slate-400 text-blue-950">2</div>
              <div>
                <strong className="text-xl text-blue-950">Avalie suas matérias</strong>
                <p className="py-2">Liste todas as matérias que você precisa estudar. Se você busca estudar para um concurso, consulte o edital e procure as disciplinas que a prova exige.</p>
              </div>
            </div>

            <div className="inline-flex items-start gap-4">
              <div className="bg-blue-100 p-4 rounded-4xl w-8 h-8 border-2 flex justify-center items-center border-slate-400 text-blue-950">3</div>
              <div>
                <strong className="text-xl text-blue-950">Defina o peso dessas matérias</strong>
                <p className="py-2">Se você estuda para um concurso ou vestibular, leia o edital para verificar o peso oficial de cada prova. Caso o edital não especifique pesos diferentes, fique atento ao peso implícito: algumas matérias, como Redação ou Português, podem ser critérios de desempate decisivos. Se não houver pesos definidos, você pode usar o peso 1 para todas.</p>
              </div>
            </div>

            <div className="inline-flex items-start gap-4">
              <div className="bg-blue-100 p-4 rounded-4xl w-8 h-8 border-2 flex justify-center items-center border-slate-400 text-blue-950">4</div>
              <div>
                <strong className="text-xl text-blue-950">Defina uma quantidade de conteúdo para cada matéria</strong>
                <p className="py-2">Verifique o volume total de matéria que precisa ser estudado consultando o edital ou seu material didático. Considere a quantidade de capítulos ou aulas de cada disciplina e também a densidade do conteúdo. Defina um valor entre 1 a 5, variando de "muito pouco conteúdo" a "muitíssimo conteúdo".</p>
              </div>
            </div>

            <div className="inline-flex items-start gap-4">
              <div className="bg-blue-100 p-4 rounded-4xl w-8 h-8 border-2 flex justify-center items-center border-slate-400 text-blue-950">5</div>
              <div>
                <strong className="text-xl text-blue-950">Defina a dificuldade de cada matéria para você</strong>
                <p className="py-2">Utilizando a mesma métrica (de 1 a 5), atribua uma nota de dificuldade a cada matéria — de "muito fácil" a "muito difícil". Seja honesto consigo mesmo: reserve notas menores para matérias que já domina e notas maiores para as que apresentam mais obstáculos.</p>
              </div>
            </div>

            {line()}

          </div>

          <div className="bg-linear-to-r from-slate-800 to-blue-900 rounded-2xl p-6 text-white text-center inline-flex justify-between items-center w-full">
            <p>Acesse nossa ferramenta e crie seu ciclode estudos personalizados de forma rápida, facil e <strong>GRATUITA</strong></p>
            <Link to="/CriarTabela" className="bg-orange-400 shadow-lg shadow-orange-400/50 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded">Crie seu Ciclo →</Link>
          </div>

        </main>
      </div>
    </div>
  )
}