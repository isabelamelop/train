// script.js

const tracks = [
    'tracks/musica.mp3' // Música única para reprodução em loop
];

let currentTrackIndex = 0;

// Seleciona os botões e o elemento de áudio
const audioElement = document.getElementById('musica');
const playPauseButton = document.getElementById('playPause');
const nextButton = document.getElementById('next');
const progressBar = document.getElementById('progress');
const messageDiv = document.getElementById('message');

// Carrega a música inicial e configura o loop
audioElement.src = tracks[currentTrackIndex];
audioElement.loop = true; // Configura para repetir a música quando acabar

// Função para tocar/pausar a música
function togglePlay() {
    if (audioElement.paused) {
        audioElement.play();
        playPauseButton.textContent = 'Pause';
        messageDiv.style.display = 'block'; // Exibe a mensagem
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
