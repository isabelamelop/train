// Data atual para verificação de lotes
const today = new Date('2024-10-24');

// Função para calcular o preço do ingresso com base na data atual
function getTicketPrice() {
    const preSaleEnd = new Date('2024-10-19');
    const firstLotEnd = new Date('2024-10-24');
    const secondLotEnd = new Date('2024-10-30');
    const thirdLotEnd = new Date('2024-11-07');

    if (today <= preSaleEnd) {
        return 50; // Pré Lote
    } else if (today < firstLotEnd) {
        return 60; // 1° Lote
    } else if (today < secondLotEnd) {
        return 75; // 2° Lote
    } else if (today < thirdLotEnd) {
        return 80; // 3° Lote
    } else {
        return 0; // Lote esgotado
    }
}

// Função para atualizar o valor total
function updateTotal() {
    const ticketQuantity = document.getElementById("ticket-quantity").value;
    const ticketPrice = getTicketPrice(); // Obter o preço com base na data
    const totalValue = ticketQuantity * ticketPrice;
    document.getElementById("total-value").innerText = totalValue;
    updateBuyerFields(ticketQuantity); // Atualiza os campos de comprador
}

// Função para atualizar os campos de comprador
function updateBuyerFields(quantity) {
    const buyer2Fields = document.getElementById("buyer2-fields");
    buyer2Fields.style.display = quantity == 2 ? "block" : "none";
}

// Função para validar nome completo
function isValidName(name) {
    const nameParts = name.trim().split(" ");
    return nameParts.length >= 2 && nameParts[1] !== "";
}

// Função para validar CPF (aceita formatos com e sem símbolos)
function isValidCPF(cpf) {
    // Remove pontos, traços e espaços do CPF
    const cleanCPF = cpf.replace(/[.\-]/g, '');
    return cleanCPF.length === 11; // Simples validação
}

// Função para concluir a compra
function purchaseTicket() {
    const quantity = document.getElementById("ticket-quantity").value;
    const guestName1 = document.getElementById("guest-name1").value;
    const guestCPF1 = document.getElementById("guest-cpf1").value;
    const guestName2 = quantity == 2 ? document.getElementById("guest-name2").value : '';
    const guestCPF2 = quantity == 2 ? document.getElementById("guest-cpf2").value : '';
    const messageBox = document.getElementById("message-box");

    // Validação do nome completo
    if (!isValidName(guestName1)) {
        messageBox.style.display = "block";
        messageBox.innerText = "Por favor, insira o Nome Completo (nome e sobrenome).";
        return;
    }
    
    if (quantity == 2 && !isValidName(guestName2)) {
        messageBox.style.display = "block";
        messageBox.innerText = "Por favor, insira o Nome Completo (nome e sobrenome).";
        return;
    }
    
    // Validação do CPF
    if (!isValidCPF(guestCPF1)) {
        messageBox.style.display = "block";
        messageBox.innerText = "CPF 1 inválido. Por favor, digite um CPF válido.";
        return;
    }

    if (quantity == 2 && !isValidCPF(guestCPF2)) {
        messageBox.style.display = "block";
        messageBox.innerText = "CPF 2 inválido. Por favor, digite um CPF válido.";
        return;
    }

    // Se os CPFs e os nomes forem válidos
    const totalValue = document.getElementById("total-value").innerText;
    const whatsappLink = `https://wa.me/5531997746789?text=Olá, gostaria de finalizar a compra do(s) ingresso(s).%0A%0A*Nome Completo:* ${guestName1}%0A*CPF:* ${guestCPF1}%0A${quantity == 2 ? `%0A*Nome Completo:* ${guestName2}%0A*CPF:* ${guestCPF2}%0A` : ''}%0A*Quantidade de Ingressos:* ${quantity}%0A%0A*Valor Total:* R$${totalValue}%0A%0AVou enviar o comprovante.`;

    messageBox.style.display = "block";
    messageBox.innerHTML = `Chave PIX: freakynight2024@gmail.com<br>Para finalizar a compra, envie o comprovante para o WhatsApp:<br><br><strong><a href="${whatsappLink}" target="_blank">Clique aqui para enviar</a></strong>`;
}

// Função para exibir informações sobre o evento
function showEventInfo() {
    const eventInfo = document.getElementById("event-info");
    eventInfo.style.display = eventInfo.style.display === "none" ? "block" : "none";
}

// Atualiza o preço total ao carregar a página
updateTotal();
