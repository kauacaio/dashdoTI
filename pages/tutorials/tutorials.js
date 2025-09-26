document.addEventListener('DOMContentLoaded', () => {

    // Elementos de UI
    const bannerCarousel = document.getElementById('banner-carousel');
    const bannerIndicators = document.getElementById('banner-indicators');
    const popularGrid = document.getElementById('popular-grid');
    const recentGrid = document.getElementById('recent-grid');
    const searchBar = document.getElementById('search-bar');
    const themeToggleBtn = document.getElementById('theme-toggle');

    // Elementos do Modal
    const videoModal = document.getElementById('video-modal');
    const modalVideoPlayer = document.getElementById('modal-video-player');
    const closeModalBtn = document.getElementById('close-modal');

    let currentBannerIndex = 0;
    let bannerInterval;

    // --- LÓGICA DO MODAL ---
    const openVideoModal = (videoUrl) => {
        const finalUrl = videoUrl.replace('?autoplay=1', '').replace('&autoplay=1', '') + '?autoplay=1&rel=0&modestbranding=1';
        
        modalVideoPlayer.src = ''; // Limpa antes
        modalVideoPlayer.src = finalUrl; // Define o novo src
        
        videoModal.style.display = 'flex';
        videoModal.style.alignItems = 'center';
        videoModal.style.justifyContent = 'center';
        document.body.style.overflow = 'hidden';
    };

    const closeVideoModal = () => {
        modalVideoPlayer.src = ''; 
        videoModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    closeModalBtn.addEventListener('click', closeVideoModal);
    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            closeVideoModal();
        }
    });


    // --- LÓGICA DO CARROSSEL ---
    const updateBannerPosition = () => {
        const itemWidth = bannerCarousel.firstElementChild ? bannerCarousel.firstElementChild.clientWidth : 0;
        bannerCarousel.style.transform = `translateX(-${currentBannerIndex * itemWidth}px)`;
        
        document.querySelectorAll('.indicator').forEach((ind, i) => {
            ind.classList.toggle('active', i === currentBannerIndex);
        });
    };

    const nextBanner = () => {
        const totalItems = bannerCarousel.children.length;
        currentBannerIndex = (currentBannerIndex + 1) % totalItems;
        updateBannerPosition();
    };

    const startBannerCarousel = () => {
        clearInterval(bannerInterval);
        bannerInterval = setInterval(nextBanner, 6000); 
    };

    const createBannerItem = (tutorial) => {
        const item = document.createElement('div');
        item.className = 'banner-item';
        item.style.backgroundImage = `url(${tutorial.imageUrl})`;
        
        item.innerHTML = `
            <div class="banner-content">
                <p class="ti-play-logo-banner">TI PLAY DESTAQUE</p>
                <h2 class="banner-title">${tutorial.title}</h2>
                <p class="banner-subtitle">${tutorial.description}</p>
                <a href="#" class="play-button" data-video-url="${tutorial.videoUrl}">Assistir Agora</a>
            </div>
        `;
        return item;
    };

    const renderBanner = (tutorialsList) => {
        bannerCarousel.innerHTML = '';
        bannerIndicators.innerHTML = '';

        tutorialsList.slice(0, 3).forEach((tutorial, index) => {
            bannerCarousel.appendChild(createBannerItem(tutorial));

            const indicator = document.createElement('div');
            indicator.className = 'indicator';
            indicator.addEventListener('click', () => {
                currentBannerIndex = index;
                updateBannerPosition();
                startBannerCarousel();
            });
            bannerIndicators.appendChild(indicator);
        });

        document.querySelectorAll('.play-button').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                openVideoModal(button.dataset.videoUrl);
            });
        });

        if (tutorialsList.length > 0) {
            currentBannerIndex = 0;
            updateBannerPosition();
            startBannerCarousel();
        }
    };


    // --- LÓGICA DOS CARDS ---
    const createTutorialCard = (item) => {
        const wrapper = document.createElement('div');
        wrapper.style.display = 'inline-block';
        wrapper.style.marginRight = '1.5rem';

        const card = document.createElement('div');
        card.className = 'tutorial-card';
        
        card.innerHTML = `
            <div class="card-image-wrapper">
                <img src="${item.imageUrl}" alt="${item.title}" loading="lazy">
            </div>
            <div class="card-title-overlay">
                <h4>${item.title}</h4>
            </div>
        `;
        
        const titleBelow = document.createElement('p');
        titleBelow.className = 'card-title-below';
        titleBelow.textContent = item.title;

        card.addEventListener('click', () => {
            openVideoModal(item.videoUrl);
        });

        wrapper.appendChild(card);
        wrapper.appendChild(titleBelow);
        return wrapper;
    };

    const renderTutorials = (container, tutorialList) => {
        container.innerHTML = '';
        if (tutorialList && tutorialList.length > 0) {
            tutorialList.forEach(item => {
                container.appendChild(createTutorialCard(item));
            });
        }
    };

    // --- INICIALIZAÇÃO E FILTRAGEM ---
    const filterTutorials = (searchTerm) => {
        const term = searchTerm.toLowerCase();
        const filtered = tutorials.filter(t => t.title.toLowerCase().includes(term));
        
        const banner = filtered.slice(0, 3); 
        const popular = filtered.slice(3, 7); 
        const recent = filtered.slice(7);

        renderBanner(banner);
        renderTutorials(popularGrid, popular);
        renderTutorials(recentGrid, recent);
    };

    const initializeTIPlay = () => {
        // Inicia a renderização do conteúdo no carregamento do DOM
        filterTutorials('');
        window.addEventListener('resize', updateBannerPosition);
    };
    
    // ----------------------------------------------------
    // INÍCIO DO SISTEMA - DOMContentLoaded
    // ----------------------------------------------------
    
    initializeTIPlay();
    
    // Theme Toggle e Busca
    searchBar.addEventListener('keyup', (e) => {
        filterTutorials(e.target.value);
    });

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        themeToggleBtn.textContent = document.body.classList.contains('dark-theme') ? 'Modo Claro' : 'Modo Escuro';
    });
});