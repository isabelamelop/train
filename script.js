// script.js

// Função para obter o valor do lote baseado na data atual
function getCurrentLote() {
    const today = new Date("2024-10-23");
    let price = 60; // Valor padrão do 1° lote

    if (today >= new Date("2024-10-18") && today <= new Date("2024-10-19")) {
        price = 50; // Pré-lote
    } else if (today >= new Date("2024-10-20") && today <= new Date("2024-10-24")) {
        price = 60; // 1° lote
    } else if (today >= new Date("2024-10-25") && today <= new Date("2024-10-30")) {
        price = 75; // 2° lote
    } else if (today >= new Date("2024-10-31") && today <= new Date("2024-11-07")) {
        price = 80; // 3° lote
    }

    return price;
}

// Função para calcular o total e atualizar a exibição
function updateTotal() {
    const ticketQuantity = document.getElementById("ticket-quantity").value;
    const ticketPrice = getCurrentLote(); // Obtém o preço atual do lote
    const totalValue = ticketQuantity * ticketPrice;
    document.getElementById("total-value").innerText = totalValue;
    updateBuyerFields(ticketQuantity); // Atualiza os campos de comprador
}

// Função para atualizar os campos de comprador
function updateBuyerFields(quantity) {
    const buyer2Fields = document.getElementById("buyer2-fields");
    buyer2Fields.style.display = quantity == 2 ? "block" : "none";
}

// Função para validar nome completo (nome e sobrenome)
function isValidName(name) {
    const nameParts = name.trim().split(" ");
    return nameParts.length >= 2 && nameParts[1] !== ""; // Verifica se há pelo menos duas palavras e a segunda não está vazia
}

// Função para validar CPF
function isValidCPF(cpf) {
    // Implementação simples de validação de CPF (só para fins de exemplo)
    return cpf.length === 14; // Exemplo: CPF deve ter 14 caracteres no formato XXX.XXX.XXX-XX
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
        messageBox.innerText = "Por favor, insira o Nome Completo 1 (nome e sobrenome).";
        return;
    }
    
    if (quantity == 2 && !isValidName(guestName2)) {
        messageBox.style.display = "block";
        messageBox.innerText = "Por favor, insira o Nome Completo 2 (nome e sobrenome).";
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
    const whatsappLink = `https://wa.me/5531997746789?text=Olá, gostaria de finalizar a compra do(s) ingresso(s).%0A%0A*Nome Completo 1:* ${guestName1}%0A*CPF 1:* ${guestCPF1}%0A${quantity == 2 ? `%0A*Nome Completo 2:* ${guestName2}%0A*CPF 2:* ${guestCPF2}%0A` : ''}%0A*Quantidade de Ingressos:* ${quantity}%0A%0A*Valor Total:* R$${totalValue}%0A%0AVou enviar o comprovante.`;

    messageBox.style.display = "block";
    messageBox.innerHTML = `Chave PIX: freakynight2024@gmail.com<br>Para finalizar a compra, envie o comprovante para o WhatsApp:<br><br><strong><a href="${whatsappLink}" target="_blank">Clique aqui para enviar</a></strong>`;
}

// Função para exibir informações sobre o evento
function showEventInfo() {
    const eventInfo = document.getElementById("event-info");
    eventInfo.style.display = eventInfo.style.display === "none" ? "block" : "none";
}
