import Logo from '../../images/ns-logo.svg';
import { NavLink } from "react-router-dom";

function NavSlideout(props) {
    const {
        navSlideoutStyle,
        handleChange
    } = props;

    return (
        <div className={`nav-slideout ${navSlideoutStyle}`}>
            <div className="nav-slideout--header">
                <div className="slideout--header-close" onClick={handleChange}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15.996">
                        <path id="Icon_ionic-ios-close" data-name="Icon ionic-ios-close" d="M21.181,19.287,26.9,13.572A1.339,1.339,0,0,0,25,11.678l-5.715,5.715-5.715-5.715a1.339,1.339,0,1,0-1.894,1.894l5.715,5.715L11.679,25a1.339,1.339,0,0,0,1.894,1.894l5.715-5.715L25,26.895A1.339,1.339,0,0,0,26.9,25Z" transform="translate(-11.285 -11.289)" />
                    </svg>
                </div>
                <div className='nav--logo-container'>
                    <h1 className="nav--logoText">Spoort Niet</h1>
                    <img
                        src={Logo}
                        alt="Logo"
                        className="nav--logo"
                    ></img>
                </div>
            </div>
            <div className="slideout--links">
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                (isActive ? "slideout--active-button" : "")}
                        >
                            <button onClick={handleChange}>Plannen</button>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/verstoringen"
                            className={({ isActive }) =>
                                (isActive ? "slideout--active-button" : "")}
                        >
                            <button onClick={handleChange}>Verstoringen</button>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/stations"
                            className={({ isActive }) =>
                                (isActive ? "slideout--active-button" : "")}
                        >
                            <button onClick={handleChange}>Stations</button>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavSlideout;