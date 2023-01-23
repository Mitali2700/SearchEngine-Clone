import React from "react";
import './App.css';
import Home from "./pages/Home"

function App() {
  return (
    // change App into app bcz of BAM naming convention
    <div className="app">
      <h1>Hey Manu! Let's build the search engine</h1>
      
      {/* Home */}
      <Home />

      {/* Search page */}

    </div>

   
   
    
  );
}

export default App;
