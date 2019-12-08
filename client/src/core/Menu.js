import React from "react";
import { Link, withRouter } from "react-router-dom";

const Menu = () => (
  <div>
    <div>
      <ul className="nav nav-tabs" style={{ backgroundColor: "#3F51B5" }}>
        <li className="navbar-brand">
          <Link
            className="nav-link"
            style={{ color: "white", fontSize: "24px" }}
            to="/"
          >
            Green Print
          </Link>
        </li>
        <li>
          <Link
            className="nav-link mt-4"
            style={{ color: "white" }}
            to="/articles"
          >
            Articles
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link mt-4"
            style={{ color: "white" }}
            to="/events"
          >
            Events
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link mt-4"
            style={{ color: "white" }}
            to="/calculators"
          >
            Calculators
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link mt-4"
            style={{ color: "white" }}
            to="/about"
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default withRouter(Menu);
