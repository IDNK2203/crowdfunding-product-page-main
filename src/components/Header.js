import menu_open from "../images/icon-hamburger.svg";
import menu_close from "../images/icon-close-menu.svg";
import logo from "../images/logo.svg";
import { useState, useEffect } from "react";

function Header() {
  let overlay_cn = "overlay";
  let nav__list_cn = "nav__list";
  let nav_menu__close_btn_cn = "nav_menu__close-btn";
  const [menuOpened, setMenuOpened] = useState(false);
  const handleMenuToggle = (e) => {
    setMenuOpened(!menuOpened);
  };

  useEffect(() => {
    if (menuOpened) {
      window.scrollTo(0, 0);
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [menuOpened]);

  return (
    <div>
      <header>
        <div className="nav__container">
          {/* Nav Brand */}
          <div className="nav_brand">
            <img src={logo} alt="menu-icon" srcset="" />
          </div>
          {/* OverLay */}
          <div
            onClick={handleMenuToggle}
            className={menuOpened ? overlay_cn : (overlay_cn += " nav--closed")}
          ></div>

          {/* Nav Links */}
          <nav className="nav">
            <ul
              className={
                menuOpened ? nav__list_cn : (nav__list_cn += " nav--closed")
              }
            >
              <li className="nav__item">
                <a href="/" className="nav_link">
                  About
                </a>
              </li>{" "}
              <li className="nav__item">
                <a href="/" className="nav_link">
                  Discover
                </a>
              </li>{" "}
              <li className="nav__item">
                <a href="/" className="nav_link">
                  Get Started
                </a>
              </li>
            </ul>
          </nav>

          {/*Nav Menu Icons  */}
          <div className="nav_menu">
            <div onClick={handleMenuToggle} className="nav_menu__open-btn">
              <img src={menu_open} alt="menu-icon" srcset="" />
            </div>
            <div
              onClick={handleMenuToggle}
              className={
                menuOpened
                  ? nav_menu__close_btn_cn
                  : (nav_menu__close_btn_cn += " nav--closed")
              }
            >
              <img src={menu_close} alt="menu-icon" srcset="" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Header;
