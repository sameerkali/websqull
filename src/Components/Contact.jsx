import React,{useState} from "react";
import Cont from "../image/contactus.gif";

export default function Contact() {

  const [user, setuser] = useState([])
        let name ,value,email;
        const userData = (event)=>{
            name = event.target.name;
            value = event.target.value;
            email = event.target.email;

            setuser({...user,[name]:value});
        }
        
        // const submitData = (event)=>{
        //   event.preventDefault();
        //   console.log(user);
        // setuser('')

        // }


        const submitData = (e)=>{
          e.preventDefault()
          fetch("https://jinustaad-default-rtdb.firebaseio.com/datagul.json",{

            method:"POST",
            body : JSON.stringify(
              {user: user}
              )
            })
            console.log(user);
            alert("Data Stored")
            setuser("")

            fetch("https://jinustaad-default-rtdb.firebaseio.com/datagul.json")
            .then((res)=>{
              return res.json()
            })
            .then((result)=>{
              console.log(result);
            })
        }
       
        


       
  return (
    <>
      <div className="ma container ">
        <div className="">
          <img src={Cont} className="contactImage" alt="" />
        </div>

        <div className="contactHead ">
          <h2>Contacts</h2>
        </div>
        <div className="row">
          <div className="col-md-7  p-3 form-border">
            <form onSubmit={submitData}>
              <input
              
                name="name" 
                onChange={userData}
                value={user.name || ''}
                type="text"
                placeholder="Enter Your Name"
                className="color-form form-control"
              />
              <input
                name="email"
                onChange={userData}
                value={user.email || ''}
                type="email"
                placeholder="Enter Your Email"
                className="color-form form-control mt-3"
              />
              <textarea
                type="text" 
                onChange={userData}
                value={user.message || ''}
                name="message"
                placeholder="Type Your Message"
                className=" color-form form-control mt-3"
                cols="10"
              ></textarea>
              <button type="submit"  className="btn btn-success form-control mt-3 color-form">
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-5">
            <div className="main-heading">
              <h1 style={{color:"blue"}}>Let's build something together.</h1>
              <p className="mt-3">
                Hey, I know you have an amazing billion dollar idea! Let build
                it together.
              </p>
              <div className="text-dec">
                <div className="mt-3">
                  <a className="text-white" href="">
                    +91 8512889586
                  </a>
                </div>
                <div>
                  <a className=" text-white" href="">
                    webSquall100@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="font-icon mt-4">
              <i class="fa-solid fa-envelope ml-2"></i>
              <i class="fa-brands fa-facebook-f ml-2"></i>
              <i class="fa-brands fa-instagram ml-2"></i>
              <i class="fa-brands fa-twitter ml-2"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
