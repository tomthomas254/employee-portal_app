import React from "react";
import constants from "../router.constants";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <aside class="content-wrapper__navigation">
      <div class="navigation-block">
        <ul>
          {constants.navbarLinks.map((item,i) => (
            <li key={i} >
              <NavLink to={item.path} className="navbar-list" >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
