// WOS - Was Operating System - Personalidade Natural e Motivacional
class WOS {
    constructor() {
        this.userProfile = {
            name: 'Administrador',
            role: 'admin',
            department: 'TI',
            preferences: {}
        };
        
        this.knowledgeBase = {
            policies: this.loadPolicies(),
            procedures: this.loadProcedures(),
            documents: this.loadDocuments(),
            faqs: this.loadFAQs(),
            jokes: this.loadJokes()
        };
        
        this.conversationHistory = [];
        this.currentContext = '';
        this.userMood = 'neutral';
        this.lastInteraction = new Date();
    }

    // Base de Conhecimento Atualizada com suas Políticas
    loadPolicies() {
        return {
            'equipamentos': {
                title: 'Política de Uso de Equipamentos',
                content: 'Todos os colaboradores são responsáveis pelos equipamentos que recebem. Devem zelar pela guarda, conservação e uso adequado. Danos, extravios ou perdas devem ser comunicados imediatamente à TI.',
                category: 'Equipamentos',
                lastUpdate: '2024-01-15',
                relevance: 'Alta'
            },
            'workspace': {
                title: 'Política de Workspace',
                content: 'Acessos gerenciados pela TI. Proibido acessar sites não confiáveis. Autenticação multifator obrigatória. Troca de senhas a cada 90 dias. Dados sensíveis não podem ser compartilhados via WhatsApp/Instagram.',
                category: 'Segurança',
                lastUpdate: '2024-02-01',
                relevance: 'Alta'
            },
            'periféricos': {
                title: 'Política de Periféricos',
                content: 'Mouse com fio: 1 ano | Mouse sem fio: 8 meses | Teclado: 1 ano | Fone comum: 6 meses. Uso de periféricos próprios permitido, exceto dispositivos de armazenamento.',
                category: 'Equipamentos',
                lastUpdate: '2024-01-20',
                relevance: 'Média'
            },
            'chamados': {
                title: 'Sistema de Chamados',
                content: 'Sistema oficial: GLPI. Acesso: intranet.greenn.com.br. Usuário: e-mail sem @greenn.com.br. Senha: mesma do JumpCloud.',
                category: 'Processos',
                lastUpdate: '2024-03-10',
                relevance: 'Alta'
            },
            'chips salvy': {
                title: 'Política de Chips Salvy',
                content: 'Cada equipamento tem um chip Salvy. Troca após 24h do bloqueio. Setor comercial tem aparelho de reserva com 2 chips. Proibida troca direta entre colaboradores.',
                category: 'Comunicação',
                lastUpdate: '2024-03-15',
                relevance: 'Média'
            }
        };
    }

    loadProcedures() {
        return {
            'abertura chamado': {
                title: 'Como Abrir um Chamado',
                steps: [
                    'Acesse: intranet.greenn.com.br',
                    'Use seu e-mail (sem @greenn.com.br) como usuário',
                    'Senha: mesma do JumpCloud',
                    'Preencha o formulário com detalhes do problema',
                    'Acompanhe pelo sistema o andamento'
                ],
                estimatedTime: '5 minutos',
                requirements: ['Acesso à intranet', 'Credenciais válidas'],
                category: 'Suporte'
            },
            'reset senha': {
                title: 'Reset de Senha via JumpCloud',
                steps: [
                    'Acesse: console.jumpcloud.com',
                    'Entre com suas credenciais',
                    'Vá em "Segurança"',
                    'Clique em "Redefinição de Senhas"',
                    'Siga as instruções do sistema'
                ],
                estimatedTime: '3 minutos',
                requirements: ['Acesso ao JumpCloud'],
                category: 'Segurança'
            },
            'troca equipamento': {
                title: 'Procedimento de Troca de Equipamento',
                steps: [
                    'Solicitação via Task de Chamados',
                    'TI avalia conforme tabela padrão do setor',
                    'Aprovação administrativa se fora do padrão',
                    'Agendamento da troca',
                    'Assinatura do termo de responsabilidade'
                ],
                estimatedTime: '24-48 horas',
                requirements: ['Solicitação formal', 'Aprovação se necessário'],
                category: 'Equipamentos'
            }
        };
    }

