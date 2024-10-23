// Função para calcular o total e atualizar a exibição
function updateTotal() {
    const ticketQuantity = document.getElementById("ticket-quantity").value;
    const ticketPrice = 60; // Supondo que o preço inicial seja 60, ajuste conforme necessário
    const totalValue = ticketQuantity * ticketPrice;
    document.getElementById("total-value").innerText = totalValue;

    // Exibir campos de nome e CPF conforme a quantidade de ingressos
    const nameCpfContainer = document.getElementById("name-cpf-container");
    nameCpfContainer.innerHTML = ""; // Limpa o container

    for (let i = 0; i < ticketQuantity; i++) {
        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.placeholder = "Nome Completo";
        nameInput.classList.add("name-input");

        const cpfInput = document.createElement("input");
        cpfInput.type = "text";
        cpfInput.placeholder = "CPF (apenas números)";
        cpfInput.classList.add("cpf-input");

        nameCpfContainer.appendChild(nameInput);
        nameCpfContainer.appendChild(cpfInput);
    }
}

// Função para validar o CPF
function isValidCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, ''); // Remove caracteres não numéricos
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false; // Validação básica

    let sum = 0;
    let remainder;
    for (let i = 1; i <= 9; i++) sum += parseInt(cpf.charAt(i - 1)) * (11 - i);
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.charAt(9))) return false;

    sum = 0;
    for (let i = 1; i <= 10; i++) sum += parseInt(cpf.charAt(i - 1)) * (12 - i);
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.charAt(10))) return false;

    return true;
}

// Função para exibir o link do WhatsApp com informações formatadas
function purchaseTicket() {
    const ticketQuantity = document.getElementById("ticket-quantity").value;
    const totalValue = document.getElementById("total-value").innerText;
    const nameInputs = document.getElementsByClassName("name-input");
    const cpfInputs = document.getElementsByClassName("cpf-input");

    let valid = true;
    let message = "Olá, gostaria de finalizar a compra de ingressos.\n";

    for (let i = 0; i < ticketQuantity; i++) {
        const name = nameInputs[i].value.trim();
        const cpf = cpfInputs[i].value.trim();

        if (!name || !isValidCPF(cpf)) {
            valid = false;
            alert("Por favor, preencha corretamente todos os campos de nome e CPF.");
            break;
        }

        message += `Nome ${i + 1}: ${name}\nCPF ${i + 1}: ${cpf}\n`;
    }

    if (!valid) return;

    const whatsappLink = `https://wa.me/5531997746789?text=${encodeURIComponent(message)}%0A- Chave Pix: freakynight2024@gmail.com%0A- Quantidade de Ingressos: ${ticketQuantity}%0A- Valor total: R$${totalValue}`;

    // Atualiza o conteúdo da caixa de mensagem com quebra de linha
    document.getElementById("message-box").innerHTML = `
        Para finalizar a compra, envie o comprovante para o WhatsApp:
        <br><br>
        <strong><a href="${whatsappLink}" target="_blank">Clique aqui para enviar</a></strong>
    `;

    // Exibe a caixa de mensagem e rola até ela
    document.getElementById("message-box").style.display = 'block';
    document.getElementById("message-box").scrollIntoView({ behavior: 'smooth' });
}
