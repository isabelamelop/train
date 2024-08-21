const audioElement = document.getElementById('musica');
const playPauseButton = document.getElementById('playPause');
const nextButton = document.getElementById('next');
const progressBar = document.getElementById('progress');
const messageDiv = document.getElementById('message');

// Define a URL da música do Google Drive
const initialTrack = 'https://drive.google.com/uc?export=download&id=178IqvGVzhb3VPQfLlcWqOH5d_hPB8Yn0';
const nextTrack = 'musica.mp3';

let isInitialTrack = true;

// Configura a faixa inicial e o loop
audioElement.src = initialTrack;
audioElement.loop = true;

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
    if (isInitialTrack) {
        audioElement.src = nextTrack;
        isInitialTrack = false; // Define que a próxima faixa foi carregada
    } else {
        audioElement.currentTime = 0; // Reinicia a faixa atual
    }
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
