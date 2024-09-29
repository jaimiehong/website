import React from 'react';
import Home from './Components/Home/Home.js'
import Background from './Components/Background/Background.js';
import './App.css';
import CounterExample from './Components/Home/CounterExample/CounterExample.js';
import { useEffect, useRef } from 'react';
import Photography from './Components/Photography/Photography.js';
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
