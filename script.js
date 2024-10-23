function copyPixKey() {
    const pixKey = document.getElementById('pix-key').innerText;
    navigator.clipboard.writeText(pixKey).then(() => {
        alert('Chave Pix copiada: ' + pixKey);
    }).catch(() => {
        alert('Erro ao copiar a chave Pix.');
    });
}

function updateTotal() {
    const quantity = document.getElementById('ticket-quantity').value;
    const pricePerTicket = 60; // Preço por ingresso
    const totalValue = quantity * pricePerTicket;
    document.getElementById('total-value').innerText = totalValue.toFixed(2);
}

function purchaseTicket() {
    alert('Instruções de compra: Envie o comprovante para WhatsApp.');
}

function nextSlide(carouselId) {
    const carousel = document.getElementById(carouselId);
    const items = carousel.querySelector('.carousel-items');
    items.scrollBy({ left: 150, behavior: 'smooth' }); // Ajuste o valor 150 para a largura que deseja mover
}

function prevSlide(carouselId) {
    const carousel = document.getElementById(carouselId);
    const items = carousel.querySelector('.carousel-items');
    items.scrollBy({ left: -150, behavior: 'smooth' }); // Ajuste o valor -150 para a largura que deseja mover
}
