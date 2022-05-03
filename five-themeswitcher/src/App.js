
import React,{useState} from 'react';
import './App.css';
import ThemeContext from './contexts/ThemeContext';
import Header from './components/Header';
import HeroSection from './components/HeroSection';


const App = ()=>{

  const themeHook = useState("light");

  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Header/>
        <HeroSection/>
      </div>
    </ThemeContext.Provider>  
  )
}

export default App;