    loadJokes() {
        return [
            "Por que o mouse é um bom dançarino? Porque tem um passinho muito suave! 🕺",
            "Qual é o antivírus mais romântico? Aquele que encontra o vírus do amor! 💘",
            "Por que o computador foi ao médico? Porque tinha um vírus! 🤒",
            "O que o HD disse para o SSD? Nossa conexão é muito rápida! ⚡",
            "Por que o teclado é educado? Porque sempre pede Enter! ⌨️"
        ];
    }

    // Sistema de Personalidade Natural
    getGreeting() {
        const hour = new Date().getHours();
        const greetings = {
            morning: ["Bom dia! 🌞", "Bom dia, solzinho! ☀️", "Bom dia, como amanheceu?"],
            afternoon: ["Boa tarde! 🌤️", "Boa tarde, tudo bem?", "Boa tarde, produtividade em alta?"],
            evening: ["Boa noite! 🌙", "Boa noite, como foi o dia?", "Boa noite, pronto para descansar?"]
        };

        let period = 'morning';
        if (hour >= 12 && hour < 18) period = 'afternoon';
        if (hour >= 18) period = 'evening';

        return greetings[period][Math.floor(Math.random() * greetings[period].length)];
    }

    getMotivationalPhrase() {
        const phrases = [
            "Você está fazendo um excelente trabalho! 💪",
            "Cada desafio é uma oportunidade de crescimento! 🌱",
            "Sua dedicação inspira toda a equipe! ✨",
            "Hoje é um ótimo dia para aprender algo novo! 📚",
            "Confie no seu potencial! Você é capaz! 🚀",
            "Pequenos progressos diários levam a grandes resultados! 📈"
        ];
        return phrases[Math.floor(Math.random() * phrases.length)];
    }

    getEncouragement() {
        const encouragements = [
            "Estou aqui para ajudar no que precisar! 🤗",
            "Vamos resolver isso juntos! 💫",
            "Conte comigo para qualquer dúvida! 📞",
            "Você não está sozinho nessa! 👥",
            "Cada problema tem solução! 🔍"
        ];
        return encouragements[Math.floor(Math.random() * encouragements.length)];
    }

    // Processamento de Linguagem Natural Melhorado
    analyzeIntent(userMessage) {
        const message = userMessage.toLowerCase();
        
        // Detectar pedido de piada
        if (message.includes('piada') || message.includes('humor') || message.includes('rir') || 
            message.includes('engraçado') || message.includes('alegrar')) {
            return {
                intent: 'joke',
                confidence: 0.9
            };
        }

        const intents = {
            'política': this.detectPolicyIntent.bind(this),
            'procedimento': this.detectProcedureIntent.bind(this),
            'documento': this.detectDocumentIntent.bind(this),
            'problema': this.detectProblemIntent.bind(this),
            'help': this.detectHelpIntent.bind(this),
            'saudação': this.detectGreetingIntent.bind(this),
            'agradecimento': this.detectThanksIntent.bind(this)
        };

        for (const [intent, detector] of Object.entries(intents)) {
            const result = detector(message);
            if (result) return result;
        }

        return this.getFallbackResponse();
    }

    detectThanksIntent(message) {
        const thanksWords = ['obrigado', 'obrigada', 'valeu', 'agradeço', 'grato', 'grata'];
        if (thanksWords.some(word => message.includes(word))) {
            return {
                intent: 'thanks',
                confidence: 0.95
            };
        }
        return null;
    }

    // Gerador de Respostas com Personalidade
    generateResponse(intent, userMessage) {
        let response;
        
        switch (intent.intent) {
            case 'policy':
                response = this.generatePolicyResponse(intent.policy);
                break;
            case 'procedure':
                response = this.generateProcedureResponse(intent.procedure);
                break;
            case 'joke':
                response = this.generateJokeResponse();
                break;
            case 'thanks':
                response = this.generateThanksResponse();
                break;
            case 'greeting':
                response = this.generateGreetingResponse();
                break;
            default:
                response = this.generateGeneralResponse(intent, userMessage);
        }

        // Adicionar toque motivacional ocasional (30% de chance)
        if (Math.random() < 0.3 && intent.intent !== 'thanks' && intent.intent !== 'greeting') {
            response.content += `\n\n${this.getMotivationalPhrase()}`;
        }

        return response;
    }

