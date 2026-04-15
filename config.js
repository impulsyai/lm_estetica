/**
 * Impulsy.ai - Template_Premium_01 (Dra. Thamires Coelho)
 * Configuração de Hidratação Dinâmica
 */

const siteConfig = {
    brand: {
        name: "Larisse Machado",
        tagline: "Mestre em Sobrancelhas",
        logoTextTop: "LM",
        logoTextBottom: "ESTÉTICA",
        logoSubText: "CLÍNICA DE ESTÉTICA AVANÇADA"
    },
    contact: {
        phone: "5575999999999", // Placeholder, will fix later if user provides
        whatsapp: "https://wa.me/5575999999999",
        instagram: "https://instagram.com/lm_estetica_studioo",
        googleMaps: "https://maps.google.com/?q=Feira+de+Santana%2C+Bahia" 
    },
    theme: {
        palette: {
            primary: "#146c64", // Verde Teal da logo
            onPrimary: "#ffffff",
            primaryContainer: "#a7d2cc",
            secondary: "#e0aeb4", // Rose/Rosa da logo e instagram
            onSecondary: "#ffffff",
            surface: "#fdfbf9", // Fundo claro 
            onSurface: "#1a1c1c",
            outline: "#8a7a6e"
        },
        fonts: {
            headline: "'Outfit', sans-serif",
            body: "'Inter', sans-serif"
        }
    },
    hero: {
        title: "Você é seu projeto <span class='text-primary italic'>mais importante</span>.",
        description: "Clínica de Estética e Micropigmentação Premium. Realçando sua beleza com naturalidade e os tratamentos mais avançados do mercado.",
        ctaMain: "Agendar Avaliação",
        ctaSecondary: "Ver todos os serviços",
        badge: "LM Estética - Mestre em Sobrancelhas"
    },
    sections: {
        philosophy: {
            title: "Tratamentos que elevam sua autoestima.",
            text: "Desenvolvemos protocolos únicos usando tecnologia de ponta e maestria para entregar resultados impressionantes sem perder a naturalidade. Cuidar de você é o nosso propósito."
        }
    }
};

// Exportar para uso no script de hidratação
if (typeof module !== 'undefined' && module.exports) {
    module.exports = siteConfig;
}
