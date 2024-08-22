document.addEventListener('DOMContentLoaded', (event) => {
    const audioElement = document.getElementById('musica');
    const playPauseButton = document.getElementById('playPause');
    const nextButton = document.getElementById('next');
    const nextButtonInMessage = document.getElementById('nextInMessage');
    const messageDiv = document.getElementById('message');
    const morImage = document.getElementById('morImage');

    let currentTrack = 0;

    // Lista de arquivos de música
    const tracks = [
        'musica10.mp3',
        'musica.mp3',
        'musica.mp3',
        'musica.mp3',
        'musica.mp3'
    ];

    // Define a primeira música para tocar
    audioElement.src = tracks[currentTrack];

    function togglePlay() {
        if (audioElement.paused) {
            audioElement.play();
            playPauseButton.textContent = 'Pausar';
            messageDiv.style.display = 'block';
            morImage.style.display = 'block';
            nextButton.style.display = 'block'; // Exibe o botão "Próxima Música" após clicar em play
            nextButtonInMessage.style.display = 'block'; // Exibe o botão "Próxima Música" dentro da mensagem
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

    // Adiciona o evento de terminar a música para tocar a próxima
    audioElement.addEventListener('ended', nextTrack);

    // Atribui a função togglePlay ao botão playPause
    playPauseButton.addEventListener('click', togglePlay);

    // Atribui a função nextTrack ao botão next
    nextButton.addEventListener('click', nextTrack);

    // Atribui a função nextTrack ao botão next dentro da mensagem
    nextButtonInMessage.addEventListener('click', nextTrack);
});
