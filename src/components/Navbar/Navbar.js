import React from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [showDropDownNav, setShowDropDownNav] = useState(false);

  function handleMenuIconClick() {
    setShowDropDownNav((prev) => !prev);
  }
  return (
    <div className="nav">
      <div className="menu-icon" onClick={handleMenuIconClick}>
        {!showDropDownNav ? <FaBars /> : <FaTimes />}
      </div>
      <Link className="link" to="/" onClick={handleMenuIconClick}>
        <h2><span>Q</span>uitter</h2>
      </Link>

      <ul className={!showDropDownNav ? "menu" : "menu active"}>
        <Link className="link" to="/" onClick={handleMenuIconClick}>
          <li>Trophies</li>
        </Link>
        <Link className="link" to="/components"onClick={handleMenuIconClick}>
          <li>Rewards</li>
        </Link>
        <Link className="link" to="/components"onClick={handleMenuIconClick}>
          <li>Progress</li>
        </Link>
        <Link className="link" to="/components"onClick={handleMenuIconClick}>
          <li>Health</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
