import Logo from '../../images/ns-logo.svg';
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import NavSlideout from '../NavSlideout/NavSlideout';


function Navbar() {
  const [navSlideoutStyle, setNavSlideoutStyle] = useState('slideout--hidden');

  function changeNavSlideoutStyle() {
    navSlideoutStyle === 'slideout--hidden' ?
      setNavSlideoutStyle('')
      : setNavSlideoutStyle('slideout--hidden')
  }

  return (
    <div>
      <NavSlideout
        navSlideoutStyle={navSlideoutStyle}
        handleChange={changeNavSlideoutStyle}
      />
      <nav>
        <div className='nav--left-container'>

          <div className="nav-hamburger-a" onClick={changeNavSlideoutStyle}>
            <div className="nav-hamburger">
              <span></span>
              <span></span>
            </div>
          </div>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  (isActive ? "nav--selected" : "link")}
              >
                Plannen
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/verstoringen"
                className={({ isActive }) =>
                  (isActive ? "nav--selected" : "link")}
              >
                Verstoringen
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/stations"
                className={({ isActive }) =>
                  (isActive ? "nav--selected" : "link")}
              >
                Stations
              </NavLink>
            </li>
          </ul>
        </div>

        <div className='nav--right-container'>
          <h1 className="nav--logoText">Spoort Niet</h1>
          <img
            src={Logo}
            alt="Logo"
            className="nav--logo"
          ></img>
        </div>
      </nav>
    </div>

  );
}

export default Navbar;