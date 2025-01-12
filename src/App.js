import React, { useState } from 'react';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import About from './pages/About';
import Introduction from './pages/Introduction';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Chatbot from './pages/Chatbot';
import Contact from './pages/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Header toggleDarkMode={toggleDarkMode} />
      <Introduction />
      <Chatbot/>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;