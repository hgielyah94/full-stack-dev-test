import React from "react";
import auth from "./auth";


const Dashboard = (props) => {
return (
<div>
  <div className="card">
    <div className="card-body">
        <img src="https://green.cdn.energy/branding/logo-r.svg" className="green-logo" alt="Green" height="40" />
          <h1 className="card-title">Welcome to Green.</h1>
        <h4>Thank you for signing in</h4>
        <form>
        <button onClick={() => {
          auth.logout(() => {
            props.history.push("/");
          })
        }
        }>Sign Out</button>
        </form>
    </div>
  </div>
</div>
);
}

export default Dashboard;