    generateJokeResponse() {
        const joke = this.knowledgeBase.jokes[Math.floor(Math.random() * this.knowledgeBase.jokes.length)];
        return {
            type: 'joke',
            content: `😂 **Aqui vai uma piadinha técnica:**\n\n${joke}\n\nEspero que tenha trazido um sorriso! 😊`,
            actions: [
                { text: '😂 Mais uma piada', action: 'tellJoke', data: '' },
                { text: '🔧 Preciso de ajuda', action: 'showHelp', data: '' }
            ]
        };
    }

    generateThanksResponse() {
        const responses = [
            `De nada! Fico feliz em ajudar! 😊 ${this.getEncouragement()}`,
            `Imagina! Estou aqui sempre que precisar! 🤗 ${this.getMotivationalPhrase()}`,
            `Por nada! Foi um prazer ajudar você! 💫 Continue com o excelente trabalho!`,
            `Às ordens! Conte comigo para qualquer coisa! 📚 ${this.getEncouragement()}`
        ];
        
        return {
            type: 'thanks',
            content: responses[Math.floor(Math.random() * responses.length)],
            actions: [
                { text: '🔧 Preciso de mais ajuda', action: 'showHelp', data: '' },
                { text: '💬 Conversar mais', action: 'continueChat', data: '' }
            ]
        };
    }

    generateGreetingResponse() {
        return {
            type: 'greeting',
            content: `${this.getGreeting()} ${this.userProfile.name}! 👋\n\nSou a WOS, sua assistente para políticas e procedimentos de TI. ${this.getEncouragement()}\n\nComo posso ajudá-lo hoje?`,
            actions: [
                { text: '🔐 Políticas', action: 'quickAction', data: 'policies' },
                { text: '🔧 Procedimentos', action: 'quickAction', data: 'procedures' },
                { text: '🎫 Chamados', action: 'quickAction', data: 'tickets' }
            ]
        };
    }

    generatePolicyResponse(policyKey) {
        const policy = this.knowledgeBase.policies[policyKey];
        if (policy) {
            return {
                type: 'policy',
                content: `📋 **${policy.title}**\n\n${policy.content}\n\n*Categoria: ${policy.category} | Atualização: ${policy.lastUpdate}*\n\n💡 **Lembrete:** ${this.getEncouragement()}`,
                actions: [
                    { text: '📄 Ver detalhes completos', action: 'openDocument', data: policyKey },
                    { text: '🔍 Políticas relacionadas', action: 'showRelated', data: 'policies' }
                ]
            };
        }
        return this.getPolicyOverview();
    }

    generateProcedureResponse(procedureKey) {
        const procedure = this.knowledgeBase.procedures[procedureKey];
        if (procedure) {
            const steps = procedure.steps.map((step, index) => `${index + 1}. ${step}`).join('\n');
            
            return {
                type: 'procedure',
                content: `🔧 **${procedure.title}**\n\n${steps}\n\n⏱️ Tempo estimado: ${procedure.estimatedTime}\n📋 Requisitos: ${procedure.requirements.join(', ')}\n\n${this.getEncouragement()}`,
                actions: [
                    { text: '🎬 Iniciar procedimento', action: 'startProcedure', data: procedureKey },
                    { text: '📋 Checklist completo', action: 'showChecklist', data: procedureKey }
                ]
            };
        }
        return this.getProceduresOverview();
    }

