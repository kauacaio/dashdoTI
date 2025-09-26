document.addEventListener('DOMContentLoaded', () => {
    const renderLibrary = () => {
        const container = document.getElementById('library-container');
        container.innerHTML = '';
        library.forEach((item) => {
            const card = document.createElement('a');
            card.href = item.fileUrl;
            card.className = 'library-card';
            card.innerHTML = `
                <img src="${item.coverUrl}" alt="${item.title}">
                <div class="library-card-info">
                    <h4>${item.title}</h4>
                </div>
            `;
            container.appendChild(card);
        });
    };

    renderLibrary();
});