import React from "react";

const NavBarDashboard = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark sb-topnav">
      <a className="navbar-brand ps-3" href="#home">
        Start Bootstrap
      </a>
      <button
        className="btn btn-link btn-sm order-1 order-lg-0 me-4"
        id="sidebarToggle"
      >
        <i className="fas fa-bars"></i>
      </button>
      <form className="d-none d-md-inline-block ms-auto me-0">
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            placeholder="Search for..."
          />
          <button className="btn btn-primary" type="button">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>
    </nav>
  );
};

export default NavBarDashboard;
