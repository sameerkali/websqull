import React from "react";
import inte from '../image/42nite.png'
import cv from '../image/cv-maker.png'
import shoes from '../image/shoes.png'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Project() {
  return (
    <>
      {/* <div className="container">
        <div className="main">
          <h1 className="text-white ser-head ">Our Projects</h1>
          <Link to="/allPro">View All</Link>
          <div className="row  all-img mt-5 ">
             <div className="">
              <div className="col-md-4 main_data">
                  <img className="p-2" src={second} alt="" />
                  <h3>24Nite</h3>
              </div>
              <div className="col-md-4">
                  <img src={second} alt="" />
                  <button className="btn btn-success btn-lg" >Angular, Vue js, Bootstrap</button>
              </div>
              <div className="col-md-4">
                  <img src={second} alt="" />
                  <h3>24Nite</h3>
              </div>
          </div>
          </div>
        </div>
      </div> */}

      <div className="container" >
        <div className="main main-pro" >
          <h1 className="text-white ser-head">Our Projects</h1>
          <Link to="/allPro">View All</Link>
          <div className="row main " >
            <div className="col-md-4 card-tran" >
              <img src={inte} alt=""/>
              <button className="ml-2 btn btn-sm btn-success text-white w-100" >Angular, Php, Firebase</button>
              <h3 className="mt-2 text-white ml-2">Whats42Nite</h3>
            </div> 
            <div className="col-md-4 card-tran">
              <img src={cv} alt=""/>
              <button className=" ml-2  btn btn-sm btn-success text-white w-100 ml-2">Html, Css, Javascript</button>
              <h3 className="mt-2 text-white ml-2">Cv Maker App</h3>
            </div>
            <div className="col-md-4 card-tran">
              <img src={shoes} alt=""/>
              <button className=" ml-2  btn btn-sm btn-success text-white w-100 ">Html, Css, Bootstrap</button>
              <h3 className="mt-2 text-white ml-2">E-commerce shoes </h3>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
