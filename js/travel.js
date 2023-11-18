const player = document.getElementById('Player');

function playm(path) {
    player.src = path;
    player.loop = true;
    player.play();
}

function stopm() {
    player.pause();
    player.currentTime = 0;
    player.loop = false;
}

function showMusicModal() {
    const musicModal = document.getElementById('musicModal');
    musicModal.style.display = 'block';

    document.querySelector('#yes').addEventListener('click', enableMusic);
    document.querySelector('#no').addEventListener('click', disableMusic);
}

function enableMusic() {
    document.getElementById('musicModal').style.display = 'none';
    playm('../music/american.mp3');
    handleVisibilityChange('apostle', () => playm('../music/american.mp3'), stopm);
    handleVisibilityChange('shanghai', () => playm('../music/chinese.mp3'), stopm);
    handleVisibilityChange('rome', () => playm('../music/italian.mp3'), stopm);
    handleVisibilityChange('dubai', () => playm('../music/dubai.mp3'), stopm);
}

function disableMusic() {
    player.muted = true;
    document.getElementById('musicModal').style.display = 'none';
    document.getElementById('Player').style.display = 'none';
}

function handleVisibilityChange(elementId, onVisible, onHidden) {
    const element = document.getElementById(elementId);

    if (!element) {
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    onVisible();
                } else {
                    onHidden();
                }
            });
        },
        { threshold: 0.3 }
    );

    observer.observe(element);
}

window.addEventListener('load', function () {
    if (window.innerWidth >= 1500) {
        showMusicModal();
    }
});