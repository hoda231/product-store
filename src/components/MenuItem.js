import React from "react";
import { Link } from "react-router-dom";







function Products({ img, title, newPrice }) {
  return (
    <div className="menuItem">
      <Link to={'/category'}><div style={{ backgroundImage: `url(${img})` }}> </div>
      </Link>
      <h1> {title} </h1>
      <p> ${ newPrice} </p>
    </div>
  );
}

export default Products;
