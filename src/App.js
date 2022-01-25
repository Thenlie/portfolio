import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Project from './components/Project';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [categories] = useState(['about', 'portfolio', 'contact', 'resume']);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return (
    <div className="App">
      <Header currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />
      <About />
      <Contact />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
