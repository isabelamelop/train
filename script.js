const beverageCarousel = document.getElementById('beverages-carousel');
const foodCarousel = document.getElementById('food-carousel');
let beverageIndex = 0;
let foodIndex = 0;

function rotateCarousel(carousel, index, isBeverage) {
    const items = carousel.querySelectorAll('.carousel-item');
    items.forEach((item, i) => {
        item.style.transform = `translateX(${-100 * index}%)`;
    });

    if (isBeverage) {
        beverageIndex = (index + 1) % items.length;
    } else {
        foodIndex = (index + 1) % items.length;
    }
}

setInterval(() => {
    rotateCarousel(beverageCarousel, beverageIndex, true);
    rotateCarousel(foodCarousel, foodIndex, false);
}, 2000);

// Função para gerar o QR Code
function generateQRCode() {
    const qrCodeCanvas = document.getElementById('qr-code');
    const qr = new QRious({
        element: qrCodeCanvas,
        value: 'freakynight2024@gmail.com', // Chave Pix
        size: 250, // Tamanho do QR Code
    });
    qrCodeCanvas.style.display = 'block'; // Exibir o QR Code
}

// Evento do botão de compra
document.querySelector('.purchase-button').addEventListener('click', () => {
    alert('Obrigado pela compra!'); // Você pode adicionar um alerta ou uma mensagem de confirmação
    generateQRCode(); // Gera o QR Code
});
