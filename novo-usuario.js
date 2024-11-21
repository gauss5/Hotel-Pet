document.getElementById('form-coluna2').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário (recarregamento da página)

    // Coleta os dados dos campos do formulário
    const email = document.getElementById('email').value.trim();
    const nome = document.getElementById('nome').value.trim();
    const sobrenome = document.getElementById('sobrenome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const funcao = document.getElementById('funcao').value;
    const foto = document.getElementById('foto').files[0]; // Captura o arquivo da foto (se existir)

    // Verifica se todos os campos obrigatórios foram preenchidos
    if (!email || !nome || !sobrenome || !telefone || !funcao) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Cria um objeto com os dados do usuário
    const usuario = {
        email: email,
        nome: nome,
        sobrenome: sobrenome,
        telefone: telefone,
        funcao: funcao,
        foto: foto ? foto.name : null, // Salva o nome do arquivo da foto, se houver
        dataCadastro: new Date().toLocaleString() // Armazena a data de cadastro
    };

    // Armazena o usuário no localStorage
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []; // Obtém os usuários já cadastrados
    usuarios.push(usuario); // Adiciona o novo usuário
    localStorage.setItem('usuarios', JSON.stringify(usuarios)); // Armazena novamente no localStorage

    // Exibe um alerta de sucesso
    alert('Usuário cadastrado com sucesso!');

    // Limpa os campos do formulário
    document.getElementById('form-coluna1').reset();
    document.getElementById('form-coluna2').reset();
});
