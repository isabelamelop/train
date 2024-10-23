$(document).ready(function() {
    let currentBarIndex = 0; // Índice do item atual do carrossel de bebidas
    const barItems = $('#bar-carousel .carousel-item'); // Seleciona todos os itens do carrossel de bebidas
    const totalBarItems = barItems.length; // Total de itens no carrossel de bebidas

    let currentFoodIndex = 0; // Índice do item atual do carrossel de comidas
    const foodItems = $('#food-carousel .carousel-item'); // Seleciona todos os itens do carrossel de comidas
    const totalFoodItems = foodItems.length; // Total de itens no carrossel de comidas

    // Função para atualizar a posição do carrossel de bebidas
    function updateBarCarousel() {
        const newTransform = `translateX(-${currentBarIndex * 100}%)`; // Calcula a nova posição
        $('#bar-carousel .carousel-container').css('transform', newTransform); // Aplica a transformação
    }

    // Função para atualizar a posição do carrossel de comidas
    function updateFoodCarousel() {
        const newTransform = `translateX(-${currentFoodIndex * 100}%)`; // Calcula a nova posição
        $('#food-carousel .carousel-container').css('transform', newTransform); // Aplica a transformação
    }

    // Atualiza o carrossel de bebidas a cada 2 segundos
    setInterval(function() {
        currentBarIndex = (currentBarIndex + 1) % totalBarItems; // Incrementa o índice
        updateBarCarousel(); // Atualiza a posição
    }, 2000); // 2000 ms = 2 segundos

    // Atualiza o carrossel de comidas a cada 2 segundos
    setInterval(function() {
        currentFoodIndex = (currentFoodIndex + 1) % totalFoodItems; // Incrementa o índice
        updateFoodCarousel(); // Atualiza a posição
    }, 2000); // 2000 ms = 2
