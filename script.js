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
    const pricePerTicket = 60; // Preço por ingresso
    const totalValue = quantity * pricePerTicket;
    
    // Cria a mensagem
    const message = `
        Para finalizar a compra, envie o comprovante para o WhatsApp com as seguintes informações:
        - Chave Pix: freakynight2024@gmail.com
        - Valor total: R$${totalValue.toFixed(2)}
        
        Clique aqui para enviar: <a href="https://wa.me/+5531997746789" target="_blank" style="color: #ffa500; text-decoration: underline;">wa.me/+5531997746789</a>
    `;

    // Exibe a mensagem na caixa
    const messageBox = document.getElementById('message-box');
    messageBox.innerHTML = message; // Define o conteúdo da caixa
    messageBox.style.display = 'block'; // Exibe a caixa
}
