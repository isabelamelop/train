function purchaseTickets() {
    const quantity = document.getElementById("quantity").value;
    const pricePerTicket = 60; // Valor do ingresso
    const totalAmount = pricePerTicket * quantity;

    // Exibir o resumo da compra
    document.getElementById("total-amount").innerText = `R$${totalAmount}`;
    document.getElementById("purchase-summary").style.display = "block";
}

function copyPix() {
    const pixKey = document.getElementById("pix-key").innerText;

    // Criar um elemento temporário para copiar o texto
    const tempInput = document.createElement("input");
    tempInput.value = pixKey;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    // Informar ao usuário que a chave Pix foi copiada
    alert("Chave Pix copiada para a área de transferência!");
}
