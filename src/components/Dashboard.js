import React from "react";

const Dashboard = () => {
return (
<div>
  <div className="card">
    <div className="card-body">
        <img src="https://green.cdn.energy/branding/logo-r.svg" className="green-logo" alt="Green" height="40" />
          <h1 className="card-title">Welcome to Green.</h1>
        <h4>Thank you for signing in</h4>
         <button onClick={() => { 
      localStorage.setItem("isAuthenticated", "false");
      window.location.pathname = "/";
        }}
        >Sign Out</button>
          </div>
           </div>
      </div> 
    );
}

export default Dashboard;