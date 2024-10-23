// Função para calcular o total e atualizar a exibição
function updateTotal() {
    const ticketQuantity = document.getElementById("ticket-quantity").value;
    const ticketPrice = 60; // Supondo que o preço inicial seja 60, ajuste conforme necessário
    const totalValue = ticketQuantity * ticketPrice;
    document.getElementById("total-value").innerText = totalValue;
    
    // Atualiza os campos de nome e CPF
    updateGuestInfoFields(ticketQuantity);
}

// Função para verificar o CPF (simplificada)
function validateCPF(cpf) {
    // Remover pontuações
    cpf = cpf.replace(/[^\d]+/g,''); 
    
    // CPF inválido se tiver um tamanho diferente de 11 ou dígitos repetidos
    if (cpf.length !== 11 || /^(.)\1+$/.test(cpf)) return false;

    // Cálculo dos dígitos verificadores
    let soma, resto;
    soma = 0;
    for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i-1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(cpf.substring(9, 10))) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i-1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(cpf.substring(10, 11))) return false;

    return true;
}

// Função para exibir mensagem de erro ao validar CPF
function showInvalidCPFError(index) {
    const errorMessage = document.getElementById(`cpf-error-${index}`);
    errorMessage.style.display = "block";
}

// Função para ocultar a mensagem de erro do CPF
function hideInvalidCPFError(index) {
    const errorMessage = document.getElementById(`cpf-error-${index}`);
    errorMessage.style.display = "none";
}

// Função para atualizar os campos de nome e CPF
function updateGuestInfoFields(quantity) {
    const container = document.getElementById("guest-info-container");
    container.innerHTML = ""; // Limpa os campos existentes

    for (let i = 0; i < quantity; i++) {
        container.innerHTML += `
            <div>
                <label for="guest-name-${i}">Nome Completo do Convidado ${i + 1}:</label>
                <input type="text" id="guest-name-${i}" required>
                
                <label for="guest-cpf-${i}">CPF do Convidado ${i + 1}:</label>
                <input type="text" id="guest-cpf-${i}" required oninput="validateCPFInput(${i})">
                <span id="cpf-error-${i}" style="display:none;color:red;">CPF inválido</span>
            </div>
            <br>
        `;
    }
}

// Função para validar a entrada do CPF enquanto o usuário digita
function validateCPFInput(index) {
    const cpfValue = document.getElementById(`guest-cpf-${index}`).value;
    if (validateCPF(cpfValue)) {
        hideInvalidCPFError(index);
    } else {
        showInvalidCPFError(index);
    }
}

// Função para exibir o link do WhatsApp com informações formatadas
function purchaseTicket() {
    const ticketQuantity = document.getElementById("ticket-quantity").value;
    const totalValue = document.getElementById("total-value").innerText;

    let guestsInfo = '';
    for (let i = 0; i < ticketQuantity; i++) {
        const guestName = document.getElementById(`guest-name-${i}`).value;
        const guestCPF = document.getElementById(`guest-cpf-${i}`).value;

        if (!validateCPF(guestCPF)) {
            alert(`CPF do Convidado ${i + 1} é inválido!`);
            return;
        }

        guestsInfo += `Nome do Convidado ${i + 1}: ${guestName}, CPF: ${guestCPF}\n`;
    }

    const whatsappLink = `https://wa.me/5531997746789?text=Olá, gostaria de finalizar a compra de ingressos.%0A${encodeURIComponent(guestsInfo)}%0AQuantidade de Ingressos: ${ticketQuantity}%0AValor total: R$${totalValue}%0AVou te mandar o comprovante da compra!%0A`;

    // Atualiza o conteúdo da caixa de mensagem com quebra de linha
    document.getElementById("message-box").innerHTML = `
        Para finalizar a compra, envie o comprovante para o WhatsApp:
        <br><br>
        - Chave Pix: freakynight2024@gmail.com<br>
        - Quantidade de Ingressos: ${ticketQuantity}<br>
        - Valor total: R$${totalValue}<br><br>
        <strong><a href="${whatsappLink}" target="_blank">Clique aqui para enviar</a></strong>
    `;

    // Exibe a caixa de mensagem e rola até ela
    document.getElementById("message-box").style.display = 'block';
    document.getElementById("message-box").scrollIntoView({ behavior: 'smooth' });
}

// Função para exibir as informações do evento
function showEventInfo() {
    const eventInfo = document.getElementById("event-info");
    if (eventInfo.style.display === "none") {
        eventInfo.style.display = "block";
    } else {
        eventInfo.style.display = "none";
    }
}
