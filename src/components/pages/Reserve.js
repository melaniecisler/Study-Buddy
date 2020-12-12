import React from "react";
import { Link, Route } from "react-router-dom";
import Booked from "./Booked";

function Reserve(props) {
  return (
    <div>
      <h1>Reserve A Chat</h1>
      <p>
       Topic<br></br>
       Date<br></br>
       Time<br></br>
      </p>
      <Link to={`${props.match.url}/booked`} role="button" className="btn btn-link">
        Book Now
      </Link>{" "}
      
      <Route exact path={`${props.match.url}/booked`} component={Booked} />
    </div>
  );
}

export default Reserve;
