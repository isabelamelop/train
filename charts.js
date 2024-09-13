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
                    },
                    title: function(context) {
                        return `Área de Impacto: ${context[0].label}`;
                    }
                },
                backgroundColor: '#333', // Cor de fundo do tooltip
                titleColor: '#fff', // Cor do título do tooltip
                bodyColor: '#fff', // Cor do corpo do tooltip
                borderColor: '#b03a2e', // Cor da borda do tooltip
                borderWidth: 1
            },
            // Animações
            datalabels: {
                display: true,
                color: '#fff',
                formatter: (value) => `${value}%`
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
        // Eventos personalizados
        onHover: (event, chartElement) => {
            if (chartElement.length > 0) {
                // Adicione efeitos personalizados ou ações quando o usuário passa o mouse sobre um elemento
                event.native.target.style.cursor = 'pointer';
            } else {
                event.native.target.style.cursor = 'default';
            }
        }
    }
};

// Criar o gráfico
window.onload = function() {
    const ctx = document.getElementById('impact-canvas').getContext('2d');
    new Chart(ctx, config);
};
