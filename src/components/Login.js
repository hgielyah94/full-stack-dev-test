import React, { useState } from "react";
import PageHeader from "../PageHeader";

const Login = () => {
    const [email, setEmail] = useState("");
    console.log("auth", localStorage.getItem("isAuthenticated"));

    const updateEmail = (event) => {
    setEmail((prevState) => {
      return {
        ...prevState,
        [event.target.name] : event.target.value,
      };
    });
  }

  function handleSubmit(event) {
  event.preventDefault();
  console.log(email); 
  
  if (email === undefined || email === "") {
      return (
        alert("Please enter a valid email address")
      );
    } else {
      localStorage.setItem("isAuthenticated", "true");
      window.location.pathname = "/components/dashboard";
                }
            }

return (
<div>
  <div className="card">
    <div className="card-body">
        <PageHeader />
        <h4>Please enter your email below</h4>
         <div className="sign-in-form" >
            <label className="form-label">Email Address</label>
            <input type="email" className="form-input" onChange={updateEmail}/>
            </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" />
            <label className="form-check-label"> Remember this device </label>
            </div>
         <button onClick={handleSubmit}>Sign In</button>
          </div>
           </div>
      </div> 
    );
}

export default Login;