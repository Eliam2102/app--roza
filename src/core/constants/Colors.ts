const tintColorLight = '#1c5f21';
const tintColorDark = '#4ade80'; // A lighter green for dark mode contrast

export default {
  light: {
    text: '#11181C',
    background: '#f6f8f6',
    tint: tintColorLight,
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorLight,
    surface: '#ffffff',
    primary: '#1c5f21',
    cardBorder: '#e5e7eb',
    textSecondary: '#6b7280',
    money: '#1c5f21',
    moneyBg: '#E8F5E9',
    warning: '#f59e0b',
    warningBg: '#FEF3C7',
    expense: '#ef4444',
    expenseBg: '#FEE2E2',
  },
  dark: {
    text: '#ECEDEE',
    background: '#131f14',
    tint: tintColorDark,
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    surface: '#1e2b1f',
    primary: '#4ade80',
    cardBorder: '#2f3f31',
    textSecondary: '#9ca3af',
    money: '#4ade80',
    moneyBg: 'rgba(74, 222, 128, 0.1)',
    warning: '#fbbf24',
    warningBg: 'rgba(251, 191, 36, 0.1)',
    expense: '#f87171',
    expenseBg: 'rgba(248, 113, 113, 0.1)',
  },
};
