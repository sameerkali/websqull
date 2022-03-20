import React from "react";
import aboutGif from "../image/aboutGif.gif";
export default function About() {
  return (
    <div>
      {/* ================================================================= */}
      <div className="container">
        <div className="about_gif mt-5">
          <img src={aboutGif} alt="" />
          <h1 className="mt-1 text-white text-center mb-2 mt-5">About Websquall</h1>
          <span className="text-white ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            vero tenetur voluptate dolorum, rem soluta ipsam asperiores aliquid
            dolorem deserunt veniam in eligendi tempora culpa similique animi
            omnis, sequi vel.
          </span>
        </div>
        <hr className="container" style={{backgroundColor:"white"}} />
        <div>
          <h1 className="text-center text-white mt-5 mb-2">Meet Our Team</h1>
          <div className="container">
            <div className="row">
              {/*team-1*/}
              <div className="col-lg-4">
                <div className="our-team-main">
                  <div className="team-front">
                    {" "}
                    <img
                      src="https://i.imgur.com/Ur43esv.jpg"
                      className="img-fluid"
                    />
                    <h3>William</h3>
                    <p>Web Designer</p>
                  </div>
                  <div className="team-back">
                    {" "}
                    <span>
                      {" "}
                      William is a web designer at Google inc. having 10+ years
                      of experience in web development. William's hobby is to
                      play table tennis and all type of indoor games.{" "}
                    </span>{" "}
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="our-team-main">
                  <div className="team-front">
                    {" "}
                    <img
                      src="https://i.imgur.com/Ur43esv.jpg"
                      className="img-fluid"
                    />
                    <h3>William</h3>
                    <p>Web Designer</p>
                  </div>
                  <div className="team-back">
                    {" "}
                    <span>
                      {" "}
                      William is a web designer at Google inc. having 10+ years
                      of experience in web development. William's hobby is to
                      play table tennis and all type of indoor games.{" "}
                    </span>{" "}
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="our-team-main">
                  <div className="team-front">
                    {" "}
                    <img
                      src="https://i.imgur.com/Ur43esv.jpg"
                      className="img-fluid"
                    />
                    <h3>William</h3>
                    <p>Web Designer</p>
                  </div>
                  <div className="team-back">
                    {" "}
                    <span>
                      {" "}
                      William is a web designer at Google inc. having 10+ years
                      of experience in web development. William's hobby is to
                      play table tennis and all type of indoor games.{" "}
                    </span>{" "}
                  </div>
                </div>
              </div>
              {/*team-1*/}
              {/*team-2*/}
              <div className="col-lg-4">
                <div className="our-team-main">
                  <div className="team-front">
                    {" "}
                    <img
                      src="https://i.imgur.com/8RKXAIV.jpg"
                      className="img-fluid"
                    />
                    <h3>David</h3>
                    <p>Project Manager</p>
                  </div>
                  <div className="team-back">
                    {" "}
                    <span>
                      {" "}
                      David is a Project Manager at Apple inc. having 15+ years
                      of experience in Android application development.
                      William's hobby is to play Football and all type of
                      outdoor games.{" "}
                    </span>{" "}
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="our-team-main">
                  <div className="team-front">
                    {" "}
                    <img
                      src="https://i.imgur.com/J6l19aF.jpg"
                      className="img-fluid"
                    />
                    <h3>Niharika</h3>
                    <p>Hybris Developer</p>
                  </div>
                  <div className="team-back">
                    {" "}
                    <span>
                      {" "}
                      Niharika is a Hybris Developer at Google India. having 7+
                      years of experience in Hybris application development.
                      William's hobby is to travel all around the world and play
                      all type of games.{" "}
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
