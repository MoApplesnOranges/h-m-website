import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="list-nav">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="list-nav">
          <NavLink to="/about">About HM LLC</NavLink>
        </li>
        <li className="list-nav">
          <NavLink to="/contact">Contact Me</NavLink>
        </li>
        <li className="list-nav">
          <NavLink to="/services">Services Provided</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
