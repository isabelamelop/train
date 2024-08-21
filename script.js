// script.js

const tracks = [
    'tracks/musica1.mp3',
    'tracks/musica2.mp3',
    'tracks/musica3.mp3' // Adicione mais músicas conforme necessário
];

let currentTrackIndex = 0;

// Seleciona os botões e o elemento de áudio
const audioElement = document.getElementById('musica');
const playPauseButton = document.getElementById('playPause');
const stopButton = document.getElementById('stop');
const nextButton = document.getElementById('next');
const progressBar = document.getElementById('progress');

// Função para tocar/pausar a música
function togglePlay() {
    if (audioElement.paused) {
        audioElement.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audioElement.pause();
        playPauseButton.textContent = 'Play';
    }
}

// Função para parar a música
function stopMusic() {
    audioElement.pause();
    audioElement.currentTime = 0;
    playPauseButton.textContent = 'Play';
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

// Carrega a primeira faixa
audioElement.src = tracks[currentTrackIndex];
