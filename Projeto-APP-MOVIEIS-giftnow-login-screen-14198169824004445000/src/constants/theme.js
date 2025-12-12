export const COLORS = {
  primary: '#6C5CE7', // Roxo / Lilás
  secondary: '#FF7675', // Rosa
  accent: '#FFFDCB', // Amarelo claro (detalhes)
  background: '#F9F9F9', // Cinza bem claro / Branco
  white: '#FFFFFF',
  text: '#2D3436', // Cinza escuro para texto
  textLight: '#636E72', // Cinza médio para texto de apoio
  success: '#00B894',
  danger: '#D63031',
  shadow: '#000000',
};

export const FONTS = {
  regular: 'System', // Usando fonte do sistema por enquanto
  bold: 'System',
  medium: 'System',
};

export const SIZES = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  extraLarge: 24,
  radius: 12,
  padding: 24,
  icon: 24,
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
};
