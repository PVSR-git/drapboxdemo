import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="  ">
      <div className="header-items-l  ">
        <Link className="site-logo" to="/dropbox">
          <span className="svg-container">
            <img src="/svgs/dropbox.svg" />
          </span>
        </Link>
        <Link className="site-name" to="/dropbox">
          <img src="/svgs/site-text.svg" />
        </Link>
        <div className="header-items">
          {windowWidth < 1024 ? (
            <>
              <div className="log-sign-menu">
                <div className="log-sign">
                  <Link className="sign-up1" target="_blank">
                    Sign up
                  </Link>
                  <Link className="login1" target="_blank">
                    Login
                  </Link>
                </div>
                <nav id="menu">
                  <label htmlFor="menu-toggle" id="menu-icon">
                    &#9776;
                  </label>
                  <input type="checkbox" id="menu-toggle" />
                  <div className="header-item-info">
                    <div className="header-left">
                      <Link className="why-dropbox">Why Dropbox?</Link>
                      <Link className="products">Products</Link>
                      <Link className="solutions">Solutions</Link>
                      <Link className="pricing">Pricing</Link>
                    </div>

                    <div className="header-right">
                      <Link className="global">
                        <img src="/svgs/global.svg" alt="Global" />
                      </Link>
                      <Link className="contact">Contact</Link>
                      <Link className="get-app">Get app</Link>
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
                    <div className="why-dropbox-div">
                      <div>
                        <p>Overview</p>
                        <p>Get inspired</p>
                        <p>What customers say</p>
                        <p>App integrations</p>
                        <p>Resources</p>
                      </div>
                      <div>
                        <p>Better with Dropbox</p>
                        <p>Share files</p>
                        <p>Store and organize</p>
                        <p>Sync your devices</p>
                        <p>Protect and secure data</p>
                        <p>Contact remote teams</p>
                        <p>Keep work moving</p>
                        <p>Always-on backup</p>
                        <p>Sign a document</p>
                        <p>Track document analytics</p>
                      </div>
                    </div>
                  </button>
                  <button className="products">Products</button>
                  <button className="solutions">
                    Solutions
                    <div className="solutions-div">
                      <div>
                        <p>Roles</p>
                        <p>Creatives</p>
                        <p>Sales</p>
                        <p>Marketing</p>
                        <p>HR</p>
                        <p>IT</p>
                        <p>Team Lead</p>
                        <p>Personal</p>
                      </div>
                      <div>
                        <p>Industries</p>
                        <p>Construction</p>
                        <p>Tecknology</p>
                        <p>Marketing</p>
                        <p>Manufacturing</p>
                        <p>Media</p>
                        <p>Professional Services</p>
                      </div>
                    </div>
                  </button>
                  <button className="pricing">Pricing</button>
                </div>

                <button className="global">
                  <img src="/svgs/global.svg" />
                </button>
                <button className="contact">
                  Contact
                  <div className="contact-div">
                    <div>
                      <p>Support</p>
                      <p>Helpcenter</p>
                      <p>Comunity center</p>
                    </div>
                    <div>
                      <p>Contactsales</p>
                      <p>Email</p>
                      <p>+1 855-237-6726</p>
                    </div>
                  </div>
                </button>
                <button className="get-app">
                  Get app
                  <div className="get-app-div">
                    <div>
                      <p>Desktop app</p>
                      <p>Mobile app</p>
                    </div>
                  </div>
                </button>
              </div>

              <div className="log-sign">
                <button className="sign-up" target="_balnk">
                  Sign up
                </button>
                <button className="login" target="_balnk">
                  Login
                </button>
              </div>
            </>
          )}
          <Link className="get-started" target="_blank">
            Get started{" "}
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
