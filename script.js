document.getElementById("ticket-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const quantity = document.getElementById("quantity").value;
    const prices = {
        "1": 60,
        "2": 120,
        "3": 180,
        "4": 240,
    };
    
    // Determine o preço com base na quantidade de ingressos
    const totalPrice = prices[quantity];

    // Lógica para exibir o QR Code de acordo com a quantidade
    const qrCodeImage = `https://api.qrserver.com/v1/create-qr-code/?data=PIX Link para ${totalPrice}&size=200x200`;
    
    // Exibir QR Code e preço
    document.getElementById("qr-image").src = qrCodeImage;
    document.getElementById("price-info").innerText = `Total: R$ ${totalPrice}`;
    document.getElementById("qr-code").classList.remove("hidden");
});
