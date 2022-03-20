import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link  } from "react-router-dom";

export default function Hero() {
    return (
     <div className="hero-image">
  <div className="hero-text">
    <h1 className='text-white'>Web Squall</h1>
    <p>Hello! Web-Squall a self-taught Designer & Developer with over two years work experience.

</p>
    <Link className="btn btn-hero btn-lg" to="/about">Explore</Link>
  </div>
</div>

    )
}
