// Função para calcular o total e atualizar a exibição
function updateTotal() {
    const ticketQuantity = document.getElementById("ticket-quantity").value;
    const ticketPrice = 60; // Preço fixo
    const totalValue = ticketQuantity * ticketPrice;
    document.getElementById("total-value").innerText = totalValue;
    updateBuyerFields(ticketQuantity); // Atualiza os campos de comprador
}

// Função para atualizar os campos de comprador
function updateBuyerFields(quantity) {
    const buyer2Fields = document.getElementById("buyer2-fields");
    if (quantity == 2) {
        buyer2Fields.style.display = "block";
    } else {
        buyer2Fields.style.display = "none";
    }
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
    const guestName1 = document.getElementById("guest-name1").value;
    const guestCPF1 = document.getElementById("guest-cpf1").value;
    const guestName2 = quantity == 2 ? document.getElementById("guest-name2").value : '';
    const guestCPF2 = quantity == 2 ? document.getElementById("guest-cpf2").value : '';
    const messageBox = document.getElementById("message-box");
    
    // Validação do CPF
    if (!isValidCPF(guestCPF1) || (quantity == 2 && !isValidCPF(guestCPF2))) {
        messageBox.style.display = "block";
        messageBox.innerText = "CPF inválido. Por favor, digite um CPF válido.";
        return;
    }
    
    // Se o CPF for válido
const totalValue = document.getElementById("total-value").innerText;
const whatsappLink = `https://wa.me/5531997746789?text=Olá, gostaria de finalizar a compra do(s) ingresso(s).%0A%0A*Nome Completo 1:* ${guestName1}%0A*CPF 1:* ${guestCPF1}%0A${quantity == 2 ? `*Nome Completo 2:* ${guestName2}%0A*CPF 2:* ${guestCPF2}%0A` : ''}*Quantidade de Ingressos:* ${quantity}%0A*Valor Total:* R$${totalValue}%0A%0AVou enviar o comprovante.`;

messageBox.style.display = "block";
messageBox.innerHTML = `Chave PIX: freakynight2024@gmail.com<br>Para finalizar a compra, envie o comprovante para o WhatsApp:<br><br><strong><a href="${whatsappLink}" target="_blank">Clique aqui para enviar</a></strong>`;
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
