document.getElementById('generate-qr').addEventListener('click', function() {
    const quantity = parseInt(document.getElementById('ticket-quantity').value);
    const qrCodeDiv = document.getElementById('qr-code');

    // Substitua este URL pelo URL real do seu QR Code gerado com base no valor
    const priceMapping = {
        1: 'https://example.com/qrcode-1',
        2: 'https://example.com/qrcode-2',
        3: 'https://example.com/qrcode-3',
        4: 'https://example.com/qrcode-4',
        // Adicione mais conforme necessário
    };

    const qrCodeUrl = priceMapping[quantity] || 'https://example.com/default-qrcode';

    qrCodeDiv.innerHTML = `<h3>QR Code para ${quantity} ingresso(s)</h3>
                           <img src="${qrCodeUrl}" alt="QR Code" style="max-width: 100%; height: auto;">`;
    qrCodeDiv.classList.remove('hidden');
});
