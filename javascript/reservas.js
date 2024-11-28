document.addEventListener("DOMContentLoaded", () => {
    // Seleciona os elementos do formulário
    const inputId = document.querySelector("#id");
    const inputProprietario = document.querySelector("#proprietario");
    const inputPet = document.querySelector("#pet");
    const selectStatus = document.querySelector("#status");
    const searchButton = document.querySelector("button[type='button']"); // Botão Pesquisar
    const table = document.querySelector("#tabela"); // Tabela completa
    const tableRows = document.querySelectorAll("#tabela table tr:not(:first-child)"); // Linhas da tabela, exceto o cabeçalho

    // Função para filtrar a tabela
    const filterTable = () => {
        let hasVisibleRows = false; // Flag para verificar se há resultados visíveis

        tableRows.forEach((row) => {
            const columns = row.querySelectorAll("td");

            // Valores das colunas da tabela
            const idValue = columns[0]?.textContent.trim().toLowerCase();
            const petValue = columns[1]?.textContent.trim().toLowerCase();
            const statusValue = columns[4]?.textContent.trim().toLowerCase();

            // Valores digitados pelo usuário
            const filterId = inputId.value.trim().toLowerCase();
            const filterProprietario = inputProprietario.value.trim().toLowerCase(); // Placeholder (ajuste caso necessário)
            const filterPet = inputPet.value.trim().toLowerCase();
            const filterStatus = selectStatus.value.trim().toLowerCase();

            // Verifica se a linha corresponde aos filtros
            const matchId = !filterId || idValue.includes(filterId);
            const matchProprietario = !filterProprietario; // Ajustar caso necessário buscar por proprietário
            const matchPet = !filterPet || petValue.includes(filterPet);
            const matchStatus = !filterStatus || statusValue.includes(filterStatus);

            // Exibe ou oculta a linha
            if (matchId && matchProprietario && matchPet && matchStatus) {
                row.style.display = "";
                hasVisibleRows = true; // Indica que há resultados
            } else {
                row.style.display = "none";
            }
        });

        // Exibe ou oculta a tabela inteira
        table.style.display = hasVisibleRows ? "block" : "none";
    };

    // Adiciona evento para o botão de pesquisa
    searchButton.addEventListener("click", (e) => {
        e.preventDefault(); // Evita comportamento padrão do botão
        filterTable();
    });

    // Oculta a tabela inicialmente
    table.style.display = "none";
});
