import React from 'react';
import {
  Header,
  Hero,
  ResourceSection,
  NewsLetter,
  Footer,
} from './containers';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ResourceSection />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
