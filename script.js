const elements = {
    music: document.getElementById('christmas-music'),
    musicToggle: document.getElementById('music-toggle'),
    starsContainer: document.querySelector('.stars')
};

function toggleMusic() {
    const isPlaying = elements.music.paused;
    elements.music[isPlaying ? 'play' : 'pause']();
    elements.musicToggle.innerHTML = `<span class="music-icon">${isPlaying ? '🎵' : '🔇'}</span> ${isPlaying ? 'Pause' : 'Play'} Music`;
}

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.innerHTML = '❄';

    const size = Math.random() * 20 + 10;
    const duration = Math.random() * 3 + 2;
    
    Object.assign(snowflake.style, {
        left: `${Math.random() * 100}vw`,
        fontSize: `${size}px`,
        animationDuration: `${duration}s`,
        animationDelay: `${Math.random() * 2}s`,
        opacity: Math.random() * 0.6 + 0.4
    });
    
    document.body.appendChild(snowflake);
    setTimeout(() => snowflake.remove(), duration * 1000 + 2000);
}

function createStarryBackground() {
    const fragment = document.createDocumentFragment();
    
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        const size = Math.random() * 2 + 1;
        
        Object.assign(star.style, {
            position: 'absolute',
            width: `${size}px`,
            height: `${size}px`,
            background: 'white',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: '0 0 3px white',
            borderRadius: '50%',
            animation: `twinkle ${Math.random() * 4 + 1}s infinite`
        });
        
        fragment.appendChild(star);
    }
    
    elements.starsContainer.appendChild(fragment);
}

elements.musicToggle.addEventListener('click', toggleMusic);

createStarryBackground();
setInterval(createSnowflake, 100);
