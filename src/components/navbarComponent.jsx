import React from "react";
const Navbar = ({ total }) => {
  console.log("Navbar Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="EDSE">
        Navbar <span className="badge badge-fill badge-secondary">{total}</span>
      </a>
    </nav>
  );
};

export default Navbar;
