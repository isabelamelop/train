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
    const quantity = document.getElementById('ticket-quantity').value;
    const totalValue = (quantity * 60).toFixed(2); // Calcula o valor total
    const pixKey = 'freakynight2024@gmail.com'; // Chave Pix
    const whatsappLink = 'https://wa.me/+5531997746789'; // Link do WhatsApp
    const message = `
Para finalizar a compra de ${quantity} ingresso(s), envie o comprovante para o WhatsApp:

Chave Pix: ${pixKey}
Valor Total: R$${totalValue}

Clique aqui: ${whatsappLink}
`;
    
    // Exibe a mensagem em um prompt ou caixa de diálogo personalizada
    const confirmBox = document.createElement("div");
    confirmBox.className = "confirmation-box"; // Adiciona a classe para estilo
    confirmBox.innerHTML = message.replace(/\n/g, "<br>") + "<br><br><button onclick='this.parentElement.remove()'>Fechar</button>";
    
    document.body.appendChild(confirmBox);
    
    copyPixKey(); // Copia a chave Pix automaticamente
}
