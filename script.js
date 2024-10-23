// script.js

$(document).ready(function() {
    let currentIndex = 0; // Índice do item atual
    const items = $('.carousel-item'); // Seleciona todos os itens do carrossel
    const totalItems = items.length; // Total de itens no carrossel

    // Função para atualizar a posição do carrossel
    function updateCarousel() {
        const newTransform = `translateX(-${currentIndex * 100}%)`; // Calcula a nova posição
        $('.carousel-slide').css('transform', newTransform); // Aplica a transformação
    }

    // Evento de clique no botão "próximo"
    $('.next').on('click', function() {
        currentIndex = (currentIndex + 1) % totalItems; // Incrementa o índice
        updateCarousel(); // Atualiza a posição
    });

    // Evento de clique no botão "anterior"
    $('.prev').on('click', function() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Decrementa o índice
        updateCarousel(); // Atualiza a posição
    });

    // Função para permitir a seleção da quantidade de ingressos
    const ticketInput = $('#ticket-quantity'); // Seleciona o campo de entrada
    const incrementButton = $('#increment'); // Seleciona o botão de incremento
    const decrementButton = $('#decrement'); // Seleciona o botão de decremento

    // Evento de clique para incrementar a quantidade de ingressos
    incrementButton.on('click', function() {
        let currentValue = parseInt(ticketInput.val()); // Obtém o valor atual
        ticketInput.val(currentValue + 1); // Incrementa o valor
    });

    // Evento de clique para decrementar a quantidade de ingressos
    decrementButton.on('click', function() {
        let currentValue = parseInt(ticketInput.val()); // Obtém o valor atual
        if (currentValue > 0) {
            ticketInput.val(currentValue - 1); // Decrementa o valor se maior que 0
        }
    });
});
