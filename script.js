const audioElement = document.getElementById('musica');
const playPauseButton = document.getElementById('playPause');
const nextButton = document.getElementById('next');
const randomButton = document.getElementById('random');
const progressBar = document.getElementById('progress');
const messageDiv = document.getElementById('message');
const morImage = document.getElementById('morImage');

const tracks = [
    'musica10.mp3',
    'musica11.mp3',
    'musica3.mp3',
    'musica12.mp3'
];

let currentTrackIndex = 0;

// Função para tocar/pausar a música
function togglePlay() {
    if (audioElement.paused) {
        audioElement.src = tracks[currentTrackIndex];
        audioElement.play().catch(error => {
            console.error('Erro ao tentar tocar o áudio:', error);
        });
        playPauseButton.textContent = 'Pause';
        messageDiv.style.display = 'block'; // Exibe a mensagem
        morImage.style.display = 'block'; // Exibe a imagem
        nextButton.style.display = 'inline-block'; // Exibe o botão Próxima Música
        randomButton.style.display = 'inline-block'; // Exibe o botão Aleatório
    } else {
        audioElement.pause();
        playPauseButton.textContent = 'Play';
    }
}

// Função para tocar a próxima faixa
function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    audioElement.src = tracks[currentTrackIndex];
    audioElement.play();
    playPauseButton.textContent = 'Pause';
}

// Função para tocar uma faixa aleatória
function playRandomTrack() {
    currentTrackIndex = Math.floor(Math.random() * tracks.length);
    audioElement.src = tracks[currentTrackIndex];
    audioElement.play();
    playPauseButton.textContent = 'Pause';
}

// Atualiza o controle de progresso
audioElement.addEventListener('timeupdate', () => {
    const progress = (audioElement.currentTime / audioElement.duration) * 100;
    progressBar.value = progress;
});

// Manipula o clique na barra de progresso
progressBar.addEventListener('input', () => {
    const newTime = (progressBar.value / 100) * audioElement.duration;
    audioElement.currentTime = newTime;
});
