import React from "react";
import Reactimg from "../image/react.png";
import Htmlimg from "../image/html.jpg";
import Jsimg from "../image/js.png";
import Bootimg from "../image/bootstrap.png";
import Angimg from "../image/angular.png";
import CSSimg from "../image/css.png";
export default function Skills() {
  return(
  <>
    <div className="container skills">
      <h1 className="text-white ser-head mt-2">Our Skills</h1>
      <div className="row " style={{textAlign:"center"}}>
        <div className="col-md-2 skills-card">
          <img  src={Reactimg} alt="" />
        </div>
        <div className="col-md-2 skills-card">
          <img  src={Htmlimg} alt="" />
        </div>
        <div className="col-md-2 skills-card">
          <img  src={Jsimg} alt="" />
        </div>
        <div className="col-md-2 skills-card">
          <img  src={Bootimg} alt="" />
        </div>
        <div className="col-md-2 skills-card">
          <img  src={Angimg} alt="" />
        </div>
        <div className="col-md-2 skills-card">
          <img  src={CSSimg} alt="" />
        </div>
      </div>
    </div>
  </>);
}
