import React from 'react';
import { Header, Hero, ResourceSection, NewsLetter } from './containers';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ResourceSection />
      <NewsLetter />
    </div>
  );
}

export default App;
