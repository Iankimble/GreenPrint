import React from "react";
import { Link, withRouter } from "react-router-dom";

const Menu = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Green Print</Link>
      </li>
      <li>
        <Link to="/articles">Articles</Link>
      </li>
      <li>
        <Link to="/events">Events</Link>
      </li>
      <li>
        <Link to="/calculators">Calculators</Link>
      </li>

      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </div>
);

export default withRouter(Menu);
