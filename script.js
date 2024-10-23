<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Halloween Freaky Night 2024</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Creepster&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container">
        <header>
            <h1>HALLOWEEN FREAKY NIGHT 2024</h1>
            <h2></h2>
            <img src="halloween.jpeg" alt="Imagem de Halloween" style="max-width: 100%; height: auto; margin-top: 20px;">
            <p>Contagem, MG (bairro Tropical) <br>
            <strong>Data:</strong> 16/11<br>
            <strong>Horário:</strong> 21h às 3h</p>
            <strong>Endereço em breve no grupo!</strong></p>
        </header>
        
        <div class="ticket-info">
            <h3>Ingressos</h3>
            <h4>Lotes e Valores</h4>
            <ul>
                <li>Pré Lote (apenas 18 e 19/10): R$50</li>
                <li>1° Lote (até 24/10): R$60</li>
                <li>2° Lote (até 30/10): R$75</li>
                <li>3° Lote (até 07/11): R$80</li>
            </ul>
            <label for="ticket-quantity">Quantidade de Ingressos:</label>
            <select id="ticket-quantity" class="ticket-quantity" onchange="updateTotal()">
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
            <div id="guest-info">
                <label for="guest-name1">Nome:</label>
                <input type="text" id="guest-name1" class="guest-name" placeholder="Digite seu nome" required>
                <label for="guest-cpf1">CPF:</label>
                <input type="text" id="guest-cpf1" class="guest-cpf" placeholder="Digite seu CPF" required maxlength="14">
            </div>
            <div id="buyer2-fields" style="display: none;">
                <label for="guest-name2">Nome do segundo convidado:</label>
                <input type="text" id="guest-name2" class="guest-name" placeholder="Digite o nome do segundo convidado">
                <label for="guest-cpf2">CPF do segundo convidado:</label>
                <input type="text" id="guest-cpf2" class="guest-cpf" placeholder="Digite o CPF do segundo convidado" maxlength="14">
            </div>
            <p><strong>Valor total:</strong> R$<span id="total-value">60</span></p>
            <button class="purchase-button" onclick="purchaseTicket()">Concluir Compra</button>
            <div id="message-box" class="message-box" style="display: none;"></div>
        </div>
        
        <button class="info-button" onclick="showEventInfo()">Informações sobre o Evento</button>
        <div id="event-info" class="event-info" style="display: none;">
            <h4>Detalhes do Evento</h4>
            <p>Horário: 21h às 3h</p>
            <p>Open Bar - 21h às 1h (se inicia às 21h e se encerra minimamente às 1h, ou até às bebidas acabarem).</p>
            <p>Shot de Licor 43 para quem vier fantasiado.</p>
            <p>Beer Pong com Vodka (00h).</p>
        </div>
        
        <div id="event-policies" class="event-policies">
            <h3>Políticas do Evento</h3>
            <ul>
                <li>Ingressos individuais apenas.</li>
                <li>A festa é privada, para convidar e adicionar pessoas ao grupo, solicite o link de entrada aos admins.</li>
                <li>Apenas pagamentos via PIX, e enviaremos o comprovante e convite por mensagem.</li>
            </ul>
        </div>
    </div>
    <script>
        // Função para obter o valor do lote baseado na data atual
        function getCurrentLote() {
            const today = new Date("2024-10-23");
            let price = 60; // Valor padrão do 1° lote

            if (today >= new Date("2024-10-18") && today <= new Date("2024-10-19")) {
                price = 50; // Pré-lote
            } else if (today >= new Date("2024-10-20") && today <= new Date("2024-10-24")) {
                price = 60; // 1° lote
            } else if (today >= new Date("2024-10-25") && today <= new Date("2024-10-30")) {
                price = 75; // 2° lote
            } else if (today >= new Date("2024-10-31") && today <= new Date("2024-11-07")) {
                price = 80; // 3° lote
            }

            return price;
        }

        // Função para calcular o total e atualizar a exibição
        function updateTotal() {
            const ticketQuantity = document.getElementById("ticket-quantity").value;
            const ticketPrice = getCurrentLote(); // Obtém o preço atual do lote
            const totalValue = ticketQuantity * ticketPrice;
            document.getElementById("total-value").innerText = totalValue;
            updateBuyerFields(ticketQuantity); // Atualiza os campos de comprador
        }

        // Função para atualizar os campos de comprador
        function updateBuyerFields(quantity) {
            const buyer2Fields = document.getElementById("buyer2-fields");
            if (quantity == 2) {
                buyer2Fields.style.display = "block";
            } else {
                buyer2Fields.style.display = "none";
            }
        }

        // Função para validar nome completo (nome e sobrenome)
        function isValidName(name) {
            const nameParts = name.trim().split(" ");
            return nameParts.length >= 2 && nameParts[1] !== ""; // Verifica se há pelo menos duas palavras e a segunda não está vazia
        }

        // Função para validar CPF
        function isValidCPF(cpf) {
            // Implementação de validação de CPF
            return true; // Supondo que a validação foi feita
        }

        // Função para concluir a compra
        function purchaseTicket() {
            const quantity = document.getElementById("ticket-quantity").value;
            const guestName1 = document.getElementById("guest-name1").value;
            const guestCPF1 = document.getElementById("guest-cpf1").value;
            const guestName2 = quantity == 2 ? document.getElementById("guest-name2").value : '';
            const guestCPF2 = quantity == 2 ? document.getElementById("guest-cpf2").value : '';
            const messageBox = document.getElementById("message-box");

            // Validação do nome completo
            if (!isValidName(guestName1)) {
                messageBox.style.display = "block";
                messageBox.innerText = "Por favor, insira o Nome Completo 1 (nome e sobrenome).";
                return;
            }
            
            if (quantity == 2 && !isValidName(guestName2)) {
                messageBox.style.display = "block";
                messageBox.innerText = "Por favor, insira o Nome Completo 2 (nome e sobrenome).";
                return;
            }
            
            // Validação do CPF
            if (!isValidCPF(guestCPF1)) {
                messageBox.style.display = "block";
                messageBox.innerText = "CPF 1 inválido. Por favor, digite um CPF válido.";
                return;
            }

            if (quantity == 2 && !isValidCPF(guestCPF2)) {
                messageBox.style.display = "block";
                messageBox.innerText = "CPF 2 inválido. Por favor, digite um CPF válido.";
                return;
            }

            // Se os CPFs e os nomes forem válidos
            const totalValue = document.getElementById("total-value").innerText;
            const whatsappLink = `https://wa.me/5531997746789?text=Olá, gostaria de finalizar a compra do(s) ingresso(s).%0A%0A*Nome Completo 1:* ${guestName1}%0A*CPF 1:* ${guestCPF1}%0A${quantity == 2 ? `%0A*Nome Completo 2:* ${guestName2}%0A*CPF 2:* ${guestCPF2}%0A` : ''}%0A*Quantidade de Ingressos:*
