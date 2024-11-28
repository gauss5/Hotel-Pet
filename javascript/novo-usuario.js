document.getElementById('form-coluna2').addEventListener('submit', function(event) {
    event.preventDefault(); 


    const email = document.getElementById('email').value.trim();
    const nome = document.getElementById('nome').value.trim();
    const sobrenome = document.getElementById('sobrenome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const funcao = document.getElementById('funcao').value;
    const foto = document.getElementById('foto').files[0]; 

    
    if (!email || !nome || !sobrenome || !telefone || !funcao) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    
    const usuario = {
        email: email,
        nome: nome,
        sobrenome: sobrenome,
        telefone: telefone,
        funcao: funcao,
        foto: foto ? foto.name : null, 
        dataCadastro: new Date().toLocaleString() 
    };


    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []; 
    usuarios.push(usuario); 
    localStorage.setItem('usuarios', JSON.stringify(usuarios)); 

    alert('Usuário cadastrado com sucesso!');

    document.getElementById('form-coluna1').reset();
    document.getElementById('form-coluna2').reset();
});
