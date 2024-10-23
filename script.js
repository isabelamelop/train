// Função para calcular o total e atualizar a exibição
function updateTotal() {
    const ticketQuantity = document.getElementById("ticket-quantity").value;
    const ticketPrice = 60; // Supondo que o preço inicial seja 60, ajuste conforme necessário
    const totalValue = ticketQuantity * ticketPrice;
    document.getElementById("total-value").innerText = totalValue;
    
    // Atualiza os campos de nome e CPF
    updateGuestInfoFields(ticketQuantity);
}

// Função para atualizar os campos de nome e CPF
function updateGuestInfoFields(quantity) {
    const container = document.getElementById("guest-info-container");
    container.innerHTML = ""; // Limpa os campos existentes

    for (let i = 0; i < quantity; i++) {
        container.innerHTML += `
            <div>
                <label for="guest-name-${i}">Nome Completo do Convidado ${i + 1}:</label>
                <input type="text" id="guest-name-${i}" required>
                
                <label for="guest-cpf-${i}">CPF do Convidado ${i + 1}:</label>
                <input type="text" id="guest-cpf-${i}" required>
            </div>
            <br>
        `;
    }
}

// Função para exibir o link do WhatsApp com informações formatadas
function purchaseTicket() {
    const ticketQuantity = document.getElementById("ticket-quantity").value;
    const totalValue = document.getElementById("total-value").innerText;

    let guestsInfo = '';
    for (let i = 0; i < ticketQuantity; i++) {
        const guestName = document.getElementById(`guest-name-${i}`).value;
        const guestCPF = document.getElementById(`guest-cpf-${i}`).value;
        guestsInfo += `Nome do Convidado ${i + 1}: ${guestName}, CPF: ${guestCPF}\n`;
    }

    const whatsappLink = `https://wa.me/5531997746789?text=Olá, gostaria de finalizar a compra de ingressos.\n${guestsInfo}Vou te mandar o comprovante da compra!\n`;

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

// Função para exibir as informações do evento
function showEventInfo() {
    const eventInfo = document.getElementById("event-info");
    if (eventInfo.style.display === "none") {
        eventInfo.style.display = "block";
    } else {
        eventInfo.style.display = "none";
    }
}
