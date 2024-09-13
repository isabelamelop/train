// Soluções para cada área de impacto
const solutions = {
    'Otimização de Processos': 'Usar ciência de dados para otimizar a gestão da frota e a estratégia de preços.',
    'Desenvolvimento de Soluções Inovadoras': 'Criar ferramentas e dashboards para melhorar a eficiência operacional e a experiência do cliente.',
    'Fortalecimento da Presença Online': 'Implementar estratégias digitais para aumentar a visibilidade e o engajamento com o público-alvo.',
    'Colaboração em Projetos de Tecnologia': 'Propor e implementar novas tecnologias que podem melhorar a operação e a satisfação do cliente.'
};

// Função para exibir a solução
function displaySolution(label) {
    const solutionText = solutions[label] || 'Nenhuma solução disponível para esta área.';
    document.getElementById('solution-display').innerText = solutionText;
}

// Dados para a visualização
const data = {
    labels: [
        'Otimização de Processos',
        'Desenvolvimento de Soluções Inovadoras',
        'Fortalecimento da Presença Online',
        'Colaboração em Projetos de Tecnologia'
    ],
    datasets: [{
        label: 'Impacto Potencial',
        data: [90, 80, 70, 85], // Valores fictícios
        backgroundColor: 'rgba(176, 98, 98, 0.2)', // Bordô claro
        borderColor: 'rgba(176, 98, 98, 1)', // Bordô escuro
        borderWidth: 1
    }]
};

// Configuração do gráfico
const config = {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return `${context.label}: ${context.raw}% de Impacto Potencial`;
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    color: '#f4f4f4'
                }
            },
            y: {
                grid: {
                    color: '#f4f4f4'
                },
                ticks: {
                    color: '#333'
                }
            }
        },
        onClick: (event, chartElement) => {
            if (chartElement.length > 0) {
                const label = chartElement[0].element.$context.raw.label;
                displaySolution(label);
            }
        }
    }
};

// Criar o gráfico
const ctx = document.getElementById('impact-graph').getContext('2d');
new Chart(ctx, config);
