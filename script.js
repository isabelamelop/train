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
    const totalValue = (quantity * 60).toFixed(2); // Preço por ingresso

    // Mensagem do popup com o valor total e o link do WhatsApp
    const message = `
        Para finalizar a compra, envie o comprovante para o WhatsApp com as seguintes informações:
        - Chave Pix: ${'freakynight2024@gmail.com'}
        - Valor total: R$${totalValue}
        
        Clique aqui para enviar: wa.me/+5531997746789
    `;
    
    alert(message);
    copyPixKey(); // Copia a chave Pix
}
