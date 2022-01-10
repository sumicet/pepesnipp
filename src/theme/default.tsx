export const theme = {
    color: {
        backgroundPrimary: '#090b34',
        backgroundSecondary: '#141a4a',
        accentPrimary: '#889aff',
        accentSecondary: '#674dfb',
        accentTertiary: '#4d67fb',
        cardPrimary: '#131a4e',
        cardSecondary: '#19215c',
        textPrimary: 'white',
        textPrimary80: 'rgba(255, 255, 255, 0.8)',
        textPrimary50: 'rgba(255, 255, 255, 0.5)',
    },
    font: {
        size: {
            1: '10px',
            2: '12px',
            3: '14px',
            4: '16px',
            5: '18px',
            6: '24px',
            7: '30px',
            8: '36px',
            9: '48px',
            10: '60px',
            11: '72px',
            12: '84px',
        },
        weight: {
            light: 300,
            regular: 400,
            medium: 500,
            semiBold: 600,
            bold: 700,
            extraBold: 800,
            black: 900,
        },
    },
};

export type Color = keyof typeof theme.color;
export type FontSize = keyof typeof theme.font.size;
export type FontWeight = keyof typeof theme.font.weight;
