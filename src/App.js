
import React from "react";
import './App.css'
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Components/About";
import AllPro from "./Components/AllPro";

function App() {
  return (

    <Router>
      <Header />
      <div> 
      
        <Switch>
        <Route path="/allpro">
            <AllPro/>
          </Route>
        <Route path="/about">
            <About />
          </Route>

         
          <Route path="/blogs">
            <Blog />
          </Route>

          <Route path="/contacts">
            <Contact />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
        
      </div>
      <Footer />
    </Router>


  );
}

export default App;


// <div className="App">
//       <Header />
//       <Footer />
//     </div>