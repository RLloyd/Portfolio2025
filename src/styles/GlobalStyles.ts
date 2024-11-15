// src/styles/GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';
import gradatedBackground from '../assets/gradatedBackground.webp';

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    background-image: url(${gradatedBackground});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: ${({ theme }) => theme.colors.text};
    transition: all 0.3s ease;
    min-height: 100vh;
  }

  h1 {
    font-size: 40px;
  }

  h2 {
    font-size: 24px;
  }

  p {
    font-size: 20px;
  }
`;