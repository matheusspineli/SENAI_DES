const modalCli = document.querySelector("#modalCli");

var filmes = JSON.parse(localStorage.getItem("filmes")) || [];

renderizarTabela();

function salvarLocal() {
    localStorage.setItem("filmes", JSON.stringify(filmes));
}

function abrirModal() {
    modalCli.style.display = "block";
}

function fecharModal() {
    modalCli.style.display = "none";
}

const formCli = document.querySelector("#formCli");

formCli.addEventListener("submit", e => {
    e.preventDefault();

    const obj = {
        nome: formCli.nome.value,
        capa: formCli.capa.value,
        genero: formCli.genero.value,
        autor: formCli.autor.value,
        lancamento: formCli.lancamento.value
    };

    filmes.push(obj);

    salvarLocal();
    renderizarTabela();
    fecharModal();
    formCli.reset();
});

function renderizarTabela() {
    const corpo = document.querySelector("#dados");
    corpo.innerHTML = "";

    filmes.forEach((c, i) => {
        corpo.innerHTML += `
        <tr>
            <td>${c.nome}</td>
            <td>
            <img src ="${c.capa}" width"60">
            </td>
            <td>${c.genero}</td>
            <td>${c.autor}</td>
            <td>${c.lancamento}</td>
            <td><button onclick="excluir(${i})">Excluir</button></td>
        </tr>
        `;
    });
}

function excluir(indice) {
    filmes.splice(indice, 1);
    salvarLocal();
    renderizarTabela();
}

function filtrarNome() {
    const filtro = document.querySelector("#filtroNome").value.toLowerCase();
    const corpo = document.querySelector("#dados");

    corpo.innerHTML = "";

    filmes.forEach((c, i) => {
        if (c.genero.toLowerCase().includes(filtro)) {
            corpo.innerHTML += `
            <tr>
                <td>${c.nome}</td>
                <td><img src ="${c.capa}"</td>                 
                <td>${c.genero}</td>
                <td>${c.autor}</td>
                <td>${c.lancamento}</td>
                <td><button onclick="excluir(${i})">Excluir</button></td>
            </tr>
            `;
        }
    });
}