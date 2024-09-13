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

// Soluções para cada área
const solutions = {
    'Otimização de Processos': 'Usar ciência de dados para otimizar a gestão da frota e a estratégia de preços.',
    'Desenvolvimento de Soluções Inovadoras': 'Criar ferramentas e dashboards para melhorar a eficiência operacional e a experiência do cliente.',
    'Fortalecimento da Presença Online': 'Desenvolver campanhas digitais para aumentar a visibilidade da marca e engajar com o público.',
    'Colaboração em Projetos de Tecnologia': 'Propor e implementar novas tecnologias que podem melhorar a operação e a satisfação do cliente.'
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
                    color: 'rgba(0, 0, 0, 0.1)'
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                },
                ticks: {
                    callback: function(value) {
                        return value + '%';
                    }
                }
            }
        }
    }
};

// Renderizando o gráfico
const ctx = document.getElementById('impact-graph').getContext('2d');
const impactGraph = new Chart(ctx, config);

// Exibindo a solução quando o gráfico é clicado
document.getElementById('impact-graph').onclick = function(evt) {
    const points = impactGraph.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, false);

    if (points.length) {
        const firstPoint = points[0];
        const label = impactGraph.data.labels[firstPoint.index];
        const solutionText = solutions[label];
        const solutionContainer = document.getElementById('solution-container');
        solutionContainer.innerHTML = `<strong>${label}:</strong> ${solutionText}`;
    }
};
