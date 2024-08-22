const audioElement = document.getElementById('musica');
const playPauseButton = document.getElementById('playPause');
const nextButton = document.getElementById('next');
const messageDiv = document.getElementById('message');
const morImage = document.getElementById('morImage');

let currentTrack = 0;

// Lista de arquivos de música
const tracks = [
    'musica10.mp3',
    'musica11.mp3',
    'musica12.mp3',
    'musica3.mp3',
    'musica2.mp3'
];

// Define a primeira música para tocar
audioElement.src = tracks[currentTrack];

function togglePlay() {
    if (audioElement.paused) {
        audioElement.play();
        playPauseButton.textContent = 'Pausar';
        messageDiv.style.display = 'block'; // Exibe a mensagem
        morImage.style.display = 'block'; // Exibe a imagem
        nextButton.style.display = 'block'; // Exibe o botão "Próxima Música"
    } else {
        audioElement.pause();
        playPauseButton.textContent = 'Só clica se me ama';
    }
}

function nextTrack() {
    currentTrack = (currentTrack + 1) % tracks.length;
    audioElement.src = tracks[currentTrack];
    audioElement.play();
}

// Adiciona um ouvinte de eventos para reproduzir a próxima música quando a atual terminar
audioElement.addEventListener('ended', nextTrack);
