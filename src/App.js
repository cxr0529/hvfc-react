import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/navbar.js';
import Landing_Page from './components/landingPage/landingPage.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path= "/" element={<Landing_Page/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
