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
    const totalValue = (quantity * 60).toFixed(2);
    const pixKey = "freakynight2024@gmail.com"; // Chave Pix
    const message = `Para finalizar a compra, faça um PIX de R$${totalValue} para ${pixKey}.` +
                    ` Envie o comprovante para o WhatsApp: [Clique aqui](https://wa.me/+5531997746789)`;

    alert(message);
    // Copiar chave Pix para a área de transferência
    navigator.clipboard.writeText(pixKey).then(() => {
        console.log('Chave Pix copiada: ' + pixKey);
    }).catch(() => {
        console.error('Erro ao copiar a chave Pix.');
    });
}
    confirmBox.className = "confirmation-box"; // Adiciona a classe para estilo
    confirmBox.innerHTML = message.replace(/\n/g, "<br>") + "<br><br><button onclick='this.parentElement.remove()'>Fechar</button>";
    
    document.body.appendChild(confirmBox);
    
    copyPixKey(); // Copia a chave Pix automaticamente
}
