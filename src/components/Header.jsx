import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";
import bgImg from "../assets/dropbox.png";

export default function Header() {
  return (
    <header>
      <div className="header-items">
        <Link className="site-logo" to="/">
          <img src={bgImg} className="site-img" width="300" height="300" />
        </Link>
      </div>
    </header>
  );
}
