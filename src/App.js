/**import React from 'react';
import Home from './Components/Home/Home.js'
import Background from './Components/Background/Background.js';
import './App.css';
import CounterExample from './Components/Home/CounterExample/CounterExample.js';
import { useEffect, useRef } from 'react';
import Photography from './Components/Photography/Photography.js';
import AboutMe from './Components/AboutMe/aboutme.js';
function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Set a timeout to scroll after 2 seconds
    const timer = setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1000);

    // Cleanup the timeout
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <section style = {styles.startSection}>
        <Home name = "Jaimie"/>
      </section>
      <section ref = {scrollRef} style = {styles.contentSection}>
      <AboutMe/>
      </section>
      <section style = {styles.contentSection}>
      <Background/>
      </section>
      
      <CounterExample/>
    </div>

  );
}
const styles = {
  startSection: {
    
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    
    
  },
  contentSection: {
    height: '100vh',
    padding: '0px',
    display: 'flex',
    flexDirection: 'column',
    
    alignItems: 'center',
  },
};

export default App;
**/
import React, { useEffect, useRef, useState } from 'react';
import Home from './Components/Home/Home.js';
import Background from './Components/Background/Background.js';
import './App.css';
import CounterExample from './Components/Home/CounterExample/CounterExample.js';
import Photography from './Components/Photography/Photography.js';
import AboutMe from './Components/AboutMe/aboutme.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const scrollRef = useRef(null);
  const [aboutMeVisible, setAboutMeVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Set a timeout to scroll after 2 seconds
    const timer = setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1000);

    // Cleanup the timeout
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const aboutMeSection = scrollRef.current;
      const rect = aboutMeSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top >= 0 && rect.bottom <= windowHeight) {
        setAboutMeVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <section style={styles.startSection}>
        <Home name="Jaimie" />
      </section>
      <section ref={scrollRef} style={styles.contentSection}>
        <AboutMe isVisible={aboutMeVisible} />
      </section>
      <section style={styles.contentSection}>
          <Background />
      </section>
      <br/> <br/> <br/> <br/><br/> <br/> <br/> <br/>
      <CounterExample />
    </div>
  );
}

const styles = {
  startSection: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentSection: {
    height: '100vh',
    padding: '0px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

export default App;
