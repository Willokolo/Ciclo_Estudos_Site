function initTabelaGerada() {
  if (localStorage.getItem("TabelaGerada") === null) {
    localStorage.setItem("TabelaGerada", "false");
  }
}

function Menu() {

    if (localStorage.getItem('TabelaGerada') === "true") {
        return `
            <nav class="navbar navbar-expand-lg bg-primary w-100" data-bs-theme="dark">
                <div class="container-fluid">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100">
                            <li class="nav-item">
                                <a class="nav-link" href="../pages/Index.html">Início</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="../pages/CriarCiclo.html">Cria seu Cíclo</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="../pages/tabelaCiclo.html">Seu Cíclo</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>`;

    } else {
         return ` 
            <nav class="navbar navbar-expand-lg bg-primary w-100" data-bs-theme="dark">
                <div class="container-fluid">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100">
                            <li class="nav-item">
                                <a class="nav-link" href="../pages/Index.html">Início</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="../pages/CriarCiclo.html">Cria seu Cíclo</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link disabled" href="../pages/tabelaCiclo.html">Seu Cíclo</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
`
    };
};

function generateMenu() {
    const navBarDiv = document.querySelector('.navBarDiv');
    navBarDiv.innerHTML = Menu();

}

generateMenu();
