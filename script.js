function criaUsuario() {
    const email = document.getElementById('email').value.trim();
    const nome = document.getElementById('nome').value.trim();
    const sobrenome = document.getElementById('sobrenome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const funcao = document.getElementById('funcao').value.trim();

    if (!email || !nome || !sobrenome || !telefone || !funcao) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    localStorage.setItem('usuario', JSON.stringify(usuario));
    window.location.href = 'usuario.html';

    const dataAtual = new Date();
    const dataFormatada = `${String(dataAtual.getDate()).padStart(2, '0')}/${String(dataAtual.getMonth() + 1).padStart(2, '0')}/${dataAtual.getFullYear()}`;

    const tabelaBody = document.querySelector('#tabela-usuarios tbody');
    const novaLinha = document.createElement('tr');

    novaLinha.innerHTML = `
        <td>${email}</td>
        <td>${nome} ${sobrenome}</td>
        <td>${funcao}</td>
        <td>Ativo</td>
        <td>${dataFormatada}</td>
        <td><a href="#">Editar</a></td>
        <td><a href="#">Visualizar</a></td>
    `;

    tabelaBody.appendChild(novaLinha);

    alert('Usuário cadastrado com sucesso!');

    document.getElementById('form-coluna1').reset();
    document.getElementById('form-coluna2').reset();
}
