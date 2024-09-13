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
        }
    }
};

// Criar o gráfico
window.onload = function() {
    const ctx = document.getElementById('impact-canvas').getContext('2d');
    new Chart(ctx, config);
};
