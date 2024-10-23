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
    const whatsappLink = 'wa.me/+5531997746789'; // Link do WhatsApp
    const message = `
Para finalizar a compra de ${quantity} ingresso(s), envie o comprovante para o WhatsApp:

Chave Pix: ${pixKey}
Valor Total: R$${totalValue}

Clique aqui: ${whatsappLink}
`;
    
    // Exibe a mensagem em um prompt ou caixa de diálogo personalizada
    const confirmationMessage = message.replace(/\n/g, "<br>");
    const confirmBox = document.createElement("div");
    confirmBox.style.position = "fixed";
    confirmBox.style.top = "50%";
    confirmBox.style.left = "50%";
    confirmBox.style.transform = "translate(-50%, -50%)";
    confirmBox.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
    confirmBox.style.padding = "20px";
    confirmBox.style.borderRadius = "10px";
    confirmBox.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.3)";
    confirmBox.innerHTML = confirmMessage + "<br><br><button onclick='this.parentElement.remove()'>Fechar</button>";
    
    document.body.appendChild(confirmBox);
    
    copyPixKey(); // Copia a chave Pix automaticamente
}
