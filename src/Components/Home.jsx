import React from 'react'
import Hero from './Hero'
import Project from './Project';
import Services from './Services';
import Skills from './Skills';


export default function Home() {
    return (
       
        <div>  
            <Hero/>
            <div className="container">
                <Project/>
        <hr className="container" style={{backgroundColor:"white"}} />

                <Skills/>
        <hr className="container" style={{backgroundColor:"white"}} />

                <Services/>
            </div>
        </div>
    );
}
