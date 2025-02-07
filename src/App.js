import React, { useState } from "react";
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { TabsContainer } from './components/TabsContainer/TabsContainer';

function App() {

  const [activeTab, setActiveTab] = useState("inicio");

  return (
    <div className="App">

        <div className='Header'>
            <Header activeTab={activeTab} setActiveTab={setActiveTab}/>
        </div>

        {/* ----------------------------------------- */}

        <div className='Main'>
            <TabsContainer activeTab={activeTab} setActiveTab={setActiveTab}/>
        </div>

        {/* ----------------------------------------- */}

        <div className='Footer'>
            <Footer/>
        </div>
    
    </div>
  );
}

export default App;
