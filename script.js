document.getElementById('gerarMaterias').addEventListener("submit", function (e) {
    e.preventDefault(); //previne que a pagina recarregue ao enviar o formulario

    const qtdMaterias = Number(document.getElementById('Numaterias').value);

    for(let i= 0; i < qtdMaterias; i++) {
    const materiaCard = document.createElement('div');//cria o elemento em html
    materiaCard.classList.add('materia-bloco')// Adiciona uma classe css ao elemento classe (materia-bloco)

    materiaCard.innerHTML = `
        <h3>Matéria ${i}</h3>
            <form id = "materia">
            <label for="nomeMateria">Digite o nome da matéria:</label>
            <br>
            <input type="text" id="nomeMateria" name="nomeMateria" placeholder="Ex: Matemática" required>
            <br>
            <label for="pesoMateria">Digite o peso da matéria:</label>
            <br>
            <input type="number" id="pesoMateria" name="pesoMateria" placeholder ="Ex: 1.5 ou 1.0" required>
            <br>   
            <label for="qtdConteudo">Quantidade de conteúdo da matéria de 1 a 5:</label>
            <br>
            <input type="number" id="qtdConteudo" name="qtdConteudo" placeholder="Ex: 1 a 5" required>
        </form>
    `;
   document.getElementById('materiasContainer').appendChild(materiaCard);//adiciona o elemento criado dentro do container materiasContainer
};

//o for necessita estar dentro do escopo que a variável dele é criada (quem diria né, burro é de lascar viu)

});

