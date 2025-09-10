import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About';
import Contact from '../components/Contact';
import Properties from '../components/Properties';




const Home = () => {
  
  return (
    <div className='mx-10'>
      <Hero />
      <About/>
      <Properties />
      <Contact/>
    
    </div>
  );
};

export default Home;
