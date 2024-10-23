// Função para calcular o total e atualizar a exibição
function updateTotal() {
    const ticketQuantity = document.getElementById("ticket-quantity").value;
    const ticketPrice = 60; // Supondo que o preço inicial seja 60, ajuste conforme necessário
    const totalValue = ticketQuantity * ticketPrice;
    document.getElementById("total-value").innerText = totalValue;
    updateGuestInfoFields(ticketQuantity); // Atualiza os campos de nome e CPF
}

// Função para atualizar campos de nome e CPF com base na quantidade de ingressos
function updateGuestInfoFields(quantity) {
    const guestInfoDiv = document.getElementById("guest-info");
    guestInfoDiv.innerHTML = ""; // Limpa os campos anteriores
    for (let i = 0; i < quantity; i++) {
        guestInfoDiv.innerHTML += `
            <div>
                <label for="guest-name-${i}">Nome Completo do Convidado ${i + 1}:</label>
                <input type="text" id="guest-name-${i}" class="guest-name" required>
                <label for="guest-cpf-${i}">CPF do Convidado ${i + 1}:</label>
                <input type="text" id="guest-cpf-${i}" class="guest-cpf" maxlength="11" required>
                <br>
            </div>
        `;
    }
}

// Função para exibir o link do WhatsApp com informações formatadas
function purchaseTicket() {
    const ticketQuantity = document.getElementById("ticket-quantity").value;
    const totalValue = document.getElementById("total-value").innerText;

    const guestNames = [];
    const guestCps = [];
    for (let i = 0; i < ticketQuantity; i++) {
        guestNames.push(document.getElementById(`guest-name-${i}`).value);
        guestCps.push(document.getElementById(`guest-cpf-${i}`).value);
    }

    const whatsappLink = `https://wa.me/5531997746789?text=Olá, gostaria de finalizar a compra de ingressos.
    \nNome Completo: ${guestNames.join(', ')}
    \nCPF: ${guestCps.join(', ')}
    \nChave Pix: freakynight2024@gmail.com
    \nQuantidade de Ingressos: ${ticketQuantity}
    \nValor Total: R$${totalValue}
    \nInformações adicionais: Nome completo e CPF.`;

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
