window.onload = function() {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const tabela = document.getElementById('tabela-usuarios').getElementsByTagName('tbody')[0];

    usuarios.forEach(usuario => {
        const novaLinha = tabela.insertRow();
        novaLinha.innerHTML = `
            <td>${usuario.email}</td>
            <td>${usuario.nome}</td>
            <td>${usuario.sobrenome}</td>
            <td>${usuario.telefone}</td>
            <td>${usuario.funcao}</td>
            <td>${usuario.dataCadastro}</td>
            <td>${usuario.foto ? usuario.foto : 'Sem foto'}</td>
        `;
    });
};
