// import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-200 shadow-sm">
      <div className="navbar-start"></div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl flex gap-0">
          TicTac
          <span className="bg-gradient-to-r from-white to-transparent bg-clip-text text-transparent">
            Vanish
          </span>
        </a>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Navbar;
