import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
// Import components
import Work from './components/Work'; 
import About from './components/About';
import Footer from "./components/Footer";

//project pages
import PartyHub from './components/PartyHub'; 
import EatBeats from './components/EatBeats'; 
import WeatherApp from './components/WeatherApp'; 
import DayPlanner from './components/DayPlanner'; 
import BudgetTracker from './components/BudgetTracker'; 
import BurgerApp from './components/BurgerApp'; 

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
              <Link to='/about' className="Sub-item nav-font">_About</Link>
              <Link to='/' className="Sub-item nav-font">_Work</Link>
              
            </div>
        </div>

        <div>
          {/* Set up the Router */}
          <Route exact path="/" component={Work} />
          <Route path="/about" component={About} />
          <Route exact path="/partyhub" component={PartyHub} />
          <Route exact path="/eatbeats" component={EatBeats} />
          <Route exact path="/weatherapp" component={WeatherApp} />
          <Route exact path="/dayplanner" component={DayPlanner} />
          <Route exact path="/budgettracker" component={BudgetTracker} />
          <Route exact path="/burgerapp" component={BurgerApp} />
          
        </div>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
