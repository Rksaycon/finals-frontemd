import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"; // Import custom styles

function Navbar({ isLoggedIn, onLogout }) {
  const token = localStorage.getItem("token");

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand custom-brand" to="/">CodeSphere University</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto custom-nav-links">
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/">Home</Link>
            </li>
            {token && (
              <li className="nav-item">
                <Link className="nav-link custom-link" to="/dashboard">Dashboard</Link>
              </li>
            )}
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/admission">Admission</Link>
            </li>
            {!token ? (
              <li className="nav-item">
                <Link className="nav-link custom-link" to="/login">Login</Link>
              </li>
            ) : (
              <li className="nav-item">
                <button
                  className="nav-link custom-link custom-logout-btn"
                  onClick={() => {
                    localStorage.removeItem("token");
                    window.location.reload();  // Remove token and reload the page
                  }}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
