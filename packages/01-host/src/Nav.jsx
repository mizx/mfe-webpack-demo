import { Link } from "react-router-dom";
import React from "react";

const Nav = () => (
  <ul>
    <li>
      <Link to="/page1">Material UI Dialog</Link>
    </li>
    <li>
      <Link to="/page2">Styled Components Demo</Link>
    </li>
  </ul>
);

export default Nav;
