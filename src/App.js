import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Project from './components/Project';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Contact />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
