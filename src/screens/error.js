import React from "react";
import "../App.css";
import brokenrobot from "../assets/brokenrobot.png";

function Error() {
  return (
    <div className="error">
      <div className="parag">
        <p>An error occured</p>
        <p>The requested operation cannot be completed at the moment</p>
        <p>Please Contact Admin</p>
      </div>

      <div>
        <img src={brokenrobot} alt="" />
      </div>
    </div>
  );
}

export default Error;
