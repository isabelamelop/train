const personalInfo = {
  name: 'Isabela de Melo Pereira',
  introduction: 'Olá, meu nome é Isabela de Melo Pereira, sou estudante de Ciência da Computação no 3º período e faço estágio com atendimento ao cliente. Estou sempre buscando aprender mais sobre inteligência artificial, ciência de dados e tecnologias emergentes.',
  experiences: [
    'Estudante de Ciência da Computação no 3º período',
    'Atendimento ao Cliente na Wave Lojas Virtuais',        
  ],
  skills: [
    'Excel e Power BI',
    'VSCode, Eclipse, Linux, Oracle',
    'Conhecimentos básicos de ciência de dados através de cursos gratuitos',
    'PL/SQL, POO em Java, C#, Python e R para análise de dados'
  ]
};

// Adicionar a introdução
const introElement = document.getElementById('introduction');
if (introElement) {
  introElement.innerText = personalInfo.introduction;
}

// Adicionar as experiências
const experienceList = document.getElementById('experience-list');
if (experienceList) {
  personalInfo.experiences.forEach(exp => {
    const li = document.createElement('li');
    li.innerText = exp;
    experienceList.appendChild(li);
  });
}

// Adicionar as habilidades
const skillsList = document.getElementById('skills-list');
if (skillsList) {
  personalInfo.skills.forEach(skill => {
    const li = document.createElement('li');
    li.innerText = skill;
    skillsList.appendChild(li);
  });
}

// Definir as soluções para cada problema
const solutions = {
  'Análise de Dados': 'Usar ciência de dados para otimizar a gestão da frota e a estratégia de preços',
  'Desenvolvimento de Soluções': 'Criar ferramentas e dashboards para melhorar a eficiência operacional e a experiência do cliente',
  'Inovação Tecnológica': 'Propor e implementar novas tecnologias que podem melhorar a operação e a satisfação do cliente',
  'Colaboração em Projetos de Tecnologia': 'Trabalhar em equipe para desenvolver soluções inovadoras e eficazes'
};

// Criar o gráfico
const ctx = document.getElementById('impact-graph').getContext('2d');
new Chart(ctx, config);
