import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './SearchPage';
import ImagesPage from './ImagesPage';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route path='/images'>
            <ImagesPage />
          </Route>
          <Route path='/'>
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
