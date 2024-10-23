// Função para calcular o total e atualizar a exibição
function updateTotal() {
    const ticketQuantity = document.getElementById("ticket-quantity").value;
    let ticketPrice = 0;

    // Definir preço com base na data atual
    const today = new Date();
    const currentDate = today.getDate();
    const currentMonth = today.getMonth(); // Janeiro é 0, então 9 é outubro
    const currentYear = today.getFullYear();
    const currentFullDate = new Date(currentYear, currentMonth, currentDate);

    // Definir os preços de acordo com as datas
    if (currentFullDate <= new Date(currentYear, 9, 19)) { // até 19/10
        ticketPrice = 50;
    } else if (currentFullDate <= new Date(currentYear, 9, 24)) { // até 24/10
        ticketPrice = 60;
    } else if (currentFullDate <= new Date(currentYear, 9, 30)) { // até 30/10
        ticketPrice = 75;
    } else if (currentFullDate <= new Date(currentYear, 10, 7)) { // até 07/11
        ticketPrice = 80;
    } else {
        alert("Os ingressos não estão mais disponíveis.");
        return;
    }

    const totalValue = ticketQuantity * ticketPrice;
    document.getElementById("total-value").innerText = totalValue;
}

// Função para exibir o link do WhatsApp com informações formatadas
function purchaseTicket() {
    const ticketQuantity = document.getElementById("ticket-quantity").value;
    const totalValue = document.getElementById("total-value").innerText;
    const fullName = document.getElementById("full-name").value;
    const cpf = document.getElementById("cpf").value;

    if (fullName === "" || cpf === "") {
        alert("Por favor, preencha seu nome completo e CPF.");
        return;
    }

    const whatsappLink = `https://wa.me/5531997746789?text=Olá, gostaria de finalizar a compra de ingressos.%0A
    - Nome completo: ${fullName}%0A
    - CPF: ${cpf}%0A
    - Quantidade de Ingressos: ${ticketQuantity}%0A
    - Valor Total: R$${totalValue}%0A
    Vou te mandar o comprovante da compra!`;

    // Atualiza o conteúdo da caixa de mensagem com quebra de linha
    document.getElementById("message-box").innerHTML = `
        Para finalizar a compra, envie o comprovante para o WhatsApp:
        <br><br>
        - Nome completo: ${fullName}<br>
        - CPF: ${cpf}<br>
        - Quantidade de Ingressos: ${ticketQuantity}<br>
        - Valor total: R$${totalValue}<br><br>
        <strong><a href="${whatsappLink}" target="_blank">Clique aqui para enviar</a></strong>
    `;

    // Exibe a caixa de mensagem e rola até ela
    document.getElementById("message-box").style.display = 'block';
    document.getElementById("message-box").scrollIntoView({ behavior: 'smooth' });
}
