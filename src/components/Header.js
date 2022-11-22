import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
      <div className="tm-top-bar" id="tm-top-bar">
        <div className="container">
          <div className="row">
            <nav className="navbar navbar-expand-lg narbar-light">
              <Link
                className="navbar-brand mr-auto"
                to="/hotels"
              >
                <img src="/img/logo.png" alt="Site logo" />
                Hotel
              </Link>
              <div id="mainNav" className="collapse navbar-collapse tm-bg-white">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink
                      activeclassname="active"
                      className="nav-link"
                      to="/hotels"
                    >
                      Hotels
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeclassname="active"
                      className="nav-link"
                      to="/reserve"
                    >
                      Reserve
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
