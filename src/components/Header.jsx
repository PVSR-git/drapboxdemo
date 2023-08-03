import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";
import bgImg from "../assets/dropbox.png";

export default function Header() {
  return (
    <header>
      <div className="header-items-l">
        <Link className="site-logo" to="/dropbox">
          <img src={bgImg} className="site-img" width="48" height="48" />
        </Link>
        <Link className="site-name" to="/dropbox">
          <img src="/svgs/site-text.svg"></img>
        </Link>
        <Link className="why-dropbox" target="_balnk">
          Why Dropbox ?
        </Link>
        <Link className="products" target="_balnk">
          Products
        </Link>
        <Link className="solutions" target="_balnk">
          Solutions
        </Link>
        <Link className="pricing" target="_balnk">
          Pricing
        </Link>
      </div>
      <div className="header-items-r">
        <Link className="global" target="_balnk">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            class="dig-UIIcon dig-UIIcon--standard"
            width="24"
            height="24"
            role="presentation"
            focusable="false"
          >
            <path
              d="M11.75 4C6.535 4 4 6.535 4 11.75s2.535 7.75 7.75 7.75 7.75-2.535 7.75-7.75S16.965 4 11.75 4Zm5.714 4.5H14.87a9.237 9.237 0 0 0-.623-2.711A4.454 4.454 0 0 1 17.463 8.5ZM18 11.75c.002.586-.042 1.171-.133 1.75H14.97c.022-.579.03-1.167.03-1.75s-.008-1.171-.03-1.75h2.897c.09.579.135 1.164.133 1.75ZM11.75 18c-.616 0-1.3-.41-1.598-3h3.196c-.298 2.59-.982 3-1.598 3Zm-1.712-4.5c-.024-.524-.038-1.1-.038-1.75 0-.65.014-1.226.038-1.75h3.424c.024.524.038 1.1.038 1.75 0 .65-.014 1.226-.038 1.75h-3.424ZM5.5 11.75c-.002-.586.042-1.171.133-1.75H8.53c-.022.579-.03 1.167-.03 1.75s.008 1.171.03 1.75H5.633a11.074 11.074 0 0 1-.133-1.75Zm6.25-6.25c.616 0 1.3.41 1.598 3h-3.196c.298-2.59.982-3 1.598-3Zm-2.497.289A9.236 9.236 0 0 0 8.63 8.5H6.036a4.454 4.454 0 0 1 3.217-2.711ZM6.036 15H8.63c.07.93.28 1.844.623 2.711A4.453 4.453 0 0 1 6.037 15Zm8.21 2.711A9.237 9.237 0 0 0 14.87 15h2.594a4.454 4.454 0 0 1-3.217 2.711Z"
              fill="currentColor"
              vector-effect="non-scaling-stroke"
            ></path>
          </svg>
        </Link>
        <Link className="contact" target="_balnk">
          Contact
        </Link>
        <Link className="get-app" target="_balnk">
          Get app
        </Link>
        <Link className="sign-up" target="_balnk">
          Sign up
        </Link>
        <Link className="login" target="_balnk">
          Login
        </Link>
        <Link className="get-started" target="_balnk">
          Get started{" "}
          <span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              class="dig-UIIcon dig-UIIcon--standard"
              width="24"
              height="24"
              role="presentation"
              focusable="false"
            >
              <path
                d="M5 11.75h12m-5.25-6.5 6.25 6.5-6.25 6.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                vector-effect="non-scaling-stroke"
              ></path>
            </svg>
          </span>
        </Link>
      </div>
    </header>
  );
}
