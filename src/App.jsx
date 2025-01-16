import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 

import './App.css';
import Home from './pages/Home'; 
import Playlist from './pages/Playlist'
import '@fontsource/capriola';



function App() {
 



  return (
    <BrowserRouter>
      <div className="App">
        
    

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/playlist" element={<Playlist/>} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;