// src/pages/Home/Home.tsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Hero from '@components/Hero';
import Card from '@components/Card';
import { fetchData, AppData } from '@data/mockData';
import { HomeContainer, CardsSection } from './Home.styles';

const Home: React.FC = () => {
  const [data, setData] = useState<AppData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <HomeContainer>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          Loading...
        </motion.div>
      </HomeContainer>
    );
  }

  if (!data) {
    return <div>Error loading data</div>;
  }

  return (
    <HomeContainer>
      <Hero slides={data.slides} />

      <CardsSection>
        {data.cards.map((card, index) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
            index={index}
          />
        ))}
      </CardsSection>

    </HomeContainer>
  );
};

export default Home;