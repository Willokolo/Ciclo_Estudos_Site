function generateTable() {
        return `
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col-1">Matéria</th>
                    <th scope="col-3">Marcações</th>
                </tr>
            </thead>
            <tbody id="tabelaBody">
            </tbody>
        </table>
        `;
};

function generateTr(materia, result) {

    const td = document.createElement("td");

    const tdDiv = document.createElement("div");
    tdDiv.className = "d-flex flex-row gap-2 flex-wrap";

    for (let i = 0; i < result; i++) {
        const divMarcacoes = document.createElement('div');
        divMarcacoes.className = "form-check";

        const input = document.createElement('input');
        input.type = "checkbox";
        input.className = "form-check-input";
        input.id = `marcacao${i}`;

        divMarcacoes.appendChild(input);
        
        tdDiv.appendChild(divMarcacoes);
    }

    td.appendChild(tdDiv);

    return `
    <td>${materia.nomeMateria}</td>
    <td>${td.innerHTML}</td>
    `;
}

function calcularft1(materiaData) {
    let total = 0;

    materiaData.forEach(materia => {
        const dificuldade = Number(materia.dificuldade);
        const pesoMateria = Number(materia.pesoMateria);
        const qtdConteudo = Number(materia.qtdConteudo);

        total += (dificuldade + pesoMateria) * qtdConteudo;
    });
    
        return total;

}

function populateTableCorrect() {
    const containerCiclo = document.getElementById('containerCiclo');
    containerCiclo.innerHTML = generateTable();

    const tbody = document.getElementById('tabelaBody');

    const materiaDadosRecover = JSON.parse(localStorage.getItem('materiasData'));
    const qtdHoras = Number(localStorage.getItem('qtdHoras'));

    materiaDadosRecover.forEach(materia => {
        const Ft1 = calcularft1(materiaDadosRecover);; 
        const Ft2 = qtdHoras;
        const Ft3 = Ft1 / Ft2;

        const result = (materia.qtdConteudo + materia.dificuldade) * materia.pesoMateria * Ft3;
        const resultInt = Math.round(result); // Arredonda o resultado para o número inteiro mais próximo
        
        const row = document.createElement('tr'); // Cria uma nova linha na tabela
        row.innerHTML = generateTr(materia, resultInt);
        tbody.appendChild(row); // Adiciona a linha ao corpo da tabela
    });

    localStorage.setItem('TabelaGerada', true);
}

populateTableCorrect();

function apagarCiclo() {
    if (confirm("Tem certeza que deseja apagar o ciclo?")) {
        localStorage.removeItem("materiasData");
        localStorage.removeItem("qtdHoras");
        localStorage.setItem("TabelaGerada", "false");
        window.location.href = "./index.html";
    }
}
