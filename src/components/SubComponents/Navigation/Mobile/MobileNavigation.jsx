import React from "react";
import { Link } from "react-scroll/modules";
import { Navbar } from "../../../../api/Navbar";
import "./MobileNavigation.css";
import navlogo from "../../../../assests/Image/navbar-logo.png";

const MobileNavigation = (props) => {
  return (
    <>
      <div
        className={
          props.Toggle
            ? "MobileNavigation"
            : "MobileNavigation sticky-header-overlay-active"
        }
      >
        <div className="closebutton" onClick={props._hanldeToggle}>
          <i className="fa-solid fa-xmark"></i>
        </div>

        <div
          className="mobilemenu"
          style={{ right: props.Toggle ? "0" : "-400px" }}
        >
          <div className="branding">
            <div className="logo">
              <img
                src={navlogo}
                alt="navbarlogo"
                className=" navbarlogo img-fluid"
              />
            </div>
          </div>
          <div className=" menubar">
            <ul>
              {Navbar.map((e) => (
                <>
                  <li className="nav-item" key={e.id}>
                    <Link
                      to={e.path}
                      className={e.clsname}
                      onClick={props._hanldeToggle}
                    >
                      {e.name}
                    </Link>
                  </li>
                </>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavigation;
