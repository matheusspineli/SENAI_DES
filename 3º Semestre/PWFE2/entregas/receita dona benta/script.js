const url = 'https://receitasapi-b-2025.vercel.app';
const receitas = [];

carregarReceitas();

function carregarReceitas() {
    fetch(url + '/receitas')
        .then(response => response.json())
        .then(data => {
            receitas.push(...data);
        })
        .then(() => listarCards())
        .catch(e => alert('Problemas com a conexão com a API'));
}

function listarCards() {
    const container = document.querySelector('main');
    container.innerHTML = '';

    receitas.forEach(receita => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${receita.img}" alt="${receita.nome}">
            <h3>${receita.nome}</h3>

            <div class="conteudo">
                <p><strong>Ingredientes:</strong><br> ${receita.ingredientes}</p>
                <p><strong>Modo de preparo:</strong><br> ${receita.modoFazer}</p>
            </div>

            <p><strong>Custo:</strong> R$ ${Number(receita.custoAproximado).toFixed(2)}</p>
        `;

        container.appendChild(card);
    });
}

const formCad = document.getElementById('formCad');

formCad.addEventListener('submit', function (event) {
    event.preventDefault();

    const dados = {
        nome: formCad.nome.value,
        ingredientes: formCad.ingredientes.value,
        modoFazer: formCad.modoFazer.value,
        img: formCad.urlImagem.value,
        custoAproximado: formCad.custoAproximado.value
    };

    fetch(url + '/receitas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(res => res.json())
    .then(() => {
        receitas.push(dados);
        listarCards();

        formCad.reset();
        cadastro.classList.add('oculto');
    })
    .catch(() => alert('Erro ao cadastrar receita'));
});