// Fog of War Reveal JavaScript

document.addEventListener('DOMContentLoaded', () => {
    const designs = [
        {
            title: 'Mobile Banking Reimagined',
            category: '🎨 UI/UX Design',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            icon: '?'
        },
        {
            title: 'E-Commerce Platform',
            category: '💻 Web Development',
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            icon: '?'
        },
        {
            title: 'Fitness & Wellness App',
            category: '📱 Mobile Design',
            gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            icon: '?'
        },
        {
            title: 'Artisan Coffee Branding',
            category: '🎯 Brand Identity',
            gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
            icon: '?'
        },
        {
            title: 'Data Visualization Suite',
            category: '🎬 Motion Design',
            gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
            icon: '?'
        },
        {
            title: 'Smart Home Control',
            category: '🏠 IoT Interface',
            gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
            icon: '?'
        },
        {
            title: 'Travel Booking Experience',
            category: '✈️ Travel Tech',
            gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
            icon: '?'
        },
        {
            title: 'Meditation & Mindfulness',
            category: '🧘 Wellness',
            gradient: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
            icon: '?'
        },
        {
            title: 'Crypto Trading Dashboard',
            category: '📊 Fintech',
            gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
            icon: '?'
        }
    ];

    const mapContainer = document.getElementById('mapContainer');
    const revealCount = document.getElementById('revealCount');
    const revealAnimation = document.getElementById('revealAnimation');
    let revealed = 0;

    // Generate design regions
    designs.forEach((design, index) => {
        const region = document.createElement('div');
        region.className = 'design-region';
        region.innerHTML = `
            <div class="design-background" style="background-image: ${design.gradient};"></div>
            <div class="fog-layer">
                <div class="mystery-icon">${design.icon}</div>
            </div>
            <div class="reveal-hint">Click to reveal</div>
            <div class="design-info">
                <h3 class="design-title">${design.title}</h3>
                <p class="design-category">${design.category}</p>
            </div>
        `;

        region.addEventListener('click', (e) => {
            if (!region.classList.contains('revealed')) {
                revealRegion(region, e);
                revealed++;
                revealCount.textContent = revealed;

                if (revealed === designs.length) {
                    setTimeout(showCompletion, 800);
                }
            }
        });

        mapContainer.appendChild(region);
    });

    function revealRegion(region, event) {
        region.classList.add('revealed');

        // Create ripple effect
        const rect = region.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        const ripple = document.createElement('div');
        ripple.className = 'reveal-ripple';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.marginLeft = '-250px';
        ripple.style.marginTop = '-250px';
        revealAnimation.appendChild(ripple);

        setTimeout(() => ripple.remove(), 1000);

        // Create sparkles
        for (let i = 0; i < 12; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = x + 'px';
            sparkle.style.top = y + 'px';

            const angle = (i / 12) * Math.PI * 2;
            const distance = 100 + Math.random() * 50;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;

            sparkle.style.setProperty('--tx', tx + 'px');
            sparkle.style.setProperty('--ty', ty + 'px');

            revealAnimation.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 800);
        }
    }

    function showCompletion() {
        const overlay = document.getElementById('overlay');
        const banner = document.getElementById('completionBanner');

        overlay.classList.add('show');
        banner.classList.add('show');

        overlay.addEventListener('click', () => {
            overlay.classList.remove('show');
            banner.classList.remove('show');
        });
    }
});
