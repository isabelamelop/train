// Função para calcular o total e atualizar a exibição
function updateTotal() {
    const ticketQuantity = document.getElementById("ticket-quantity").value;
    const ticketPrice = calculateTicketPrice(ticketQuantity);
    const totalValue = ticketQuantity * ticketPrice;
    document.getElementById("total-value").innerText = totalValue;

    // Atualizar informações do convidado
    document.getElementById("guest-info").innerHTML = `
        <label for="guest-name">Nome:</label>
        <input type="text" id="guest-name" placeholder="Digite seu nome" required>
        <label for="guest-cpf">CPF:</label>
        <input type="text" id="guest-cpf" placeholder="Digite seu CPF" required>
    `;
}

// Função para calcular o preço do ingresso baseado no lote
function calculateTicketPrice(quantity) {
    const currentDate = new Date();
    const dateString = currentDate.toLocaleDateString("pt-BR", {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    
    // Preço dos ingressos conforme o lote
    if (currentDate < new Date('2024-10-20')) {
        return 50; // Pré Lote
    } else if (currentDate < new Date('2024-10-25')) {
        return 60; // 1° Lote
    } else if (currentDate < new Date('2024-10-31')) {
        return 75; // 2° Lote
    } else if (currentDate < new Date('2024-11-08')) {
        return 80; // 3° Lote
    } else {
        return 80; // Após o último lote
    }
}

// Função para concluir a compra
function purchaseTicket() {
    const guestName = document.getElementById("guest-name").value;
    const guestCpf = document.getElementById("guest-cpf").value;
    const totalValue = document.getElementById("total-value").innerText;

    if (!guestName || !guestCpf) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    document.getElementById("message-box").innerText = 
        `Compra concluída! Nome: ${guestName}, CPF: ${guestCpf}, Total: R$${totalValue}`;
    document.getElementById("message-box").style.display = "block";
}

// Função para mostrar informações do evento
function showEventInfo() {
    const eventInfo = document.getElementById("event-info");
    eventInfo.style.display = eventInfo.style.display === "none" ? "block" : "none";
}
