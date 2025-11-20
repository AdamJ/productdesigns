// Discovery & Progress System JavaScript

document.addEventListener('DOMContentLoaded', () => {
    const designs = [
        { title: 'Mobile Banking App', category: 'ui', description: 'Secure and intuitive financial management', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
        { title: 'E-Commerce Platform', category: 'web', description: 'Modern shopping with AI recommendations', gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
        { title: 'Fitness Tracker', category: 'mobile', description: 'Gamified health and wellness tracking', gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' },
        { title: 'Coffee Shop Brand', category: 'branding', description: 'Warm and inviting brand identity', gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' },
        { title: 'Animated Dashboard', category: 'motion', description: 'Data visualization with delightful animations', gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)' },
        { title: 'Smart Home Interface', category: 'ui', description: 'Centralized IoT device control', gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)' },
        { title: 'Travel Booking Site', category: 'web', description: 'Seamless trip planning experience', gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)' },
        { title: 'Meditation App', category: 'mobile', description: 'Mindfulness and relaxation companion', gradient: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)' },
        { title: 'Tech Startup Logo', category: 'branding', description: 'Bold and innovative brand mark', gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)' }
    ];

    const categoryIcons = {
        ui: '🎨',
        web: '💻',
        mobile: '📱',
        branding: '🎯',
        motion: '🎬'
    };

    const gallery = document.getElementById('gallery');
    const viewedSet = new Set();
    const categoriesViewed = new Set();

    // Generate design cards
    designs.forEach((design, index) => {
        const card = document.createElement('div');
        card.className = 'design-card';
        card.innerHTML = `
            <div class="design-image" style="background-image: ${design.gradient};">
                <div class="category-tag">${categoryIcons[design.category]} ${design.category.toUpperCase()}</div>
            </div>
            <div class="design-content">
                <h3 class="design-title">${design.title}</h3>
                <p class="design-description">${design.description}</p>
            </div>
        `;

        card.addEventListener('click', () => {
            if (!viewedSet.has(index)) {
                viewedSet.add(index);
                categoriesViewed.add(design.category);
                card.classList.add('viewed');
                updateStats();
                checkAchievements();
            }
        });

        gallery.appendChild(card);
    });

    function updateStats() {
        const viewed = viewedSet.size;
        const total = designs.length;
        const percentage = (viewed / total) * 100;

        document.getElementById('viewedCount').textContent = viewed;
        document.getElementById('progressFill').style.width = percentage + '%';

        // Update level
        const level = Math.floor(viewed / 3) + 1;
        document.getElementById('levelBadge').textContent = `LVL ${level}`;

        // Update category badges
        categoriesViewed.forEach(cat => {
            const badge = document.querySelector(`[data-category="${cat}"]`);
            if (badge && !badge.classList.contains('unlocked')) {
                badge.classList.add('unlocked');
            }
        });

        // Show notification
        showNotification(`+10 XP · ${viewed}/${total} Designs Viewed`);
    }

    function showNotification(message) {
        const notification = document.getElementById('notification');
        notification.textContent = message;
        notification.classList.add('show');

        setTimeout(() => {
            notification.classList.remove('show');
        }, 2000);
    }

    function checkAchievements() {
        const viewed = viewedSet.size;

        if (viewed === 3) {
            showAchievement('Curious Explorer', 'Viewed your first 3 designs');
        } else if (viewed === 5) {
            showAchievement('Design Enthusiast', 'Halfway through the collection');
        } else if (viewed === designs.length) {
            showAchievement('Completionist', 'Viewed every single design!');
        }

        if (categoriesViewed.size === 5) {
            showAchievement('Category Master', 'Explored all design categories');
        }
    }

    function showAchievement(title, description) {
        const overlay = document.getElementById('overlay');
        const popup = document.getElementById('achievementPopup');
        const achievementText = document.getElementById('achievementText');

        achievementText.textContent = description;
        overlay.classList.add('show');
        popup.classList.add('show');

        setTimeout(() => {
            overlay.classList.remove('show');
            popup.classList.remove('show');
        }, 3000);

        overlay.addEventListener('click', () => {
            overlay.classList.remove('show');
            popup.classList.remove('show');
        });
    }
});
