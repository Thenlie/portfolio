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
  function renderComponent(currentCategory) {
    switch (currentCategory) {
      case 'about':
        return <About />;
      case 'portfolio':
        return <Project />;
      case 'contact':
        return <Contact />;
      case 'resume':
        return <About />; //Change this to return resume once added (or link to google doc)
      default:
        return <About />;
    }
  }
  return (
    <div className="App min-vh-100 position-relative">
      <div className='content-wrap'>
        <Header currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />
        <main>
          {renderComponent(currentCategory)}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
