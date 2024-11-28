document.getElementById('form-coluna2').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
   
    const nome = document.getElementById('nome').value.trim();
    const tipo = document.getElementById('tipo').value.trim();
    const raca = document.getElementById('raca').value.trim();
    const tamanho = document.getElementById('tamanho').value.trim();
    const foto = document.getElementById('foto').files[0]; 

    if (!nome || !tipo || !raca || !tamanho) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    
    const pet = {
        nome: nome,
        tipo: tipo,
        raca: raca, 
        tamanho: tamanho,
        foto: foto ? foto.name : null, 
        dataCadastro: new Date().toLocaleString()
    };

   
    let pets = JSON.parse(localStorage.getItem('pets')) || []; 
    pets.push(pet); 
    localStorage.setItem('pets', JSON.stringify(pets)); 


    alert('Pet cadastrado com sucesso!');

    document.getElementById('form-coluna1').reset();
    document.getElementById('form-coluna2').reset();
});