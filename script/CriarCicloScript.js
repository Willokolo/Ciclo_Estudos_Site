function createFormsMaterias(index) {
    return `
    <div data-index = "${index}" class = "MateriasDataGenerated"> 
        <h3>${index}° Matéria</h3>
        <div class = "mb-3" >
            <label class = "form-label" for="nomeMateria" >Digite o nome da matéria:</label>
            <br>
            <input class = "form-control" type="text" id="nomeMateria" name="nomeMateria" placeholder="Ex: Matemática" required>
        </div>

        <div>
            <label class = "form-label" for="pesoMateria">Digite o peso da matéria:</label>
            <br>
            <input class = "form-control" type="number" step = "0.1" id="pesoMateria" name="pesoMateria" placeholder ="Ex: 1.5 ou 1.0" required> 
        </div>

        <div>
            <label class = "form-label" for="qtdConteudo">Quantidade de conteúdo da matéria de 1 a 5:</label>
            <br>
            <input class = "form-control" min = "1" max = "5" type="number" id="qtdConteudo" name="qtdConteudo" placeholder="Ex: 1 a 5" required>
        </div>

        <div>
            <label class = "form-label" for="dificuldade">Dificuldade da matéria de 1 a 5:</label>
            <br>
            <input class = "form-control" min = "1" max = "5" type="number" id="dificuldade" name="dificuldade" placeholder="Ex: 1 a 5" required>
        </div>
    </div>`;
};

const container = document.getElementById('materiasContainer');  //busca o container onde os elementos serão adicionados

const materiasData = [];

function collectMateriasData() {
    const forms = document.querySelectorAll('.MateriasDataGenerated');
    //console.log("funciona 1");


    //forEach loop para percorrer todos os forms criados dinamicamente

    forms.forEach(form => {
        const nomeMateria = form.querySelector('#nomeMateria').value; //seleciona as informações do input/ necessita do #
        const pesoMateria = parseFloat(form.querySelector('#pesoMateria').value); //parseFloar converte string em um Float
        const qtdConteudo = parseInt(form.querySelector('#qtdConteudo').value); //parseInt converte string em um Integer
        const dificuldade = parseInt(form.querySelector('#dificuldade').value); //parseInt converte string em um Integer
        //console.log("funciona 2");

        materiasData.push({
            nomeMateria: nomeMateria, //cria os objetos e inseres no array
            pesoMateria: pesoMateria,
            qtdConteudo: qtdConteudo,
            dificuldade: dificuldade
        }); //console.log("funciona 3");
    });
    //printMaterias(materiasData); print no console para teste do array, ta funcionando é isso que importa
    return materiasData; //retorna o array com os objetos criados
};


function buttonToTable () {
    const botao = document.createElement('button');
    botao.id = "criarTabela";
    botao.type = "button";
    botao.className = "btn btn-success";
    botao.textContent = "Criar tabela";

    return botao;
}

function generateFormsMaterias() {
    const gerarMaterias = document.getElementById('gerarMaterias');

    gerarMaterias.addEventListener("submit", function (e) {
        e.preventDefault(); //previne que a pagina recarregue ao enviar o formulario

        const qtdMaterias = Number(document.getElementById('Numaterias').value);
        const qtdHoras = Number(document.getElementById('QtdHoras').value);

        container.innerHTML = '';//limpa o container para não duplicar os elementos ao gerar mais materias 

        for (let i = 1; i <= qtdMaterias; i++) {
            const materiaCard = document.createElement('div');//cria o elemento em html
            materiaCard.classList.add('materia-bloco')// Adiciona uma classe css ao elemento classe (materia-bloco)
            materiaCard.innerHTML = createFormsMaterias(i);
            container.appendChild(materiaCard); //

            if (i == qtdMaterias) {
                const divButton = document.createElement('div');
                divButton.className = 'button-container mt-3';

                const botao = buttonToTable();

                botao.addEventListener("click", function (){
                    
                    const materiasData = collectMateriasData();
                    localStorage.setItem("materiasData", JSON.stringify(materiasData));
                    localStorage.setItem("qtdHoras", qtdHoras);
                    window.location.href = "tabelaCiclo.html";
                })
                
                divButton.appendChild(botao);
                container.appendChild(divButton);
            }
        }
    });
};

generateFormsMaterias();