 const music = document.getElementById('christmas-music');
        const musicToggle = document.getElementById('music-toggle');
        let isPlaying = false;

        musicToggle.addEventListener('click', () => {
            if (isPlaying) {
                music.pause();
                musicToggle.innerHTML = '<span class="music-icon">🔇</span> Play Music';
            } else {
                music.play();
                musicToggle.innerHTML = '<span class="music-icon">🎵</span> Pause Music';
            }
            isPlaying = !isPlaying;
        });

        let snowEnabled = true;
        const toggleSnow = document.getElementById('toggle-snow');
        
        toggleSnow.addEventListener('click', () => {
            snowEnabled = !snowEnabled;
            toggleSnow.textContent = snowEnabled ? "Stop Snow" : "Start Snow";
            toggleSnow.classList.toggle('bg-blue-500/90');
            toggleSnow.classList.toggle('bg-gray-500/90');
        });
        function createSnowflake() {
            if (!snowEnabled) return;
            
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');
            snowflake.innerHTML = '❄';

            const size = Math.random() * 20 + 10;
            const startPosition = Math.random() * 100;
            const duration = Math.random() * 3 + 2;
            const delay = Math.random() * 2;
            
            Object.assign(snowflake.style, {
                left: `${startPosition}vw`,
                fontSize: `${size}px`,
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
                opacity: Math.random() * 0.6 + 0.4
            });
            
            document.body.appendChild(snowflake);
            
            setTimeout(() => snowflake.remove(), (duration + delay) * 1000);
        }

        setInterval(createSnowflake, 100);

        const starsContainer = document.querySelector('.stars');
        function createStarryBackground() {
            starsContainer.innerHTML = '';
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
                
                starsContainer.appendChild(star);
            }
        }
        createStarryBackground();
