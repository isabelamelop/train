const audioElement = document.getElementById('musica');
const playPauseButton = document.getElementById('playPause');
const nextButton = document.getElementById('next');
const randomButton = document.getElementById('random');
const messageDiv = document.getElementById('message');
const morImage = document.getElementById('morImage');

const playlist = ['musica10.mp3', 'musica11.mp3', 'musica12.mp3'];
let currentTrack = 0;
let isShuffle = false;

// Define a música inicial
audioElement.src = playlist[currentTrack];
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
        nextButton.style.display = 'block'; // Exibe o botão de próxima música
        randomButton.style.display = 'block'; // Exibe o botão de aleatório
    } else {
        audioElement.pause();
        playPauseButton.textContent = 'Play';
    }
}

// Função para tocar a próxima faixa
function nextTrack() {
    currentTrack = (currentTrack + 1) % playlist.length;
    audioElement.src = playlist[currentTrack];
    audioElement.play();
    playPauseButton.textContent = 'Pause';
}

// Função para alternar o modo aleatório
function toggleShuffle() {
    isShuffle = !isShuffle;
    randomButton.textContent = isShuffle ? 'Aleatório: On' : 'Aleatório: Off';
    if (isShuffle) {
        shufflePlaylist();
    } else {
        audioElement.src = playlist[currentTrack];
    }
}

// Função para embaralhar a playlist
function shufflePlaylist() {
    let shuffledPlaylist = playlist.slice();
    for (let i = shuffledPlaylist.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledPlaylist[i], shuffledPlaylist[j]] = [shuffledPlaylist[j], shuffledPlaylist[i]];
    }
    playlist.length = 0;
    playlist.push(...shuffledPlaylist);
    currentTrack = 0;
    audioElement.src = playlist[currentTrack];
}

audioElement.addEventListener('ended', () => {
    if (isShuffle) {
        nextTrack();
    } else {
        currentTrack = (currentTrack + 1) % playlist.length;
        audioElement.src = playlist[currentTrack];
        audioElement.play();
        playPauseButton.textContent = 'Pause';
    }
});
