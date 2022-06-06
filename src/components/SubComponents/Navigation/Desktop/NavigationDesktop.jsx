import React from "react";
import "./NavigationDesktop.css";
import navlogo from "../../../../assests/Image/navbar-logo.png";
import { Link } from "react-scroll/modules";
import { Navbar } from "../../../../api/Navbar";

const NavigationDesktop = (props) => {
  return (
    <div
      className={
        props.Toggle
          ? "NavigationDesktop"
          : "NavigationDesktop sticky-header-overlay-active"
      }
    >
      <div
        className=" desktopmenu"
        style={{ right: props.Toggle ? "0" : "-400px" }}
      >
        <div className="branding">
          <div className="logo">
            <img src={navlogo} alt="navbarlogo" className="img-fluid" />
          </div>
        </div>
        <div className="menubar">
          <ul>
            {Navbar.map((value) => (
              <>
                <li className="nav-item" key={`disktop${value.id}`}>
                  {console.log(value.id)}
                  <Link
                    to={value.path}
                    className={value.clsname}
                    onClick={props._hanldeToggle}
                  >
                    {value.name}
                  </Link>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavigationDesktop;