    generateGeneralResponse(intent, userMessage) {
        // Resposta para intenções não específicas com linguagem natural
        if (intent.intent === 'help') {
            return this.generateHelpResponse();
        }
        
        if (intent.intent === 'problem') {
            return this.generateProblemResponse(userMessage);
        }

        // Resposta padrão com linguagem natural
        const naturalResponses = [
            `Entendi sua pergunta! 🤔 Vou ajudar com isso...\n\n`,
            `Hmm, deixe-me pensar sobre isso... 💭\n\n`,
            `Ótima pergunta! Vamos ver como posso ajudar... 📚\n\n`,
            `Interessante! Deixe-me buscar as informações... 🔍\n\n`
        ];

        const selectedResponse = naturalResponses[Math.floor(Math.random() * naturalResponses.length)];
        
        return {
            type: 'general',
            content: selectedResponse + this.getFallbackResponse().content,
            actions: this.getFallbackResponse().actions
        };
    }

    getFallbackResponse() {
        const fallbacks = [
            `🤔 **Vamos tentar de outra forma?**\n\nPosso ajudar melhor se você me contar sobre:\n• Políticas específicas\n• Procedimentos operacionais\n• Problemas técnicos\n• Dúvidas sobre equipamentos\n\n${this.getEncouragement()}`,
            
            `💡 **Que tal ser mais específico?**\n\nTente perguntar sobre:\n• "Política de equipamentos"\n• "Como abrir um chamado"\n• "Procedimento de troca"\n• "Problema com senha"\n\n${this.getMotivationalPhrase()}`,
            
            `🔍 **Vamos encontrar a melhor solução juntos!**\n\nDigite "ajuda" para ver tudo que posso fazer ou me conte mais detalhes do que precisa.\n\n${this.getEncouragement()}`
        ];
        
        return {
            type: 'fallback',
            content: fallbacks[Math.floor(Math.random() * fallbacks.length)],
            actions: [
                { text: '❓ Ver ajuda completa', action: 'showHelp', data: '' },
                { text: '💬 Falar com humano', action: 'humanSupport', data: '' },
                { text: '😂 Preciso de uma piada', action: 'tellJoke', data: '' }
            ]
        };
    }

    generateHelpResponse() {
        return {
            type: 'help',
            content: `👋 **Olá ${this.userProfile.name}! Sou a WOS, sua assistente motivacional de TI!** 😊\n\n${this.getMotivationalPhrase()}\n\n**Posso ajudar você com:**\n\n🔐 **Políticas** - Equipamentos, workspace, periféricos, chips Salvy\n🔧 **Procedimentos** - Chamados, reset de senha, trocas\n📚 **Documentação** - Manuais e regulamentos\n🛠️ **Suporte** - Solução de problemas técnicos\n😂 **Motivação** - Piadas e palavras amigas quando precisar!\n\n**Exemplos de perguntas:**\n• "Qual a política de equipamentos?"\n• "Como abrir um chamado no GLPI?"\n• "Procedimento para troca de periférico"\n• "Preciso de uma piada!"\n\n${this.getEncouragement()}`,
            actions: [
                { text: '🔐 Ver políticas', action: 'showCategory', data: 'policies' },
                { text: '🔧 Ver procedimentos', action: 'showCategory', data: 'procedures' },
                { text: '😂 Quero uma piada', action: 'tellJoke', data: '' }
            ]
        };
    }

