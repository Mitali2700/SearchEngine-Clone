import React from "react";
import './App.css';
import Home from "./pages/Home"
// import Search from "./pages/Search"
import SearchPage from './SearchPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ImagesPage from "";

function App() {
  return (
    // change App into app bcz of BAM naming convention

    <BrowserRouter >
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/search" element={<SearchPage/>}/>
        <Route exact path="/images" element={<ImagesPage/>}/>
      </Routes>
    </BrowserRouter>

    
  );
}

export default App;
