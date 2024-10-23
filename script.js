// Função para calcular o total e atualizar a exibição
function updateTotal() {
    const ticketQuantity = document.getElementById("ticket-quantity").value;
    const ticketPrice = 60; // Supondo que o preço inicial seja 60, ajuste conforme necessário
    const totalValue = ticketQuantity * ticketPrice;
    document.getElementById("total-value").innerText = totalValue;

    // Exibir campos de nome e CPF conforme a quantidade de ingressos
    const nameFieldsContainer = document.getElementById("name-fields-container");
    nameFieldsContainer.innerHTML = ''; // Limpar campos existentes

    for (let i = 0; i < ticketQuantity; i++) {
        nameFieldsContainer.innerHTML += `
            <label for="name${i + 1}">Nome Completo do Convidado ${i + 1}:</label>
            <input type="text" id="name${i + 1}" class="name-input" required>
            <label for="cpf${i + 1}">CPF do Convidado ${i + 1}:</label>
            <input type="text" id="cpf${i + 1}" class="cpf-input" required>
        `;
    }
}

// Função para verificar CPF
function isValidCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false; // Verifica se é um número válido

    let sum = 0;
    let remainder;

    for (let i = 1; i <= 9; i++) {
        sum += parseInt(cpf[i - 1]) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf[9])) return false;

    sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += parseInt(cpf[i - 1]) * (12 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf[10])) return false;

    return true;
}

// Função para exibir o link do WhatsApp com informações formatadas
function purchaseTicket() {
    const ticketQuantity = document.getElementById("ticket-quantity").value;
    const totalValue = document.getElementById("total-value").innerText;

    let names = [];
    let cpfs = [];
    let valid = true;

    for (let i = 0; i < ticketQuantity; i++) {
        const name = document.getElementById(`name${i + 1}`).value;
        const cpf = document.getElementById(`cpf${i + 1}`).value;

        if (!isValidCPF(cpf)) {
            alert(`CPF do convidado ${i + 1} é inválido!`);
            valid = false;
            break;
        }

        names.push(name);
        cpfs.push(cpf);
    }

    if (!valid) return; // Interrompe a execução se o CPF não for válido

    const whatsappLink = `https://wa.me/5531997746789?text=Olá, gostaria de finalizar a compra de ingressos.
    \nNome(s): ${names.join(', ')}
    \nCPF(s): ${cpfs.join(', ')}
    \nChave Pix: freakynight2024@gmail.com
    \nQuantidade de Ingressos: ${ticketQuantity}
    \nValor Total: R$${totalValue}
    \nInformações adicionais: Enviaremos o comprovante e o convite!`;

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

// Função para exibir informações sobre o evento
function showEventInfo() {
    const eventInfo = document.getElementById("event-info");
    if (eventInfo.style.display === "none") {
        eventInfo.style.display = "block";
    } else {
        eventInfo.style.display = "none";
    }
}
