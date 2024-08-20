
var yesButton = document.querySelector(".button.yes");


yesButton.addEventListener("click", function() {
    alert("Ao perceber que posso contar com você, tudo na minha vida se acalma e encontra o seu equilíbrio.\n\nMor, a segurança que encontro na sua companhia me faz acreditar que a paz existe, mesmo quando tudo tá muito caótico. porque quando você segue sua vida, o que mais me importa é saber que tô junto com você. Fico admirando você e me maravilho com sua capacidade de crescer e aprender, a forma como você lida com os desafios da vida. sua fé me motiva, fazendo com que eu queira, mais do que nunca, estar com você. e sempre estarei.\n\neu quero compartilhar novas experiências ao seu lado, na esperança de que, juntas, possamos encontrar a beleza que o mundo tem a oferecer.\n\nsou perdidamente apaixonada por você e sou profundamente grata pela pessoa que me tornei, e tudo isso porque você faz parte da minha vida. namora comigo!");
});


var noButton = document.querySelector(".button.no");


noButton.addEventListener("mouseover", function() {
    position ? (position = 50) : (position = 190);
noButton.style.transform = 'translate(${position}px, 50px)';
noButton.style.transition = "all 0.4.s ease";
});



