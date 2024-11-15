// src/pages/Home/Home.styles.ts
import styled from 'styled-components';

export const HomeContainer = styled.div`
  min-height: 100vh;
  padding-top: ${({ theme }) => theme.sizes.navHeight};
`;

export const CardsSection = styled.section`
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  margin: 20px auto;
  padding: 2rem 0;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  border: 1px solid red; /* DEBUG: Remove after layout confirmation */

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;