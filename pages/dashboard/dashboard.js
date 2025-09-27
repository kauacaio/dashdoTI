/*
    Lógica: Renderização dos Avisos Essenciais e Dinâmica de Tempo/Frase.
*/

// Mock data (Apenas para demonstração, use seu arquivo data/mock-data.js)
const mockQuotes = [
    "A inovação distingue um líder de um seguidor. - Steve Jobs",
    "A simplicidade é a sofisticação máxima. - Leonardo da Vinci",
    "Foque na experiência, não apenas na funcionalidade. - Don Norman",
    "O futuro pertence àqueles que acreditam na beleza de seus sonhos. - Eleanor Roosevelt",
    "Design não é apenas o que parece. É como funciona. - Steve Jobs"
];

const getQuoteOfTheDay = () => {
    // Retorna uma frase única por dia
    const today = new Date().getDate();
    return mockQuotes[today % mockQuotes.length];
};


const setDynamicGreeting = () => {
    const now = new Date();
    const hour = now.getHours();
    const greetingTitleElement = document.getElementById('greeting-title');
    const welcomeBoxElement = document.getElementById('welcome-box');
    let greeting = "";
    let timeOfDayClass = "";

    // 1. Determina a Saudação e a Classe de Sombra
    if (hour >= 5 && hour < 12) {
        greeting = "Bom dia";
        timeOfDayClass = "day";
    } else if (hour >= 12 && hour < 18) {
        greeting = "Boa tarde";
        timeOfDayClass = "afternoon";
    } else {
        greeting = "Boa noite";
        timeOfDayClass = "night";
    }

    // 2. Aplica a Saudação e a Sombra
    if (greetingTitleElement) {
        // Concatenamos a saudação com o posicionamento de marca
        greetingTitleElement.textContent = `${greeting}. Que sua jornada seja fluida.`;
    }
    
    if (welcomeBoxElement) {
        // Aplica a classe CSS para a sombra dinâmica
        welcomeBoxElement.classList.add(timeOfDayClass);
    }

    // 3. Aplica a Frase do Dia
    const quoteElement = document.getElementById('quote-of-the-day');
    if (quoteElement) {
        quoteElement.textContent = getQuoteOfTheDay();
    }
};


const renderNotices = () => {
    const noticeContainer = document.getElementById('notice-container');

    // Verifica se mockNoticeData existe 
    if (typeof mockNoticeData === 'undefined' || !Array.isArray(mockNoticeData) || mockNoticeData.length === 0) {
        // Mensagem padrão para a área de avisos
        noticeContainer.innerHTML = '<p class="notice-empty" style="font-style: italic; color: var(--color-text-secondary); padding: 1rem;">Nenhum aviso essencial pendente no momento. Foco total nas atividades.</p>';
        return;
    }

    // Renderiza os cards de aviso
    mockNoticeData.forEach(item => {
        const noticeCard = document.createElement('div');
        noticeCard.classList.add('notice-card', item.type); 
        
        noticeCard.innerHTML = `
            <h4>${item.title}</h4>
            <p>${item.message}</p>
        `;

        noticeContainer.appendChild(noticeCard);
    });
};


document.addEventListener('DOMContentLoaded', () => {
    setDynamicGreeting();
    renderNotices();
});