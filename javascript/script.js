

async function carregarPagina(pagina) {
    const conteudo = document.getElementById('conteudo');
    try {
        const resposta = await fetch(`./paginas/${pagina}.html`);
        if (!resposta.ok) throw new Error('Página não encontrada');
        const html = await resposta.text();
        conteudo.innerHTML = html;
    } catch (erro) {
        console.error(erro);
        conteudo.innerHTML = `<h1>Erro</h1><p>Não foi possível carregar a página <strong>${pagina}</strong>.</p>`;
    }
}

function carregarRota() {
    const rota = location.hash.slice(1) || 'reservas';
    carregarPagina(rota);
}

window.addEventListener('hashchange', carregarRota);
window.addEventListener('load', carregarRota);

