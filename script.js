$(document).ready(function() {
    let currentIndex = 0;
    const items = $('.carousel-item');
    const totalItems = items.length;

    function updateCarousel() {
        const newTransform = `translateX(-${currentIndex * 100}%)`;
        $('.carousel-container').css('transform', newTransform);
    }

    $('.next').on('click', function() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    });

    $('.prev').on('click', function() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    });

    const ticketInput = $('#ticket-quantity');

    $('#increment').on('click', function() {
        let currentValue = parseInt(ticketInput.val(), 10);
        ticketInput.val(currentValue + 1);
    });

    $('#decrement').on('click', function() {
        let currentValue = parseInt(ticketInput.val(), 10);
        if (currentValue > 0) {
            ticketInput.val(currentValue - 1);
        }
    });

    $('#buy-tickets').on('click', function() {
        const quantity = ticketInput.val();
        if (quantity > 0) {
            alert(`Você comprou ${quantity} ingresso(s)!`);
        } else {
            alert('Por favor, selecione a quantidade de ingressos.');
        }
    });

    // Função para o upload de imagens
    $('#upload-button').on('click', function() {
        const files = $('#image-upload')[0].files;
        if (files.length > 0) {
            alert(`${files.length} imagem(ns) adicionada(s) com sucesso!`);
        } else {
            alert('Por favor, selecione uma imagem para adicionar.');
        }
    });
});
