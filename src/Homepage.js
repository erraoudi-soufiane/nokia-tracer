import React from "react";
import "./Homepage.css";
import Sidenav from "./navigation/Sidenav";
import Workspace from "./workspace/Workspace";

function Homepage() {
  return (
    <div className="homepage">
      <div className="sidenav">Sidenav</div>

      <div className="workspace">
        <Workspace />
      </div>
    </div>
  );
}

export default Homepage;
