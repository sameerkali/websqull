import React from "react";

export default function Services() {
  return (
    <>
      <div className="container ser">
        <h1 className="text-white ser-head mt-2">Our Servies</h1>
      <a href="">View All</a>
        
        <div className="row  services-card">
        
          <div className="col-md-3">
            <div class="service">
              <i className="fa fa-code"></i>

              <h2>Web Design</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, quae?
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div class="service">
              <i className="fas fa-laptop-code"></i>
              <h2>Digital Marketing</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, quae?
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div class="service">
              <i className="fab fa-sketch"></i>
              <h2>Graphics</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, quae?
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div class="service">
              <i className="fas fa-mobile-alt"></i>
              <h2>App Development</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, quae?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
