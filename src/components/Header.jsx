import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    setMenuOpen(false); // Close the menu on window resize
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <div className="header-items-l">
        <Link className="site-logo" to="/dropbox">
          <span className="svg-container">
            <img src="/svgs/dropbox.svg" alt="Dropbox Logo" />
          </span>
        </Link>
        <Link className="site-name" to="/dropbox">
          <img src="/svgs/site-text.svg" alt="Dropbox" />
        </Link>
        <div className="header-items">
          {windowWidth < 1024 ? (
            <>
              <div className="log-sign-menu">
                <div className="log-sign">
                  <Link className="sign-up1" target="_blank" to="#">
                    Sign up
                  </Link>
                  <Link className="login1" target="_blank" to="#">
                    Login
                  </Link>
                </div>
                <nav id="menu" ref={menuRef}>
                  <label
                    htmlFor="menu-toggle"
                    id="menu-icon"
                    onClick={toggleMenu}>
                    &#9776;
                  </label>
                  <input
                    type="checkbox"
                    id="menu-toggle"
                    checked={menuOpen}
                    readOnly
                  />
                  <div
                    className="header-item-info"
                    style={{ display: menuOpen ? "block" : "none" }}>
                    <div className="header-left">
                      <Link className="why-dropbox" to="#">
                        Why Dropbox?
                      </Link>
                      <Link className="products" to="#">
                        Products
                      </Link>
                      <Link className="solutions" to="#">
                        Solutions
                      </Link>
                      <Link className="pricing" to="#">
                        Pricing
                      </Link>
                    </div>
                    <div className="header-right">
                      <Link className="global" to="#">
                        <img src="/svgs/global.svg" alt="Global" />
                      </Link>
                      <Link className="contact" to="#">
                        Contact
                      </Link>
                      <Link className="get-app" to="#">
                        Get app
                      </Link>
                    </div>
                  </div>
                </nav>
              </div>
            </>
          ) : (
            <>
              <div className="header-item-info">
                <div className="header-left">
                  <button className="why-dropbox">
                    Why Dropbox?
                    {/* Add your dropdown content here */}
                  </button>
                  <button className="products">Products</button>
                  <button className="solutions">Solutions</button>
                  <button className="pricing">Pricing</button>
                </div>
                <button className="global">
                  <img src="/svgs/global.svg" alt="Global" />
                </button>
                <button className="contact">Contact</button>
                <button className="get-app">Get app</button>
              </div>
              <div className="log-sign">
                <button className="sign-up" target="_blank" to="#">
                  Sign up
                </button>
                <button className="login" target="_blank" to="#">
                  Login
                </button>
              </div>
            </>
          )}
          <Link className="get-started" target="_blank" to="#">
            Get started
            <span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="dig-UIIcon dig-UIIcon--standard"
                width="24"
                height="24"
                role="presentation"
                focusable="false">
                <path
                  d="M5 11.75h12m-5.25-6.5 6.25 6.5-6.25 6.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  vectorEffect="non-scaling-stroke"></path>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
