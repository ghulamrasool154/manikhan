import React, { useState } from "react";

import "./Header.css";
import footerwhitelogo from "../../assests/Image/navbar-white-foot-logo.png";
import NavigationDesktop from "../../components/SubComponents/Navigation/Desktop/NavigationDesktop";
import MobileNavigation from "../../components/SubComponents/Navigation/Mobile/MobileNavigation";
import bugicon from "../../assests/Image/bugicon.PNG";
const Header = () => {
  const [Toggle, setToggle] = useState(false);

  const _hanldeToggle = () => {
    setToggle(!Toggle);
  };
  return (
    <header>
      <div className="disktopmenu">
        <div className="top">
          <div className="icon" onClick={_hanldeToggle}>
            {Toggle ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <img src={bugicon} alt="bugicon" className="img-fluid" />
            )}
          </div>
          <NavigationDesktop Toggle={Toggle} _hanldeToggle={_hanldeToggle} />
        </div>
        <div className="bottom">
          <img src={footerwhitelogo} alt="headerboot" className="img-fluid" />
        </div>
      </div>

      <div className="mobile">
        <div className="left">
          <img src={footerwhitelogo} alt="headerboot" className="img-fluid" />
        </div>
        <div className="right">
          <div className="icon" onClick={_hanldeToggle}>
            <img src={bugicon} alt="bugicon" className="img-fluid" />{" "}
          </div>
          <MobileNavigation Toggle={Toggle} _hanldeToggle={_hanldeToggle} />
        </div>
      </div>
    </header>
  );
};

export default Header;
