export const theme = {
  colors: {
    bg: '#F7F5F0',
    card: '#FFFEFB',
    warm: '#F0EBE1',
    border: '#E4DFD3',
    borderLight: '#EDE9E0',

    text: '#1C1917',
    textSecondary: '#57534E',
    textTertiary: '#A8A29E',

    accent: '#E8580C',
    accentLight: '#FFF4ED',
    accentDark: '#C24A0F',
    accentGlow: 'rgba(232,88,12,0.15)',

    green: '#16A34A',
    greenLight: '#F0FDF4',
    blue: '#2563EB',
    blueLight: '#EFF6FF',
    purple: '#7C3AED',
    purpleLight: '#F5F3FF',
    pink: '#DB2777',
    gold: '#CA8A04',
    red: '#DC2626',
    cyan: '#0891B2',
    teal: '#0D9488',
    slate: '#64748B',
    indigo: '#4F46E5',
    amber: '#F59E0B',
    brown: '#B45309',
    darkPurple: '#7E22CE',
  },

  fonts: {
    body: 'PlusJakartaSans' as const,
    bodyMedium: 'PlusJakartaSans-Medium' as const,
    bodySemiBold: 'PlusJakartaSans-SemiBold' as const,
    bodyBold: 'PlusJakartaSans-Bold' as const,
    bodyExtraBold: 'PlusJakartaSans-ExtraBold' as const,
    display: 'PlayfairDisplay' as const,
    displayBold: 'PlayfairDisplay-Bold' as const,
    displayItalic: 'PlayfairDisplay-Italic' as const,
    displayBoldItalic: 'PlayfairDisplay-BoldItalic' as const,
  },

  radius: {
    sm: 12,
    md: 16,
    lg: 22,
    xl: 28,
    full: 9999,
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 14,
    lg: 20,
    xl: 28,
  },

  shadows: {
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.04,
      shadowRadius: 8,
      elevation: 2,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.08,
      shadowRadius: 16,
      elevation: 4,
    },
    accent: {
      shadowColor: '#E8580C',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.18,
      shadowRadius: 16,
      elevation: 6,
    },
    button: {
      shadowColor: '#E8580C',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 12,
      elevation: 4,
    },
  },
} as const;

export type ThemeColors = keyof typeof theme.colors;
