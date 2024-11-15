// src/data/mockData.ts
import logo from '@/assets/Fusion-logo.png';
import veil1 from '@/assets/Hero/veil-1.webp';
import veil2 from '@/assets/Hero/veil-2.webp';
import veil3 from '@/assets/Hero/veil-3.webp';
import digitalOne from '@/assets/Cards/D1-Logo.png';
import zenmonics from '@/assets/Cards/zenmonics-logo2.png';
import wavemaker from '@/assets/Cards/wavemaker-cover.png';
import gd2019 from '@/assets/Cards/portfolio2019-lg.png';

export interface HeroSlide {
  id: number;
  title: string;
  description: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
}

export interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface AppData {
  slides: HeroSlide[];
  cards: Card[];
}

export const navigationData = {
   logo: {
     image: logo,
     alt: 'Fusion Logo'
   },
   menuItems: {
     left: ['Home', 'MediaMash Studio', 'DigitalOne'],
     right: ['Zenmonics', 'Styleguide', 'Profile']
   }
 };

const appData: AppData = {
  slides: [
    {
      id: 1,
      title: "Welcome to My Portfolio",
      description: "Creative developer passionate about building beautiful web experiences",
      image: veil1,
      ctaText: "Latest Works",
      ctaLink: "#works"
    },
    {
      id: 2,
      title: "Full-Stack Developer",
      description: "Specializing in React, TypeScript, and Node.js applications",
      image: veil2,
      ctaText: "View Skills",
      ctaLink: "#skills"
    },
    {
      id: 3,
      title: "UI/UX Enthusiast",
      description: "Creating intuitive and engaging user experiences",
      image: veil3,
      ctaText: "See Projects",
      ctaLink: "#projects"
    }
  ],
  cards: [
    {
      id: 1,
      title: "Latest Works",
      description: "Modern and responsive web applications built with React",
      image: digitalOne,
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "User-centered design solutions for digital products",
      image: zenmonics,
    },
    {
      id: 3,
      title: "Mobile Development",
      description: "Cross-platform mobile applications using React Native",
      image: wavemaker,
    },
    {
      id: 4,
      title: "Mobile Development",
      description: "Cross-platform mobile applications using React Native",
      image: gd2019,
    }
  ]
};

// Simulate async data fetching
export const fetchData = async (): Promise<AppData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(appData);
    }, 1000);
  });
};