// Função para calcular o preço do ingresso com base na data atual
function getTicketPrice() {
    const today = new Date();
    const currentDate = today.getDate();
    const currentMonth = today.getMonth() + 1; // Mês começa em 0

    // Definir os lotes e preços
    if (currentMonth === 10) {
        if (currentDate >= 18 && currentDate <= 19) return 50; // Pré Lote
        if (currentDate <= 24) return 60; // 1° Lote
        if (currentDate <= 30) return 75; // 2° Lote
    } else if (currentMonth === 11) {
        if (currentDate <= 7) return 80; // 3° Lote
    }
    
    return 0; // Se não estiver em nenhum lote
}

// Função para atualizar o total e exibir campos de convidados
function updateTotal() {
    const ticketQuantity = document.getElementById("ticket-quantity").value;
    const ticketPrice = getTicketPrice();
    const totalValue = ticketQuantity * ticketPrice;
    document.getElementById("total-value").innerText = totalValue;

    updateGuestInfoFields(ticketQuantity); // Atualiza os campos de nome e CPF
}

// Função para atualizar campos de nome e CPF
function updateGuestInfoFields(quantity) {
    const guestInfoDiv = document.getElementById("guest-info");
    guestInfoDiv.innerHTML = ""; // Limpa os campos anteriores
    for (let i = 0; i < quantity; i++) {
        guestInfoDiv.innerHTML += `
            <div>
                <label for="guest-name-${i}">Nome Completo do Convidado ${i + 1}:</label>
                <input type="text" id="guest-name-${i}" class="guest-name" required>
                <label for="guest-cpf-${i}">CPF do Convidado ${i + 1}:</label>
                <input type="text" id="guest-cpf-${i}" class="guest-cpf" maxlength="11" required>
                <br>
            </div>
        `;
    }
}

// Função para validar CPF
function isValidCPF(cpf) {
    if (typeof cpf !== 'string') return false;
    cpf = cpf.replace(/[^0-9]/g, ''); // Remove caracteres não numéricos

    // Verifica se o CPF tem 11 dígitos
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

    let sum = 0;
    let remainder;

    // Validação do primeiro dígito
    for (let i = 1; i <= 9; i++) sum += parseInt(cpf.charAt(i - 1)) * (11 - i);
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.charAt(9))) return false;

    // Validação do segundo dígito
    sum = 0;
    for (let i = 1; i <= 10; i++) sum += parseInt(cpf.charAt(i - 1)) * (12 - i);
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    return remainder === parseInt(cpf.charAt(10));
}

// Função para exibir o link do WhatsApp com informações formatadas
function purchaseTicket() {
    const ticketQuantity = document.getElementById("ticket-quantity").value;
    if (ticketQuantity <= 0) {
        alert("Selecione pelo menos 1 ingresso.");
        return;
    }

    const totalValue = document.getElementById("total-value").innerText;
    let message = `Para finalizar a compra, envie o comprovante para o WhatsApp:\n\n`;
    message += `- Chave Pix: freakynight2024@gmail.com\n`;
    message += `- Quantidade de Ingressos: ${ticketQuantity}\n`;
    message += `- Valor total: R$${totalValue}\n`;

    // Validar CPF e coletar informações dos convidados
    for (let i = 0; i < ticketQuantity; i++) {
        const cpfInput = document.getElementById(`guest-cpf-${i}`);
        if (!isValidCPF(cpfInput.value)) {
            alert(`O CPF do convidado ${i + 1} é inválido.`);
            return;
        }
        const nameInput = document.getElementById(`guest-name-${i}`).value;
        message += `- Nome do Convidado ${i + 1}: ${nameInput}\n`;
        message += `- CPF do Convidado ${i + 1}: ${cpfInput.value}\n`; // Inclui CPF na mensagem
    }

    const whatsappLink = `https://wa.me/5531997746789?text=${encodeURIComponent(message)}`;
    
    // Atualiza o conteúdo da caixa de mensagem com quebra de linha
    document.getElementById("message-box").style.display = 'block';
    document.getElementById("message-box").innerHTML = `
        Para finalizar a compra, envie o comprovante para o WhatsApp:
        <br><br>
        - Chave Pix: freakynight2024@gmail.com<br>
        - Quantidade de Ingressos: ${ticketQuantity}<br>
        - Valor total: R$${totalValue}<br><br>
        ${message.replace(/\n/g, '<br>')}  <!-- Adiciona quebras de linha HTML -->
        <a href="${whatsappLink}" target="_blank">Clique aqui para enviar mensagem</a>
    `;
}
