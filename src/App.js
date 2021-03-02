import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
// Import components
import Work from './components/Work'; 
import About from './components/About';
import Footer from "./components/Footer"
// Import the style sheet  
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="Container">

        <div className="Navigation">
            
            <div className="Navigation-sub">
              <Link to='/' className="Nav-left"><h2><span className="silver">C</span><span className="">|</span><span className="silver">V</span></h2></Link>
              {/* Set up the links */}
              <Link to='/about' className="Sub-item">_ABOUT</Link>
              <Link to='/' className="Sub-item">_WORK</Link>
              
            </div>
        </div>

        <div>
          {/* Set up the Router */}
          <Route path="/about" component={About} />
          <Route exact path="/" component={Work} />
        </div>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;