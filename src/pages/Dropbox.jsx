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
        </div>
        <NavLink className="find-your-plan" target="_blank">
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
        <video
          className="video-my"
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
        <div className="wda">
          <h2>See what sets Dropbox apart</h2>
          <div className="wda-flex">
            <div className="wda-info-flex">
              <picture className="wda-piture">
                <img
                  src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/dropbox/emoji smile.svg?id=42f38245-8ec6-4e1f-8519-c66d296b1cbf"
                  className="wda-img"
                ></img>
              </picture>
              <h3 className="wda-h3">Your files, not ours</h3>
              <p className="wda-p">
                With Dropbox, your files belong to you, not us, so you can be
                sure we’re not reselling your data.
              </p>
            </div>
            <div className="wda-info-flex">
              <picture className="wda-piture">
                <img
                  src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/dropbox/cloud done.svg?id=f86f48e9-1a60-4f75-9075-79cd479ddb2b"
                  className="wda-img"
                ></img>
              </picture>
              <h3 className="wda-h3">All your files in one place</h3>
              <p className="wda-p">
                Store computer backups, photo libraries, thousands of
                documents—all your files, in the same place.
              </p>
            </div>
            <div className="wda-info-flex">
              <picture className="wda-piture">
                <img
                  src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/dropbox/twinkle.svg?id=4d4d29e5-c87f-416b-a3ac-583eb86fc627"
                  className="wda-img"
                ></img>
              </picture>
              <h3 className="wda-h3">One-of-a-kind functionality</h3>
              <p className="wda-p">
                Store files as large as 2 TB each, sync at light speed, and
                allow anyone to preview nearly 200 file types.
              </p>
            </div>
            <div className="wda-info-flex">
              <picture className="wda-piture">
                <img
                  src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/dropbox/shield.svg?id=bda0e9da-566d-4941-91a6-05b39f678c8d"
                  className="wda-img"
                ></img>
              </picture>
              <h3 className="wda-h3">Ease of use and security</h3>
              <p className="wda-p">
                2/3 of surveyed users say Dropbox keeps their files more secure
                and we’re a leader in ease of use.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="block2"></div>
      <div className="block3"></div>
      <div className="block4"></div>
      <div></div>
    </div>
  );
}
