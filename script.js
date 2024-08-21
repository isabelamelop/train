const playPauseButton = document.getElementById('playPause');
const messageDiv = document.getElementById('message');
const morImage = document.getElementById('morImage');
let currentFrame = 0;
const frames = [
    document.getElementById('audioPlayer1'),
    document.getElementById('audioPlayer2'),
    document.getElementById('audioPlayer3'),
    document.getElementById('audioPlayer4')
];

// Função para tocar/pausar a música
function togglePlay() {
    const frame = frames[currentFrame];

    // Tenta tocar o áudio e exibe erros, se houver
    frame.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    
    if (frame.style.display === 'none') {
        frame.style.display = 'block';
    }

    // Exibir a mensagem e a imagem
    if (frame.contentWindow.document.readyState === 'complete') {
        playPauseButton.textContent = 'Pause';
        messageDiv.style.display = 'block';
        morImage.style.display = 'block';
    }
    
    // Avança para o próximo iframe quando o atual acabar
    frame.onload = () => {
        frame.contentWindow.addEventListener('message', event => {
            if (event.data === 'ended') {
                frame.style.display = 'none'; // Oculta o frame atual
                currentFrame = (currentFrame + 1) % frames.length; // Avança para o próximo frame
                frames[currentFrame].style.display = 'block'; // Mostra o próximo frame
                frames[currentFrame].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
            }
        });
    };
}
