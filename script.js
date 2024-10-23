$(document).ready(function () {
    let ticketQuantity = 0;

    $('#increment').click(function () {
        ticketQuantity++;
        $('#ticket-quantity').val(ticketQuantity);
    });

    $('#decrement').click(function () {
        if (ticketQuantity > 0) {
            ticketQuantity--;
            $('#ticket-quantity').val(ticketQuantity);
        }
    });

    $('#buy-tickets').click(function () {
        alert(`Você comprou ${ticketQuantity} ingressos.`);
    });

    // Funções para o carrossel
    function initCarousel(carouselContainer) {
        let currentIndex = 0;
        const totalSlides = $(carouselContainer).find('.carousel-item').length;

        function showSlide(index) {
            $(carouselContainer).find('.carousel-container').css('transform', `translateX(-${index * 100}%)`);
        }

        $(carouselContainer).find('.next').click(function () {
            currentIndex = (currentIndex + 1) % totalSlides; // Avança para o próximo
            showSlide(currentIndex);
        });

        $(carouselContainer).find('.prev').click(function () {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Volta para o anterior
            showSlide(currentIndex);
        });

        showSlide(currentIndex); // Mostra o slide inicial
    }

    // Inicializando os carrosséis
    initCarousel('.open-bar .carousel');
    initCarousel('.open-food .carousel');
});
