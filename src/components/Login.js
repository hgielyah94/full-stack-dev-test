import React, { useState } from "react";
import auth from '../auth/auth';

const Login = (props) => {
    const [email, setEmail] = useState();

    function updateEmail(event) {
    setEmail(event.target.value)
  }

  function handleSubmit(event) {
  event.preventDefault();
  console.log(email);
   if (email === "") {
      return (
        alert("Please enter a valid email address")
      );
    } else {
        return null;
    }
  }

return (
<div>
  <div className="card">
    <div className="card-body">
        <img src="https://green.cdn.energy/branding/logo-r.svg" className="green-logo" alt="Green" height="40" />
          <h1 className="card-title">Welcome to Green.</h1>
        <h4>Please enter your email below</h4>
         <div className="sign-in-form" onSubmit={handleSubmit}>
            <label className="form-label">Email Address</label>
            <input type="email" className="form-input" onChange={updateEmail}/>
            </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" />
            <label className="form-check-label"> Remember this device </label>
            </div>
         <button onClick={() => { 
           auth.login(() => {
                props.history.push("/components/dashboard");
        });
        }}
        >Sign In</button>
          </div>
           </div>
      </div> 
    );
}

export default Login;