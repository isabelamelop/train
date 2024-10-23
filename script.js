// Função para calcular o total e atualizar a exibição
function updateTotal() {
    const ticketQuantity = document.getElementById("ticket-quantity").value;
    const ticketPrice = 60; // Supondo que o preço inicial seja 60, ajuste conforme necessário
    const totalValue = ticketQuantity * ticketPrice;
    document.getElementById("total-value").innerText = totalValue;

    // Exibir campos de nome e CPF conforme a quantidade de ingressos
    const nameCpfContainer = document.getElementById("name-cpf-container");
    nameCpfContainer.innerHTML = ""; // Limpa o container

    for (let i = 0; i < ticketQuantity; i++) {
        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.placeholder = "Nome Completo";
        nameInput.classList.add("name-input");

        const cpfInput = document.createElement("input");
        cpfInput.type = "text";
        cpfInput.placeholder = "CPF (apenas números)";
        cpfInput.classList.add("cpf-input");

        nameCpfContainer.appendChild(nameInput);
        nameCpfContainer.appendChild(cpfInput);
    }
}

// Função para exibir o link do WhatsApp com informações formatadas
function purchaseTicket() {
    const ticketQuantity = document.getElementById("ticket-quantity").value;
    const totalValue = document.getElementById("total-value").innerText;

    // Obter os nomes e CPFs
    const names = Array.from(document.getElementsByClassName("name-input")).map(input => input.value);
    const cpfs = Array.from(document.getElementsByClassName("cpf-input")).map(input => input.value);

    // Verificação se todos os campos estão preenchidos
    if (names.some(name => name === "") || cpfs.some(cpf => cpf === "")) {
        alert("Por favor,
