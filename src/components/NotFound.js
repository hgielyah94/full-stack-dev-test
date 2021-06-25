import React from "react";


const Dashboard = (props) => {
return (
<div>
  <div className="card">
    <div className="card-body">
        <img src="https://green.cdn.energy/branding/logo-r.svg" className="green-logo" alt="Green" height="40" />
          <h1 className="card-title">Welcome to Green.</h1>
        <h4>404 Page not found</h4>
        <form>
        <button onClick={() => {
            props.history.push("/")
          }
        }
        >Home</button>
        </form>
    </div>
  </div>
</div>
);
}

export default Dashboard;