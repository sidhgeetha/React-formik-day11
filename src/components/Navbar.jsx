import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div
        className="container"
        style={{ boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.1)" }}
      >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
          <li>
            <Link
              className="nav-link "
              to="/"
              aria-current="page"
              style={{ fontFamily: "serif", fontWeight: "normal" }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              to="/products"
              aria-current="page"
              style={{ fontFamily: "serif", fontWeight: "normal" }}
            >
              Products
            </Link>
          </li>
        </ul>
        </div>
      
    </nav>
  );
};


export default Navbar;


