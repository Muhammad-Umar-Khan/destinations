import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import "./NavLinks.css";

const NavLinks = () => {
  const login = useSelector((state) => state.loginReducer.login);
  let routes;
  if (login) {
    routes = (
      <>
        <li>
          <NavLink to="/">ALL USERS</NavLink>
        </li>
        <li>
          <NavLink to="/u1/places">MY PLACES</NavLink>
        </li>
        <li>
          <NavLink to="/places/new">NEW PLACE</NavLink>
        </li>
      </>
    );
  } else {
    routes = (
      <>
        <li>
          <NavLink to="/">ALL USERS</NavLink>
        </li>
        <li>
          <NavLink to="/users/auth">AUTHENTICATE</NavLink>
        </li>
      </>
    );
  }
  return <ul className="nav-links">{routes}</ul>;
};

export default NavLinks;
