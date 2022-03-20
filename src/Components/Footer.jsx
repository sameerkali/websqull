import React from "react"
import Reactimg from '../image/react.png'
import Htmlimg from '../image/html.jpg'
import Jsimg from '../image/js.png'
import Bootimg from '../image/bootstrap.png'
import Angimg from '../image/angular.png'
import CSSimg from '../image/css.png'

export default function Footer() {
    return (
        <>

<footer className="page-footer font-small cyan darken-3">
  <div className="container">
      <h1 className="text-center ">Website built on</h1>
       <div className="img">
           <center>

            <img src={Reactimg} alt="" />
            <img src={Htmlimg} alt="" />
            <img src={Jsimg} alt="" />
            <img src={Bootimg} alt="" />
            <img src={Angimg} alt="" />
            <img src={CSSimg} alt="" />
           </center>
       </div>
  <hr  />
  {/* <div className="footer-copyright text-center py-3">© 2020 Copyright:
  </div> */}
  <div className="row ">
      <div className="col-md-6">
  <p  style={{float:"right"}}> Created by WebSquall</p>
      </div>

      <div className="col-md-6">
      <div className="font-icon ">
              <i class="fa-solid fa-envelope ml-2"></i>
              <i class="fa-brands fa-facebook-f ml-2"></i>
              <i class="fa-brands fa-instagram ml-2"></i>
              <i class="fa-brands fa-twitter ml-2"></i>
            </div>
      </div>
  </div>
  </div>
</footer>

        </>
    )
}
