// Captura o formulário
const form = document.getElementById('agendamentoForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Impede o envio padrão do formulário

    // Captura os dados do formulário
    const nome_animal = document.getElementById('nome_animal').value;
    const raca_animal = document.getElementById('raca_animal').value;
    const idade_animal = parseInt(document.getElementById('idade_animal').value);
    const sexo = document.getElementById('sexo').value;
    const nome_dono = document.getElementById('nome_dono').value;
    const telefone = document.getElementById('telefone').value;
    const endereco = document.getElementById('endereco').value;
    const servico = document.getElementById('servico').value;
    const data_agendamento = new Date(document.getElementById('data_agendamento').value);

    // Adiciona os dados ao Firestore
    try {
        const docRef = await db.collection("agendamentos").add({
            nome_animal,
            raca_animal,
            idade_animal,
            sexo,
            nome_dono,
            telefone,
            endereco,
            servico,
            data_agendamento
        });
        console.log("Documento adicionado com ID: ", docRef.id);
        alert("Agendamento adicionado com sucesso!");
    } catch (e) {
        console.error("Erro ao adicionar documento: ", e);
        alert("Erro ao adicionar agendamento. Tente novamente.");
    }

    // Limpa o formulário após o envio
    form.reset();
});
