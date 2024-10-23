// Função para calcular o total e atualizar a exibição
function updateTotal() {
    const ticketQuantity = document.getElementById("ticket-quantity").value;
    const ticketPrice = 60; // Preço fixo
    const totalValue = ticketQuantity * ticketPrice;
    document.getElementById("total-value").innerText = totalValue;
}

// Função para validar CPF
function isValidCPF(cpf) {
    cpf = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (cpf.length !== 11) return false;

    let sum = 0;
    let remainder;

    // Verificação do primeiro dígito verificador
    for (let i = 1; i <= 9; i++) {
        sum += parseInt(cpf[i - 1]) * (11 - i);
    }
    remainder = (sum * 10) % 11;

    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf[9])) return false;

    sum = 0;
    // Verificação do segundo dígito verificador
    for (let i = 1; i <= 10; i++) {
        sum += parseInt(cpf[i - 1]) * (12 - i);
    }
    remainder = (sum * 10) % 11;

    if (remainder === 10 || remainder === 11) remainder = 0;
    return remainder === parseInt(cpf[10]);
}

// Função para concluir a compra
function purchaseTicket() {
    const quantity = document.getElementById("ticket-quantity").value;
    const guestName = document.getElementById("guest-name").value;
    const guestCPF = document.getElementById("guest-cpf").value;
    const messageBox = document.getElementById("message-box");
    
    // Validação do CPF
    if (!isValidCPF(guestCPF)) {
        messageBox.style.display = "block";
        messageBox.innerText = "CPF inválido. Por favor, digite um CPF válido.";
        return;
    }

    // Se o CPF for válido
    const totalValue = document.getElementById("total-value").innerText;
    const whatsappLink = `https://wa.me/5531997746789?text=Olá, gostaria de finalizar a compra de ingressos.%0ANome Completo: ${guestName}%0ACPF: ${guestCPF}%0AQuantidade de Ingressos: ${quantity}%0AValor Total: R$${totalValue}`;

    messageBox.style.display = "block";
    messageBox.innerHTML = `
        Para finalizar a compra, envie o comprovante para o WhatsApp:<br><br>
        <strong><a href="${whatsappLink}" target="_blank">Clique aqui para enviar</a></strong>
    `;
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
