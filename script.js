function copyPixKey() {
    const pixKey = 'freakynight2024@gmail.com';
    navigator.clipboard.writeText(pixKey).then(() => {
        console.log('Chave Pix copiada: ' + pixKey);
    }).catch(() => {
        console.error('Erro ao copiar a chave Pix.');
    });
}

function updateTotal() {
    const quantity = document.getElementById('ticket-quantity').value;
    const pricePerTicket = 60; // Preço por ingresso
    const totalValue = quantity * pricePerTicket;
    document.getElementById('total-value').innerText = totalValue.toFixed(2);
}


function purchaseTicket() {
    // Pegar a quantidade de ingressos e valor total
    var ticketQuantity = document.getElementById("ticket-quantity").value;
    var totalValue = document.getElementById("total-value").textContent;

    // Preencher a mensagem com as informações
    document.getElementById("message-total-value").textContent = totalValue;
    document.getElementById("message-ticket-quantity").textContent = ticketQuantity;

    // Gerar o link do WhatsApp com as informações para envio
    var whatsappLink = `https://wa.me/5531997746789?text=Olá, gostaria de finalizar a compra de ingressos. Nome completo: \n Documento de identificaçao: \n
    \nChave Pix: freakynight2024@gmail.com
    \nQuantidade de Ingressos: ${ticketQuantity}
    \nValor Total: R$${totalValue}
    \nInformações adicionais: Nome completo e CPF.`;
    document.getElementById("whatsapp-link").href = whatsappLink;

    // Exibir a caixa de mensagem
    var messageBox = document.getElementById("message-box");
    messageBox.style.display = "block";

    // Rolar a página até a caixa de mensagem
    messageBox.scrollIntoView({ behavior: 'smooth' });
}
