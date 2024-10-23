// Atualizar o valor total com base na quantidade de ingressos
function updateTotal() {
    const quantity = document.getElementById('ticket-quantity').value;
    const totalValue = quantity * 60; // R$60 por ingresso
    document.getElementById('total-value').textContent = totalValue;
}

// Adicionar campos de nome e CPF
function addGuestFields() {
    const quantity = document.getElementById('ticket-quantity').value;
    const guestInfoDiv = document.getElementById('guest-info');
    guestInfoDiv.innerHTML = ''; // Limpar campos existentes

    for (let i = 1; i <= quantity; i++) {
        guestInfoDiv.innerHTML += `
            <h4>Convidado ${i}</h4>
            <input type="text" class="guest-name" id="guest-name-${i}" placeholder="Nome Completo" required />
            <input type="text" class="guest-cpf" id="guest-cpf-${i}" placeholder="CPF" required />
        `;
    }
}

// Chamar addGuestFields quando a quantidade mudar
document.getElementById('ticket-quantity').addEventListener('change', addGuestFields);

// Função para validar os campos e concluir a compra
function purchaseTicket() {
    const quantity = document.getElementById('ticket-quantity').value;
    const messageBox = document.getElementById('message-box');
    messageBox.style.display = 'none'; // Ocultar mensagem anterior

    // Validar campos de nome e CPF
    for (let i = 1; i <= quantity; i++) {
        const name = document.getElementById(`guest-name-${i}`).value.trim();
        const cpf = document.getElementById(`guest-cpf-${i}`).value.trim();

        if (name === '' || cpf === '') {
            messageBox.textContent = 'Por favor, preencha todos os campos.';
            messageBox.style.display = 'block'; // Mostrar mensagem
            return; // Parar a execução se a validação falhar
        }

        // Verificar se o CPF é válido (simplificação)
        if (cpf.length !== 11 || isNaN(cpf)) {
            messageBox.textContent = 'Por favor, insira um CPF válido (11 dígitos).';
            messageBox.style.display = 'block'; // Mostrar mensagem
            return; // Parar a execução se a validação falhar
        }
    }

    messageBox.textContent = 'Compra concluída com sucesso!';
    messageBox.style.display = 'block'; // Mostrar mensagem de sucesso
}

// Mostrar informações do evento
function showEventInfo() {
    const eventInfoDiv = document.getElementById('event-info');
    eventInfoDiv.style.display = eventInfoDiv.style.display === 'none' ? 'block' : 'none';
}
