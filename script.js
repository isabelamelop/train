// Função para calcular o total e atualizar a exibição
function updateTotal() {
    const ticketQuantity = document.getElementById("ticket-quantity").value;
    const ticketPrice = 60; // Supondo que o preço inicial seja 60, ajuste conforme necessário
    const totalValue = ticketQuantity * ticketPrice;
    document.getElementById("total-value").innerText = totalValue;
    updateGuestInfoFields(ticketQuantity); // Atualiza os campos de nome e CPF
}

// Função para atualizar campos de nome e CPF com base na quantidade de ingressos
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
    // Verifica se o CPF tem 11 dígitos
    if (cpf.length !== 11 || isNaN(cpf)) {
        return false;
    }

    // Lógica básica de validação (pode ser expandida com verificação de dígitos)
    const firstDigit = parseInt(cpf[9]);
    const secondDigit = parseInt(cpf[10]);
    let sum1 = 0, sum2 = 0;

    for (let i = 0; i < 9; i++) {
        sum1 += parseInt(cpf[i]) * (10 - i);
        sum2 += parseInt(cpf[i]) * (11 - i);
    }

    sum1 = (sum1 * 10) % 11;
    sum2 = (sum2 * 10) % 11;

    return (sum1 === firstDigit && sum2 === secondDigit);
}

// Função para exibir o link do WhatsApp com informações formatadas
function purchaseTicket() {
    const ticketQuantity = document.getElementById("ticket-quantity").value;
    const totalValue = document.getElementById("total-value").innerText;

    const guestNames = [];
    const guestCps = [];
    let isValid = true;

    for (let i = 0; i < ticketQuantity; i++) {
        const name = document.getElementById(`guest-name-${i}`).value;
        const cpf = document.getElementById(`guest-cpf-${i}`).value;

        if (!name || !isValidCPF(cpf)) {
            isValid = false;
            alert(`Por favor, preencha corretamente o nome e CPF do convidado ${i + 1}.`);
            break;
        }

        guestNames.push(name);
        guestCps.push(cpf);
    }

    if (!isValid) return; // Para a execução se a validação falhar

    const whatsappLink = `https://wa.me/5531997746789?text=Olá, gostaria de finalizar a compra de ingressos.
    \nNome Completo: ${guestNames.join(', ')}
    \nCPF: ${guestCps.join(', ')}
    \nQuantidade de Ingressos: ${ticketQuantity}
    \nValor Total: R$ ${totalValue}`;
    
    document.getElementById("message-box").innerHTML = `Mensagem para WhatsApp:
    <a href="${whatsappLink}" target="_blank">Clique aqui para enviar</a>`;
    document.getElementById("message-box").style.display = "block";
}

// Função para mostrar informações do evento
function showEventInfo() {
    const eventInfoDiv = document.getElementById("event-info");
    eventInfoDiv.style.display = eventInfoDiv.style.display === "none" ? "block" : "none";
}
