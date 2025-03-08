import React from "react";
import { Link } from "react-router-dom";
function Cat({ image, name,price }) {
  return (
    <div className="menuItem">
      <Link to={'/detail'}><div style={{ backgroundImage: `url(${image})` }}> </div>
      </Link>
      <h1> {name} </h1>
      <p> ${price} </p>
     
    </div>
  );
}

export default Cat;