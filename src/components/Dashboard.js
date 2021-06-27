import React from "react";
import PageHeader from "../PageHeader";

const Dashboard = () => {
return (
<div>
  <div className="card">
    <div className="card-body">
        <PageHeader />
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