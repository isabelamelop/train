// Função para calcular o total e atualizar a exibição
function updateTotal() {
    const ticketQuantity = document.getElementById("ticket-quantity").value;
    const ticketPrice = 60; // Supondo que o preço inicial seja 60, ajuste conforme necessário
    const totalValue = ticketQuantity * ticketPrice;
    document.getElementById("total-value").innerText = totalValue;

    // Mostra os campos de nome e CPF com base na quantidade de ingressos
    toggleNameCpfFields(ticketQuantity);
}

// Função para exibir ou ocultar os campos de nome e CPF
function toggleNameCpfFields(quantity) {
    const nameCpfContainer = document.getElementById("name-cpf-container");
    nameCpfContainer.innerHTML = ''; // Limpa os campos existentes

    for (let i = 0; i < quantity; i++) {
        nameCpfContainer.innerHTML += `
            <label for="name-${i}">Nome Completo ${i + 1}:</label>
            <input type="text" id="name-${i}" class="name-input" required>
            <label for="cpf-${i}">CPF ${i + 1}:</label>
            <input type="text" id="cpf-${i}" class="cpf-input" required>
            <br>
        `;
    }
}

// Função para validar CPF
function isValidCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
    if (cpf.length !== 11) return false;

    let sum = 0;
    let remainder;

    for (let i = 1; i <= 9; i++) {
        sum += parseInt(cpf[i - 1]) * (11 - i);
    }
    remainder = (sum * 10) % 11;

    if (remainder === 10 || remainder === 11) {
        remainder = 0;
    }
    if (remainder !== parseInt(cpf[9])) {
        return false;
    }

    sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += parseInt(cpf[i - 1]) * (12 - i);
    }
    remainder = (sum * 10) % 11;

    if (remainder === 10 || remainder === 11) {
        remainder = 0;
    }
    return remainder === parseInt(cpf[10]);
}

// Função para exibir o link do WhatsApp com informações formatadas
function purchaseTicket() {
    const ticketQuantity = document.getElementById("ticket-quantity").value;
    const totalValue = document.getElementById("total-value").innerText;

    let message = `Olá, gostaria de finalizar a compra de ingressos.\n`;

    for (let i = 0; i < ticketQuantity; i++) {
        const name = document.getElementById(`name-${i}`).value;
        const cpf = document.getElementById(`cpf-${i}`).value;

        // Valida o CPF
        if (!isValidCPF(cpf)) {
            alert(`O CPF ${cpf} é inválido! Por favor, insira um CPF válido.`);
            return;
        }

        message += `Nome Completo: ${name}\nCPF: ${cpf}\n`;
    }

    const whatsappLink = `https://wa.me/5531997746789?text=${encodeURIComponent(message)}`;
    
    // Atualiza o conteúdo da caixa de mensagem com quebra de linha
    document.getElementById("message-box").innerHTML = `
        Para finalizar a compra, envie o comprovante para o WhatsApp:
        <br><br>
        - Chave Pix: freakynight2024@gmail.com<br>
        - Quantidade de Ingressos: ${ticketQuantity}<br>
        - Valor total: R$${totalValue}<br><br>
        <strong><a href="${whatsappLink}" target="_blank">Clique aqui para enviar</a></strong>
    `;

    // Exibe a caixa de mensagem e rola até ela
    document.getElementById("message-box").style.display = 'block';
    document.getElementById("message-box").scrollIntoView({ behavior: 'smooth' });
}

// Função para exibir informações sobre o evento
function showEventInfo() {
    const eventInfo = document.getElementById("event-info");
    if (eventInfo.style.display === "none") {
        eventInfo.style.display = "block";
    } else {
        eventInfo.style.display = "none";
    }
}
