// Informações que serão exibidas
const personalInfo = {
    name: 'Isabela de Melo Pereira',
    introduction: 'Olá, meu nome é Isabela de Melo Pereira, sou estudante de Ciência da Computação no 3º período e faço estágio com atendimento ao cliente. Estou sempre buscando aprender mais sobre desenvolvimento web, ciência de dados e tecnologias emergentes.',
    experiences: [
        'Estudante de Ciência da Computação no 3º período',
        'Atendimento ao Cliente na Wave Lojas Virtuais',
        'Desenvolvimento de uma base de conhecimento para o e-commerce Wave Lojas Virtuais',
    ],
    skills: [
        'Excel e Power BI',
        'VSCode, Eclipse, Linux, Oracle',
        'Conhecimentos básicos de ciência de dados através de cursos gratuitos',
        'PL/SQL, POO em Java, C#, Python e R para análise de dados'
    ]
};

// Adicionar a introdução
document.getElementById('introduction').innerText = personalInfo.introduction;

// Adicionar as experiências
const experienceList = document.getElementById('experience-list');
personalInfo.experiences.forEach(exp => {
    const li = document.createElement('li');
    li.innerText = exp;
    experienceList.appendChild(li);
});

// Adicionar as habilidades
const skillsList = document.getElementById('skills-list');
personalInfo.skills.forEach(skill => {
    const li = document.createElement('li');
    li.innerText = skill;
    skillsList.appendChild(li);
});
