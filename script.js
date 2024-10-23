$(document).ready(function() {
    let currentIndex = 0; // Índice do item atual
    const items = $('.carousel-item'); // Seleciona todos os itens do carrossel
    const totalItems = items.length; // Total de itens no carrossel

    // Função para atualizar a posição do carrossel
    function updateCarousel() {
        const newTransform = `translateX(-${currentIndex * 100}%)`; // Calcula a nova posição
        $('.carousel-container').css('transform', newTransform); // Aplica a transformação
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
    const ticketInput = $('#ticket-quantity');
    const ticketPrice = 50; // Preço do ingresso

    // Evento para incrementar a quantidade de ingressos
    $('#increment').on('click', function() {
        let currentValue = parseInt(ticketInput.val(), 10);
        ticketInput.val(currentValue + 1); // Incrementa o valor
    });

    // Evento para decrementar a quantidade de ingressos
    $('#decrement').on('click', function() {
        let currentValue = parseInt(ticketInput.val(), 10);
        if (currentValue > 0) {
            ticketInput.val(currentValue - 1); // Decrementa o valor, se maior que 0
        }
    });

    // Evento para comprar ingressos
    $('#buy-tickets').on('click', function() {
        const quantity = parseInt(ticketInput.val(), 10);
        if (quantity > 0) {
            const totalAmount = quantity * ticketPrice; // Calcula o valor total
            const pixKey = "chave_pix@dominio.com"; // Substitua pela sua chave Pix
            alert(`Valor total: R$ ${totalAmount.toFixed(2)}\n\nChave Pix para pagamento: ${pixKey}`);
        } else {
            alert('Por favor, selecione a quantidade de ingressos.');
        }
    });
});
