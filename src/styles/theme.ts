// src/styles/theme.ts
export const lightTheme = {
   colors: {
     primary: '#000000',
     background: '#FFFFFF',
     text: '#000000',
     navBackground: 'rgba(255, 255, 255, 0.95)',
     cardGradient: 'linear-gradient(45deg, #c5c5c5, white)',
     heroGradient: 'linear-gradient(45deg, #F1E8E7, #ffffff)', // Light theme gradient
     textSecondary: '#666666', // Added for subtitle text
     border: '#e1e1e1', // Added for button borders
     secondary: '#f5f5f5', // Added for secondary elements
   },
   sizes: {
     navHeight: '86px',
     heroHeight: '400px',
     maxWidth: '1334px',
   },
 };

 export const darkTheme = {
   colors: {
     primary: '#FFFFFF',
     background: '#121212',
     text: '#FFFFFF',
     navBackground: 'rgba(18, 18, 18, 0.95)',
     cardGradient: 'linear-gradient(45deg, #2a2a2a, #121212)',
     heroGradient: 'linear-gradient(45deg, #2a2a2a, #121212)', // Dark theme gradient
     textSecondary: '#a0a0a0', // Added for subtitle text
     border: '#2a2a2a', // Added for button borders
     secondary: '#2a2a2a', // Added for secondary elements
   },
   sizes: {
     navHeight: '86px',
     heroHeight: '400px',
     maxWidth: '1334px',
   },
 };

 export type ThemeType = typeof lightTheme;