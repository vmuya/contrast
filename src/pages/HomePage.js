import React from 'react';
import {
  Header,
  Hero,
  ResourceSection,
  NewsLetter,
  Footer,
} from '../containers';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ResourceSection />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default HomePage;
