document.addEventListener('DOMContentLoaded', () => {
    const renderAgenda = () => {
        const container = document.getElementById('agenda-list');
        container.innerHTML = '';
        agenda.forEach(item => {
            const p = document.createElement('p');
            p.className = 'agenda-item';
            p.innerHTML = `<strong>${item.date}</strong>: ${item.event}`;
            container.appendChild(p);
        });
    };

    renderAgenda();
});