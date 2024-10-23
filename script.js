function updateTotal() {
    const quantity = document.getElementById('ticket-quantity').value;
    const pricePerTicket = 60; // Preço por ingresso
    const totalValue = quantity * pricePerTicket;
    document.getElementById('total-value').innerText = totalValue.toFixed(2);
}

function showPurchasePopup() {
    const totalValue = document.getElementById('total-value').innerText;
    document.getElementById('popup-total-value').innerText = totalValue;

    // Copiar a chave Pix automaticamente
    const pixKey = document.getElementById('pix-key').innerText;
    navigator.clipboard.writeText(pixKey).then(() => {
        console.log('Chave Pix copiada: ' + pixKey);
    }).catch(() => {
        console.error('Erro ao copiar a chave Pix.');
    });

    document.getElementById('popup').style.display = 'block'; // Mostra o popup
}

function closePopup() {
    document.getElementById('popup').style.display = 'none'; // Oculta o popup
}

function confirmPurchase() {
    const totalValue = document.getElementById('total-value').innerText;
    const pixKey = document.getElementById('pix-key').innerText;
    const whatsappLink = 'https://wa.me/+5531997746789';
    
    // Exibe uma mensagem de confirmação com as informações
    alert(`Confirmação de Compra:\nChave Pix: ${pixKey}\nValor Total: R$${totalValue}\nEnvie o comprovante para o WhatsApp: ${whatsappLink}`);
    
    // Fechar o popup após a confirmação
    closePopup();
}
