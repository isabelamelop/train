const audioElement = document.getElementById('musica');
const playPauseButton = document.getElementById('playPause');
const nextButton = document.getElementById('next');
const shuffleButton = document.getElementById('shuffle');
const messageDiv = document.getElementById('message');
const morImage = document.getElementById('morImage');

// Define os links de áudio
const audioLinks = [
    'musica.mp3',
    'musica2.mp3',
    'musica3.mp3',
    'musica4.mp3'
];

let currentTrack = 0;
let isShuffle = false;

// Define a URL inicial da música
audioElement.src = audioLinks[currentTrack];
audioElement.loop = false;

// Função para tocar/pausar a música
function togglePlay() {
    if (audioElement.paused) {
        audioElement.play().catch(error => {
            console.error('Erro ao tentar tocar o áudio:', error);
        });
        playPauseButton.textContent = 'Pause';
        messageDiv.style.display = 'block'; // Exibe a mensagem
        morImage.style.display = 'block'; // Exibe a imagem
    } else {
        audioElement.pause();
        playPauseButton.textContent = 'Play';
    }
}

// Função para mudar para a próxima faixa
function nextTrack() {
    if (isShuffle) {
        // Seleciona uma faixa aleatória
        currentTrack = Math.floor(Math.random() * audioLinks.length);
    } else {
        // Muda para a próxima faixa
        currentTrack = (currentTrack + 1) % audioLinks.length;
    }
    audioElement.src = audioLinks[currentTrack];
    audioElement.play().catch(error => {
        console.error('Erro ao tentar tocar a próxima faixa:', error);
    });
    playPauseButton.textContent = 'Pause';
}

// Função para alternar entre reprodução aleatória e ordem
function toggleShuffle() {
    isShuffle = !isShuffle;
    shuffleButton.textContent = isShuffle ? 'Ordem' : 'Aleatório';
}

// Quando a música termina, troca para a próxima
audioElement.addEventListener('ended', nextTrack);
