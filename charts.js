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
    backgroundColor: 'rgba(255, 0, 0, 0.2)', // Vermelho claro
    borderColor: 'rgba(255, 0, 0, 1)', // Vermelho escuro
    borderWidth: 1
  }]
};

// Soluções para cada área
const solutions = {
  'Otimização de Processos': 'Usar ciência de dados para otimizar a gestão da frota e a estratégia de preços.',
  'Desenvolvimento de Soluções Inovadoras': 'Criar ferramentas e dashboards para melhorar a eficiência operacional.',
  'Fortalecimento da Presença Online': 'Fortalecer o SEO e a experiência de usuário no site e app.',
  'Colaboração em Projetos de Tecnologia': 'Trabalhar em equipes multifuncionais para desenvolver novas soluções.'
};

// Configuração do gráfico
const config = {
  type: 'bar',
  data: data,
  options: {
    responsive: true,
    onClick: (e, chartElements) => {
      if (chartElements.length > 0) {
        const chartElement = chartElements[0];
        const label = data.labels[chartElement.index];
        const solution = solutions[label] || 'Nenhuma solução disponível para essa área.';
        alert(`Área: ${label}\nSolução: ${solution}`);
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: function (context) {
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
window.onload = function () {
  const ctx = document.getElementById('impact-graph').getContext('2d');
  new Chart(ctx, config);
};
