import React from "react";
import { NavLink } from "react-router-dom";
import bgvid from "../assets/Dropbox.mp4";

export default function Dropbox() {
  return (
    <div className="container">
      <div className="block1">
        <div className="text-info">
          <h2>Join over 700 million registered users who trust Dropbox</h2>
          <p>
            Easy to use, reliable, private, and secure. It’s no wonder Dropbox
            is the choice for storing and sharing your most important files.
          </p>
          <nav>
            <NavLink className="find-your-plan" to="">
              Find your plan
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
            </NavLink>
          </nav>
        </div>

        <video
          className="video dwg-media-video dwg-media-video--object-fit-cover dwg-box dwg-display--block dwg-position--absolute dwg-width--full dwg-height--full"
          // aria-hidden="false"
          aria-label="Dropbox"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={bgvid} type="video/mp4" />
          {/* <source src={bgvid} type="video/webm; codecs=vp9" />
          <source src={bgvid} type="video/quicktime; codecs=hvc1" /> */}
        </video>
      </div>
      <div className="block2"></div>
      <div className="block3"></div>
      <div className="block4"></div>
      <div></div>
    </div>
  );
}
