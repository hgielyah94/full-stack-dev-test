import React from "react";
import PageHeader from "../PageHeader";


const Dashboard = (props) => {
return (
<div>
  <div className="card">
    <div className="card-body">
        <PageHeader />
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