function gerarId() {
    return Date.now();  
}

window.onload = function() {
    const usuarios = JSON.parse(localStorage.getItem('pets')) || [];

    const tabela = document.getElementById('tabela-pets').getElementsByTagName('table')[0];

    usuarios.forEach(pet => {
        const novaLinha = tabela.insertRow();
        novaLinha.innerHTML = `
            <td> ${gerarId()} </td>
            <td>${pet.nome}</td>
            <td>${pet.tipo}</td>
            <td>${pet.raca}</td>
            <td>${pet.tamanho}</td>
            <td><a href="editar-pet.html">editar</a></td>
            <td><a href="ver-pet.html">visualizar</a></td>
        `;
    });
};
