import { FC } from 'react';
import './Navbar.scss';
import { cities, cloudy, dark_theme, map, settings, weather } from "../assets";
import { NavLink } from "react-router-dom";

interface NavbarProps {

}

const Navbar: FC<NavbarProps> = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <NavLink to={"/"} className="navbar__logo-item">
          <img src={cloudy} alt="cloudy" />
        </NavLink>
      </div>
      <ul className="navbar__links">
        <NavLink to={"/start"} className="navbar__links-item">
          <img src={weather} alt="weather" />
          <p>Weather</p>
        </NavLink>
        <NavLink to={"/cities"} className="navbar__links-item">
          <img src={cities} alt="cities" />
          <p>Cities</p>
        </NavLink>
        <NavLink to={"/map"} className="navbar__links-item">
          <img src={map} alt="map" />
          <p>Map</p>
        </NavLink>
        <NavLink to={"/settings"} className="navbar__links-item">
          <img src={settings} alt="settings" />
          <p>Settings</p>
        </NavLink>
      </ul>
      <div className="navbar__theme">
        <img src={dark_theme} alt="dark_theme" />
        <p>Theme</p>
      </div>
    </nav>
  );
};

export default Navbar;