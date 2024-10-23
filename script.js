// Atualiza o valor total com base na quantidade de ingressos selecionada
function updateTotal() {
    var ticketQuantity = document.getElementById("ticket-quantity").value;
    var totalValue = 60 * ticketQuantity; // Multiplica a quantidade pelo valor do ingresso (1º lote: R$60)
    document.getElementById("total-value").innerText = totalValue;
}

// Finaliza a compra e gera a mensagem de WhatsApp
function purchaseTicket() {
    var ticketQuantity = document.getElementById("ticket-quantity").value;
    var totalValue = document.getElementById("total-value").innerText;

    // Mostra a caixa de mensagem para o usuário
    var messageBox = document.getElementById("message-box");
    messageBox.style.display = "block";
    messageBox.innerHTML = `
        <p>Para finalizar a compra, envie o comprovante para o WhatsApp com as seguintes informações:</p>
        <p>- Chave Pix: freakynight2024@gmail.com</p>
        <p>- Valor total: R$${totalValue}</p>
        <p><strong>Clique aqui para enviar:</strong> <a id="whatsapp-link" href="#">Enviar via WhatsApp</a></p>
        <p><strong>Informações adicionais:</strong> Envie também o nome completo e o CPF.</p>
    `;

    // Atualiza o link de WhatsApp com as informações
    var whatsappLink = `https://wa.me/5531997746789?text=Olá, gostaria de finalizar a compra de ingressos.
    \nChave Pix: freakynight2024@gmail.com
    \nQuantidade de Ingressos: ${ticketQuantity}
    \nValor Total: R$${totalValue}
    \nInformações adicionais: Nome completo e CPF.`;
    
    document.getElementById("whatsapp-link").href = whatsappLink;

    // Rola automaticamente para a caixa de mensagem
    messageBox.scrollIntoView({ behavior: "smooth" });
}

// Função para mostrar ou esconder informações sobre o evento
function showEventInfo() {
    var infoBox = document.getElementById("event-info");
    if (infoBox.style.display === "none") {
        infoBox.style.display = "block";
    } else {
        infoBox.style.display = "none";
    }
}