    generateProblemResponse(userMessage) {
        // Análise específica baseada nas políticas
        if (userMessage.includes('equipamento') || userMessage.includes('notebook') || userMessage.includes('computador')) {
            return {
                type: 'troubleshooting',
                content: `💻 **Sobre equipamentos, lembre-se:**\n\n• Comunique a TI imediatamente em caso de danos\n• Troca de equipamento via Task de Chamados\n• Equipamentos são adequados à função/setor\n• Após manutenção, o mesmo equipamento retorna\n\n${this.getEncouragement()}`,
                actions: [
                    { text: '🎫 Abrir chamado equipamento', action: 'openTicket', data: 'Equipamento' },
                    { text: '📋 Política completa', action: 'showPolicy', data: 'equipamentos' }
                ]
            };
        }
        
        if (userMessage.includes('senha') || userMessage.includes('login') || userMessage.includes('acesso')) {
            return {
                type: 'troubleshooting',
                content: `🔐 **Procedimento de senha:**\n\n• Troca obrigatória a cada 90 dias\n• Reset via JumpCloud console\n• Use autenticação multifator\n• Em caso de bloqueio, abra chamado\n\n💡 ${this.getMotivationalPhrase()}`,
                actions: [
                    { text: '🔑 Resetar senha', action: 'resetPassword', data: '' },
                    { text: '📋 Procedimento completo', action: 'showProcedure', data: 'reset senha' }
                ]
            };
        }

        if (userMessage.includes('chamado') || userMessage.includes('glpi') || userMessage.includes('task')) {
            return {
                type: 'troubleshooting',
                content: `🎫 **Sistema de Chamados GLPI:**\n\n• Acesso: intranet.greenn.com.br\n• Usuário: e-mail sem @greenn.com.br\n• Senha: mesma do JumpCloud\n• Acompanhe SLAs pelo sistema\n\n${this.getEncouragement()}`,
                actions: [
                    { text: '🔗 Acessar GLPI', action: 'openGLPI', data: '' },
                    { text: '📋 Procedimento completo', action: 'showProcedure', data: 'abertura chamado' }
                ]
            };
        }

        return {
            type: 'general_help',
            content: `🤔 **Entendi que há um problema.**\n\nPara ajudar melhor:\n• Descreva com mais detalhes\n• Qual sistema/equipamento?\n• Há mensagem de erro?\n\n${this.getEncouragement()}`,
            actions: [
                { text: '🎫 Abrir chamado', action: 'openTicket', data: 'Geral' },
                { text: '💬 Preciso de mais ajuda', action: 'showHelp', data: '' }
            ]
        };
    }

    // Processamento principal com personalidade
    processMessage(userMessage) {
        // Atualizar humor baseado no tempo desde última interação
        this.updateUserMood();

        // Salvar no histórico
        this.conversationHistory.push({
            type: 'user',
            message: userMessage,
            timestamp: new Date().toISOString(),
            mood: this.userMood
        });

        // Analisar intenção
        const intent = this.analyzeIntent(userMessage);
        
        // Gerar resposta com personalidade
        const response = this.generateResponse(intent, userMessage);
        
        // Salvar resposta no histórico
        this.conversationHistory.push({
            type: 'wos',
            message: response.content,
            intent: intent,
            timestamp: new Date().toISOString(),
            mood: this.userMood
        });

        this.lastInteraction = new Date();
        return response;
    }

    updateUserMood() {
        const timeSinceLastInteraction = new Date() - this.lastInteraction;
        if (timeSinceLastInteraction > 300000) { // 5 minutos
            this.userMood = 'welcoming';
        } else {
            this.userMood = 'engaged';
        }
    }
}

// Integração com a interface
function integrateWOSWithChat() {
    window.wos = new WOS();
    
    // Substituir o event listener do chat input
    const chatInput = document.getElementById('chat-input');
    const originalEventListener = chatInput.onkeypress;
    
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && this.value.trim()) {
            const userMessage = this.value.trim();
            addUserMessage(userMessage);
            
            // Processar com WOS
            const response = window.wos.processMessage(userMessage);
            
            this.value = '';
            
            // Simular tempo de processamento natural
            const thinkingTime = 800 + Math.random() * 1200;
            
            setTimeout(() => {
                addWasMessage(response.content);
                
                // Adicionar ações se existirem
                if (response.actions && response.actions.length > 0) {
                    addActionButtons(response.actions);
                }
            }, thinkingTime);
        }
    });
}

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar WOS com personalidade
    if (typeof window.wos === 'undefined') {
        integrateWOSWithChat();
        
        // Saudação inicial após 2 segundos
        setTimeout(() => {
            const greeting = window.wos.getGreeting();
            const motivation = window.wos.getMotivationalPhrase();
            addWasMessage(`${greeting} 👋\n\nSou a WOS, sua assistente de TI! ${motivation}\n\nEstou aqui para ajudar com políticas, procedimentos e o que mais precisar! 💫`);
        }, 2000);
    }
});

// Função de teste
window.testWOS = function(message) {
    if (!window.wos) window.wos = new WOS();
    const response = window.wos.processMessage(message);
    console.log('WOS Response:', response);
    return response;
};