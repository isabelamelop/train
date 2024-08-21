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

function togglePlay() {
    const frame = frames[currentFrame];
    // Play the current iframe
    frame.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    
    if (frame.style.display === 'none') {
        frame.style.display = 'block';
    }

    playPauseButton.textContent = 'Pause';
    messageDiv.style.display = 'block';
    morImage.style.display = 'block';
    
    // Setup for next frame switching if supported
    frame.onload = () => {
        frame.contentWindow.addEventListener('message', event => {
            if (event.data === 'ended') {
                frame.style.display = 'none'; // Hide current frame
                currentFrame = (currentFrame + 1) % frames.length; // Move to next frame
                frames[currentFrame].style.display = 'block'; // Show next frame
                frames[currentFrame].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
            }
        });
    };
}
