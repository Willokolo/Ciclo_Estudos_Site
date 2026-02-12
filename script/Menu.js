function initTabelaGerada() {
    if (localStorage.getItem("TabelaGerada") === null) {
        localStorage.setItem("TabelaGerada", "false");
    }
}

function getBaseUrl() {
    const host = window.location.hostname;

    // Se estiver no GitHub Pages
    if (host.includes("github.io")) {
        return "/Ciclo_Estudos_Site";
    }

    // Se estiver localmente
    return "";
}

function Menu() {

    const BASE_URL = getBaseUrl();

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

                                <a class="nav-link" href="${BASE_URL}/index.html">Início</a>

                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="${BASE_URL}/pages/CriarCiclo.html">Cria seu Cíclo</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="${BASE_URL}/pages/tabelaCiclo.html">Seu Cíclo</a>
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
                                <a class="nav-link" href="${BASE_URL}/index.html">Início</a>
                      </li>

                            <li class="nav-item">
                                <a class="nav-link" href="${BASE_URL}/pages/CriarCiclo.html">Cria seu Cíclo</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link disabled" href="${BASE_URL}/pages/tabelaCiclo.html">Seu Cíclo</a>
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

//O CODIGO ABAIXO FUNCIONA NO LOCALHOST MAS NÃO NO AR
// function initTabelaGerada() {
//   if (localStorage.getItem("TabelaGerada") === null) {
//     localStorage.setItem("TabelaGerada", "false");
//   }
// }

// function Menu() {

//     const BASE_URL = "/Ciclo_Estudos_Site";

//     if (localStorage.getItem('TabelaGerada') === "true") {
//         return `
//             <nav class="navbar navbar-expand-lg bg-primary w-100" data-bs-theme="dark">
//                 <div class="container-fluid">

//                     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span class="navbar-toggler-icon"></span>
//                     </button>

//                     <div class="collapse navbar-collapse" id="navbarSupportedContent">

//                         <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100">
//                             <li class="nav-item">
//                                 <a class="nav-link" href="../index.html">Início</a>
//                             </li>

//                             <li class="nav-item">
//                                 <a class="nav-link" href="../pages/CriarCiclo.html">Cria seu Cíclo</a>
//                             </li>

//                             <li class="nav-item">
//                                 <a class="nav-link" href="../pages/tabelaCiclo.html">Seu Cíclo</a>
//                             </li>

//                         </ul>

//                     </div>
//                 </div>
//             </nav>`;

//     } else {
//          return `
//             <nav class="navbar navbar-expand-lg bg-primary w-100" data-bs-theme="dark">
//                 <div class="container-fluid">

//                     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span class="navbar-toggler-icon"></span>
//                     </button>

//                     <div class="collapse navbar-collapse" id="navbarSupportedContent">

//                         <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100">
//                             <li class="nav-item">
//                                 <a class="nav-link" href="../index.html">Início</a>
//                             </li>

//                             <li class="nav-item">
//                                 <a class="nav-link" href="../pages/CriarCiclo.html">Cria seu Cíclo</a>
//                             </li>

//                             <li class="nav-item">
//                                 <a class="nav-link disabled" href="../pages/tabelaCiclo.html">Seu Cíclo</a>
//                             </li>

//                         </ul>

//                     </div>
//                 </div>
//             </nav>
// `
//     };
// };
