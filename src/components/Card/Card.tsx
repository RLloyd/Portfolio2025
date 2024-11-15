// src/components/Card/Card.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { CardContainer, CardImage, CardContent, CardButton } from './Card.styles';

interface CardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

const Card: React.FC<CardProps> = ({ title, description, image, index }) => {
  return (
    <CardContainer
      as={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <CardImage>
        <img src={image} alt={title} />
      </CardImage>
      <CardContent>
        <h2>{title}</h2>
        <p>{description}</p>
        <CardButton>Learn More</CardButton>
      </CardContent>
    </CardContainer>
  );
};

export default Card;

// src/components/Card/index.ts
export { default as Card } from './Card';