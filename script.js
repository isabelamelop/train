const audioElement = document.getElementById('musica');
const playPauseButton = document.getElementById('playPause');
const nextButton = document.getElementById('next');
const randomButton = document.getElementById('random');
const extraControls = document.getElementById('extraControls');
const messageDiv = document.getElementById('message');
const morImage = document.getElementById('morImage');

let isShuffling = false;
let currentTrack = 0;

const tracks = [
    'musica10.mp3',
    'musica11.mp3',
    'musica12.mp3',
    'musica3.mp3'
];

audioElement.src = tracks[currentTrack];

function togglePlay() {
    if (audioElement.paused) {
        audioElement.play();
        playPauseButton.textContent = 'Pausar';
        messageDiv.style.display = 'block';
        morImage.style.display = 'block';
        extraControls.style.display = 'flex'; // Exibe os botões após clicar em play
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

function toggleShuffle() {
    isShuffling = !isShuffling;
    randomButton.textContent = isShuffling ? 'Aleatório: Ligado' : 'Aleatório: Desligado';
}

audioElement.addEventListener('ended', () => {
    if (isShuffling) {
        currentTrack = Math.floor(Math.random() * tracks.length);
    } else {
        nextTrack();
    }
    audioElement.play();
});
