import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
// Import components
import Work from './components/Work'; 
import About from './components/About';
// Import the style sheet  
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="Container">

        <div className="Navigation">
              <img src={logo} className="Logo" alt="Clem portfolio logo" />

              <div className="Navigation-sub">
                {/* Set up the links */}
                <Link to='/' className="Sub-item">WORK</Link>
                <Link to='/about' className="Sub-item">ABOUT</Link>
              </div>
        </div>

        <div>
          {/* Set up the Router */}
          <Route exact path="/" component={Work} />
          <Route path="/about" component={About} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
