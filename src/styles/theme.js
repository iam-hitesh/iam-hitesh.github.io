import { hex2rgba } from '../utils';

const ACCENT = '#5eead4';
const DARK_BG = '#0a1929';
const BG = '#0f172a';

const theme = {
    colors: {
        darkNavy: DARK_BG,
        navy: BG,
        lightNavy: '#1e293b',
        lightestNavy: '#334155',
        slate: '#94a3b8',
        lightSlate: '#cbd5e1',
        lightestSlate: '#e2e8f0',
        white: '#f8fafc',
        green: ACCENT,
        transGreen: hex2rgba(ACCENT, 0.1),
        shadowNavy: hex2rgba(DARK_BG, 0.7),
    },

    fonts: {
        Calibre:
            'Inter, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif',
        SFMono: 'JetBrains Mono, Fira Code, SF Mono, Roboto Mono, Lucida Console, Monaco, monospace',
    },

    fontSizes: {
        xs: '13px',
        smish: '14px',
        sm: '15px',
        md: '17px',
        lg: '19px',
        xl: '22px',
        xxl: '26px',
        h3: '36px',
    },

    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',

    borderRadius: '8px',
    navHeight: '100px',
    navScrollHeight: '70px',
    margin: '24px',

    tabHeight: 42,
    tabWidth: 120,
    radius: 8,

    hamburgerWidth: 30,
    hamBefore: `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`,
    hamBeforeActive: `top 0.1s ease-out, opacity 0.1s ease-out 0.12s`,
    hamAfter: `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
    hamAfterActive: `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`,

    navDelay: 1000,
    loaderDelay: 2000,
};

export default theme;