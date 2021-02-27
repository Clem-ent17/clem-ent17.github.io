import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 

import Work from './components/Work'; 
import About from './components/About';  
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        {/* Set up the Router */}
        <Route exact path="/" component={Work} />
        <Route exact path="/about" component={About} />
        
        <div className="Navigation">
              <img src={logo} className="Logo" alt="Clem portfolio logo" />

              <div className="Navigation-sub">
                {/* Set up the links */}
                <Link href='' className="Sub-item">Work</Link>
                <Link href='' className="Sub-item">About Me</Link>
              </div>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
