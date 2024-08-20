// Seleciona o coração vermelho
var heart = document.querySelector(".heart");

// Adiciona um evento de clique ao coração
heart.addEventListener("click", function() {
    alert("Mor, a segurança que encontro na sua companhia me faz acreditar que a paz existe, mesmo quando tudo tá muito caótico. porque quando você segue sua vida, o que mais me importa é saber que tô junto com você. e, ao perceber que posso contar com você, tudo na minha vida se acalma e encontra o seu equilíbrio.\n\nfico admirando você e me maravilho com sua capacidade de crescer e aprender, a forma como você lida com os desafios da vida. sua fé me motiva, fazendo com que eu queira, mais do que nunca, estar com você. e sempre estarei.\n\neu quero compartilhar novas experiências ao seu lado, na esperança de que, juntas, possamos encontrar a beleza que o mundo tem a oferecer.\n\nsou perdidamente apaixonada por você e sou profundamente grata pela pessoa que me tornei, e tudo isso porque você faz parte da minha vida. namora comigo!");
});

// Função para mover o coração baseado na posição do mouse
function moveHeart(event) {
    var x = event.clientX;
    var y = event.clientY;
    heart.style.transform = `translate(${x - 25}px, ${y - 25}px) rotate(-45deg)`;
}

// Adiciona um evento de movimento do mouse ao documento
document.addEventListener("mousemove", moveHeart);

// Seleciona o coração partido
var brokenHeart = document.querySelector(".broken-heart");

// Adiciona um evento de clique ao coração partido, se necessário
brokenHeart.addEventListener("click", function() {
    // Adicione a funcionalidade desejada para o coração partido aqui
});
