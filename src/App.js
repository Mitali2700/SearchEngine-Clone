import React from "react";
import './App.css';
import Home from "./pages/Home"
import Search from "./pages/Search"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    // change App into app bcz of BAM naming convention
    // <div className="app">
    // <h1>hello</h1>
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<Search/>}/>
      </Routes>
    </BrowserRouter>
     
    // </div>

   
   
    
  );
}

export default App;
