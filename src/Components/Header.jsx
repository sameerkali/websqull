import React from 'react'
// import Logo from '../image/logo.jpeg'
import { BrowserRouter as Router, Switch, Route, Link  } from "react-router-dom";
export default function Header() {
    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark position fixed-top ">
             {/* <img src={Logo} className="logo" alt="" /> */}
  <a className="navbar-brand" href="/home">WebSquall</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      
      <li className="nav-item active">
        <Link to="/home" className="nav-link" >Home</Link>
      </li>

      <li className="nav-item">
        <Link  to="/about" className="nav-link">About</Link>
      </li>

      <li className="nav-item">
        <Link to="/blogs"className="nav-link" >Programming Memes</Link>
      </li>

      <li className="nav-item">
        <Link to="/contacts" className="nav-link" >Contact Me</Link>
      </li>
    </ul>
    
    <form className="form-inline my-2 my-lg-0">
  <Link className="btn button  mx-auto btn-sm" to='contacts'>Hire me</Link>
  </form>
  </div>
  
</nav>

        </div>
    )
}
