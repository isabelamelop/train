const audioElement = document.getElementById('musica');
const playPauseButton = document.getElementById('playPause');
const messageDiv = document.getElementById('message');
const morImage = document.getElementById('morImage');

// URL da música do Google Drive (substitua o id pelo correto)
audioElement.src = 'https://drive.google.com/uc?export=download&id=16d6q4S1cXT7KNfehiZpErScmBh3h-Z56';
audioElement.loop = true;

// Função para tocar/pausar a música
function togglePlay() {
    if (audioElement.paused) {
        audioElement.play().catch(error => {
            console.error('Erro ao tentar tocar o áudio:', error);
        });
        playPauseButton.textContent = 'Pausar'; // Atualiza o texto do botão
        messageDiv.style.display = 'block'; // Exibe a mensagem
        morImage.style.display = 'block'; // Exibe a imagem
    } else {
        audioElement.pause();
        playPauseButton.textContent = 'Dormir'; // Atualiza o texto do botão
    }
}
