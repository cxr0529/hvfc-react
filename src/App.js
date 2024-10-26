import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/navbar.js';
import Home from './components/home/home.js';
import History from './components/history/history.js';
import Calendar from './components/calendar/calendar.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path= "/" element={<Home/>}/>
          <Route path= "history" element={<History/>}/>
          <Route path= "calendar" element={<Calendar/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;