import React, { useState } from "react";

export default function SignIn(props) {
  const [email, setEmail] = useState("");

function updateEmail(event) {
    setEmail(event.target.value);
    }

function handleSubmit() {
if (email == "") {
      return (
        alert("Please enter a valid email address")
      );
    } else {
      alert(`Hello ${email}`)
        }
      }

    return (
        <div>
        <div className="card">
        <div className="card-body">
        <img src="https://green.cdn.energy/branding/logo-r.svg" className="green-logo" alt="Green" height="40" />
          <h1 className="card-title">Welcome to Green.</h1>
        <h4>Please enter your email below</h4>
         <div className="sign-in-form">
            <label className="form-label">Email Address</label>
            <input type="email" className="form-input" onChange={updateEmail}/>
            </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" />
            <label className="form-check-label" for="flexCheckDefault"> Remember this device </label>
            </div>
        <button onClick={handleSubmit}
        >Sign In</button>
          </div>
           </div>
      </div> 
    );
} 