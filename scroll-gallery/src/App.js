import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css';
import Home from "./pages/Home.js"
import Explore from "./pages/Explore.js"
import NavBar from "./components/NavBar.js"
import ScrollTop from './components/ScrollTop.js'

function App() {

  return (
    <div className="App">
       <Router>
        <ScrollTop/>
        <NavBar/>
        {/*<GenNavbar/>*/}
        <Switch>

        <Route exact path="/"  component= {Home} />
        <Route exact path="/explore"  component= {Explore} />

        </Switch>
      </Router>


      
    </div>
  );
}

export default App;
