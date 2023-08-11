import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import bgvid from "../assets/Dropbox.mp4";
import bgimg1 from "../assets/Segmentation.png";
import bgimg2 from "../assets/Segmentation_2.png";

export default function Dropbox() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    showSlides();
  }, []); // Empty dependency array ensures the effect runs once after initial render

  function showSlides() {
    let slides = document.querySelectorAll(".block6-img-info");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    if (slideIndex >= slides.length) {
      setSlideIndex(0);
    }
    if (slideIndex < 0) {
      setSlideIndex(slides.length - 1);
    }
    slides[slideIndex].style.display = "flex";
  }

  function nextSlide() {
    setSlideIndex((prevIndex) => prevIndex + 1);
    showSlides();
  }

  function prevSlide() {
    setSlideIndex((prevIndex) => prevIndex - 1);
    showSlides();
  }
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
          <h2 style={{ fontStretch: "expanded" }}>
            See what sets Dropbox apart
          </h2>
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

      {/* BLOCK2 */}

      <div className="block2">
        <h2>A set of products to help you do more</h2>
        <div className="block2-grid">
          <div className="asp-flex">
            <picture className="asp-piture">
              <img
                src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/Dropbox.svg?id=fab7cfbe-2a98-437d-bf5a-4f1972dab31c"
                className="wda-img"
              ></img>
            </picture>
            <h3 className="asp-h3">Dropbox</h3>
            <p className="asp-p">
              Securely store, organize, and share all your files.
            </p>
            <Link className="asp-link">
              Learn more
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
          <div className="asp-flex">
            <picture className="wda-piture">
              <img
                src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/Sign.svg?id=108a6e2c-0a65-4828-b4a8-d9db1acbab30"
                className="wda-img"
                height={40}
              ></img>
            </picture>
            <h3 className="asp-h3">Sign</h3>
            <p className="asp-p">
              Streamline your document workflows with legally-binding
              eSignatures.
            </p>
            <Link className="asp-link">
              Learn more
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
          <div className="asp-flex">
            <picture className="asp-piture">
              <img
                src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/Docsend.svg?id=bb81fa5c-7d2e-451b-a3cc-6f5a8ec31dea"
                className="wda-img"
              ></img>
            </picture>
            <h3 className="asp-h3">DocSend</h3>
            <p className="asp-p">
              Securely share your documents with real-time insights, so you know
              what's most impactful.
            </p>
            <Link className="asp-link">
              Learn more
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
          <div className="asp-flex">
            <picture className="asp-piture">
              <img
                src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/Backup.svg?id=84564d6e-24a2-4509-8759-e6f3632fcddc"
                className="wda-img"
              ></img>
            </picture>
            <h3 className="asp-h3">Backup</h3>
            <p className="asp-p">
              Automatically back up important files on your devices to the cloud
              and easily restore them.
            </p>
            <Link className="asp-link">
              Learn more
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
          <div className="asp-flex">
            <picture className="asp-piture">
              <img
                src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/Capture.svg?id=5feb571f-dfa5-43e1-aff5-c46725f9d60f"
                className="wda-img"
              ></img>
            </picture>
            <h3 className="asp-h3">Capture</h3>
            <p className="asp-p">
              Get your message across with screenshots, GIFs, or videos recorded
              right on your screen.
            </p>
            <Link className="asp-link">
              Learn more
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
          <div className="asp-flex">
            <picture className="asp-piture">
              <img
                src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/Transfer.svg?id=7e58da75-6dba-475b-b986-617d68eb2d01"
                className="wda-img"
              ></img>
            </picture>
            <h3 className="asp-h3">Transfer</h3>
            <p className="asp-p">
              Quickly and securely deliver large files—up to 100 GB—to anyone.
            </p>
            <Link className="asp-link">
              Learn more
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
          <div className="asp-flex">
            <picture className="asp-piture">
              <img
                src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/Paper.svg?id=2550ae20-69c0-4aa0-ab51-20561cffe714"
                className="wda-img"
              ></img>
            </picture>
            <h3 className="asp-h3">Paper</h3>
            <p className="asp-p">
              Create collaborative documents to coordinate work and drive
              projects forward.
            </p>
            <Link className="asp-link">
              Learn more
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
          <div className="asp-flex">
            <picture className="asp-piture">
              <img
                src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/Passwords.svg?id=77d004ac-0ed7-4d7c-b18a-6a00feca9eaa"
                className="wda-img"
              ></img>
            </picture>
            <h3 className="asp-h3">Passwords</h3>
            <p className="asp-p">
              Automatically store unlimited passwords in one central, secure
              place.
            </p>
            <Link className="asp-link">
              Learn more
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
        </div>
      </div>

      {/* BLOCK3 */}

      <div className="block3">
        <h1>How will you use Dropbox?</h1>
        <div className="b3-flex1">
          <div className="for-work">
            <img src={bgimg1}></img>
            <h2>For Work</h2>
            <p>
              Work efficiently with teammates and clients, stay in sync on
              projects, and keep company data safe—all in one place.
            </p>
            <Link className="for-work-link">
              Get Dropbox for work
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
          <div className="for-personal">
            <img src={bgimg2}></img>
            <h2>For personal use</h2>
            <p>
              Keep everything that’s important to you and your family shareable
              and safe in one place. Back up files in the cloud, share photos
              and videos, and more.
            </p>
            <Link className="for-personal-link">
              Get Dropbox for personal{" "}
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
        </div>
        <div className="b3-flex2">
          <h1>Cloud storage you can count on</h1>
          <div className="cstc">
            <div className="cstc-info">
              <img src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/dropbox/56_graphitebg.svg?id=8086678e-8b77-4720-bc35-4d5eb6b08c2d"></img>
              <h3>Cloud storage you can count on</h3>
              <p>have at least one Dropbox team plan.</p>
            </div>
            <div className="cstc-info">
              <img src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/dropbox/1B+_graphitebg.svg?id=de40db5c-8700-4100-9822-4ee6feff8e9f"></img>
              <h3>mobile app downloads</h3>
              <p>
                with Editors’ Choice Awards from the Google Play and Apple App
                Store.
              </p>
            </div>
            <div className="cstc-info">
              <img src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/dropbox/600K_graphitebg.svg?id=b7cced4c-f6a4-4375-9eb9-28e53ea24d7a"></img>
              <h3>teams globally</h3>
              <p>
                use Dropbox to share work, safeguard content, and grow their
                business.
              </p>
            </div>
            <div className="cstc-info">
              <img src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/dropbox/4.5B+_graphitebg.svg?id=80fdd51d-16da-4e7e-ba93-2b7ae408d2e4"></img>
              <h3>connections and counting</h3>
              <p>created through Dropbox file sharing.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="block4">
        <div className="block4-text-info">
          <div className="block4-text">
            <h1>What else can Dropbox help you do?</h1>
            <p>
              Dropbox brings everything—traditional files, cloud content, and
              web shortcuts—together in one place.
            </p>
          </div>
        </div>
        <div className="block4-grid">
          <div className="block4-flex-child1">
            <section className="section-child">
              <div>
                <h2>Get 2 GB of cloud storage for free with Dropbox Basic</h2>
                <p>
                  Save and access your files from any device, and share them
                  with anyone. Discover what Dropbox can do for you- get a free
                  account, no strings attached!
                </p>
                <Link className="asp-link">
                  Learn more
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
              <svg
                viewBox="0 0 24 24"
                fill="none"
                class="dig-UIIcon dig-UIIcon--standard svg"
                width="24"
                height="24"
                role="presentation"
                focusable="false"
              >
                <path
                  d="M18.75 14.75 12 8.5 5.25 14.75"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  vector-effect="non-scaling-stroke"
                ></path>
              </svg>
            </section>
            <section>
              <h2>
                Dropbox Plus has room for all your content with space to spare
              </h2>
              <svg
                className="svg"
                viewBox="0 0 24 24"
                fill="none"
                class="dig-UIIcon dig-UIIcon--standard"
                width="24"
                height="24"
                role="presentation"
                focusable="false"
              >
                <path
                  d="m5.25 9.25 6.5 6.25 6.5-6.25"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  vector-effect="non-scaling-stroke"
                ></path>
              </svg>
            </section>
            <section>
              <h2>
                Dropbox Family is a place for everyone with space for everything
              </h2>
              <svg
                className="svg"
                viewBox="0 0 24 24"
                fill="none"
                class="dig-UIIcon dig-UIIcon--standard"
                width="24"
                height="24"
                role="presentation"
                focusable="false"
              >
                <path
                  d="m5.25 9.25 6.5 6.25 6.5-6.25"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  vector-effect="non-scaling-stroke"
                ></path>
              </svg>
            </section>
            <section>
              <h2>
                Make life easier for you and your clients with Dropbox
                Professional
              </h2>
              <svg
                className="svg"
                viewBox="0 0 24 24"
                fill="none"
                class="dig-UIIcon dig-UIIcon--standard"
                width="24"
                height="24"
                role="presentation"
                focusable="false"
              >
                <path
                  d="m5.25 9.25 6.5 6.25 6.5-6.25"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  vector-effect="non-scaling-stroke"
                ></path>
              </svg>
            </section>
            <section>
              <h2>Streamline your document workflow with Dropbox Sign</h2>
              <svg
                className="svg"
                viewBox="0 0 24 24"
                fill="none"
                class="dig-UIIcon dig-UIIcon--standard"
                width="24"
                height="24"
                role="presentation"
                focusable="false"
              >
                <path
                  d="m5.25 9.25 6.5 6.25 6.5-6.25"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  vector-effect="non-scaling-stroke"
                ></path>
              </svg>
            </section>
            <section>
              <h2>
                Centralize, secure, and easily access your work with Dropbox
                Standard
              </h2>
              <svg
                className="svg"
                viewBox="0 0 24 24"
                fill="none"
                class="dig-UIIcon dig-UIIcon--standard"
                width="24"
                height="24"
                role="presentation"
                focusable="false"
              >
                <path
                  d="m5.25 9.25 6.5 6.25 6.5-6.25"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  vector-effect="non-scaling-stroke"
                ></path>
              </svg>
            </section>
            <section>
              <h2>
                DocSend lets you track, analyze, and optimize your content
              </h2>
              <svg
                className="svg"
                viewBox="0 0 24 24"
                fill="none"
                class="dig-UIIcon dig-UIIcon--standard"
                width="24"
                height="24"
                role="presentation"
                focusable="false"
              >
                <path
                  d="m5.25 9.25 6.5 6.25 6.5-6.25"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  vector-effect="non-scaling-stroke"
                ></path>
              </svg>
            </section>
            <section>
              <h2>
                Proactively detect threats to your team’s content with Dropbox
                Advanced
              </h2>
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
                  d="m5.25 9.25 6.5 6.25 6.5-6.25"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  vector-effect="non-scaling-stroke"
                ></path>
              </svg>
            </section>
          </div>
          <div className="block4-flex-child2">
            <img
              alt="Image of files and folders that are organized and stored in Dropbox"
              loading="lazy"
              src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/basic/basic_hero_ui@2x.png?id=4bf1c1f8-0d59-40f5-94b9-7ff5e6c7b086&amp;output_type=png"
              srcset="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/basic/basic_hero_ui@2x.png?id=4bf1c1f8-0d59-40f5-94b9-7ff5e6c7b086&amp;width=414&amp;output_type=png 414w, https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/basic/basic_hero_ui@2x.png?id=4bf1c1f8-0d59-40f5-94b9-7ff5e6c7b086&amp;width=828&amp;output_type=png 828w, https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/basic/basic_hero_ui@2x.png?id=4bf1c1f8-0d59-40f5-94b9-7ff5e6c7b086&amp;width=1024&amp;output_type=png 1024w, https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/basic/basic_hero_ui@2x.png?id=4bf1c1f8-0d59-40f5-94b9-7ff5e6c7b086&amp;width=1280&amp;output_type=png 1280w, https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/basic/basic_hero_ui@2x.png?id=4bf1c1f8-0d59-40f5-94b9-7ff5e6c7b086&amp;output_type=png 1440w"
            ></img>
          </div>
        </div>
      </div>
      <div className="block5">
        <div className="block5-text">
          <h1>Get more out of Dropbox by connecting with the tools you love</h1>
          <a href="">Learn more about partner integrations</a>
        </div>
        <div className="block5-grid">
          <section>
            <img
              src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/dropbox/Integrations_1@2x.png?id=0b49280f-4fde-427d-95f2-f39f09170f06&amp;output_type=png"
              srcset="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/dropbox/Integrations_1@2x.png?id=0b49280f-4fde-427d-95f2-f39f09170f06&amp;output_type=png 128w"
            ></img>
            <h2>Zoom</h2>
            <p>
              Enhance remote collaboration with Zoom instant meetings and video
              recordings.
            </p>
          </section>
          <section>
            <img
              src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/dropbox/Integrations_2@2x.png?id=dc2c7070-361b-4c7a-8af6-4c9a1604e165&amp;output_type=png"
              srcset="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/dropbox/Integrations_2@2x.png?id=dc2c7070-361b-4c7a-8af6-4c9a1604e165&amp;output_type=png 128w"
            ></img>
            <h2>Slack</h2>
            <p>
              Bring Slack conversations and Dropbox content together to keep
              teams in sync.
            </p>
          </section>
          <section>
            <img
              src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/dropbox/Integrations_3@2x.png?id=9fa9f7ca-08d5-488c-9d84-3aa7054859a9&amp;output_type=png"
              srcset="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/dropbox/Integrations_3@2x.png?id=9fa9f7ca-08d5-488c-9d84-3aa7054859a9&amp;output_type=png 128w"
            ></img>
            <h2>Adobe Creative Cloud</h2>
            <p>
              Easily and securely send files to clients and vendors from within
              Adobe Photoshop.
            </p>
          </section>
          <section>
            <img
              src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/dropbox/Integrations_4@2x.png?id=ce8269af-ef1a-460a-8199-65af3dd978a3&amp;output_type=png"
              srcset="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/dropbox/Integrations_4@2x.png?id=ce8269af-ef1a-460a-8199-65af3dd978a3&amp;output_type=png 128w"
            ></img>
            <h2>Microsoft Office</h2>
            <p>Easily access, edit, and share Office docs online in Dropbox.</p>
          </section>
          <section>
            <img
              src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/dropbox/Integrations_5@2x.png?id=51654bec-5969-4532-93d9-e7a265237d4a&amp;output_type=png"
              srcset="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/dropbox/Integrations_5@2x.png?id=51654bec-5969-4532-93d9-e7a265237d4a&amp;output_type=png 128w"
            ></img>
            <h2>Google Workspace</h2>
            <p>
              Create, edit, and share Google Docs, Sheets, and Slides in
              Dropbox.
            </p>
          </section>
          <section>
            <img
              src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/dropbox/Integrations_6@2x.png?id=d19d3c69-b60c-4643-a44f-af372679c725&amp;output_type=png"
              srcset="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/dropbox/Integrations_6@2x.png?id=d19d3c69-b60c-4643-a44f-af372679c725&amp;output_type=png 128w"
            ></img>
            <h2>Trello</h2>
            <p>Collaborate on team projects in Trello with Dropbox content.</p>
          </section>
          <section>
            <img
              src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/dropbox/Integrations_7@2x.png?id=bdfc4a9e-36b3-4ff9-a43f-30036c0acc89&amp;output_type=png"
              srcset="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/dropbox/Integrations_7@2x.png?id=bdfc4a9e-36b3-4ff9-a43f-30036c0acc89&amp;output_type=png 128w"
            ></img>
            <h2>Canvas</h2>
            <p>
              Upload course files or assignments straight from Dropbox to
              Canvas.
            </p>
          </section>
          <section>
            <img
              src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/dropbox/Integrations_8@2x.png?id=02655af8-df7a-43e2-b9ca-10def350e03e&amp;output_type=png"
              srcset="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/dropbox/Integrations_8@2x.png?id=02655af8-df7a-43e2-b9ca-10def350e03e&amp;output_type=png 128w"
            ></img>
            <h2>Asana</h2>
            <p>
              Track all of your team’s work with Asana while keeping Dropbox
              content alongside.
            </p>
          </section>
        </div>
      </div>
      <div className="block6">
        <div className="block6-text">
          <h1>
            Trusted by over 700 million registered users and 600,000 teams
          </h1>
          <a href="#">View more customer stories</a>
        </div>
        <div className="block6-flex">
          {/* <Slideshow images={images} /> */}
          <div className="block6-img-flex">
            <div className="block6-img-info">
              <img
                src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/dmep/assets/articles/DigitalNomads2_1440x960.jpg?id=1545245b-6903-4636-9586-7e18dcb1085d&amp;output_type=jpg"
                srcset="https://fjord.dropboxstatic.com/warp/conversion/dropbox/dmep/assets/articles/DigitalNomads2_1440x960.jpg?id=1545245b-6903-4636-9586-7e18dcb1085d&amp;width=414&amp;output_type=jpg 414w, https://fjord.dropboxstatic.com/warp/conversion/dropbox/dmep/assets/articles/DigitalNomads2_1440x960.jpg?id=1545245b-6903-4636-9586-7e18dcb1085d&amp;width=828&amp;output_type=jpg 828w, https://fjord.dropboxstatic.com/warp/conversion/dropbox/dmep/assets/articles/DigitalNomads2_1440x960.jpg?id=1545245b-6903-4636-9586-7e18dcb1085d&amp;width=1024&amp;output_type=jpg 1024w, https://fjord.dropboxstatic.com/warp/conversion/dropbox/dmep/assets/articles/DigitalNomads2_1440x960.jpg?id=1545245b-6903-4636-9586-7e18dcb1085d&amp;width=1280&amp;output_type=jpg 1280w, https://fjord.dropboxstatic.com/warp/conversion/dropbox/dmep/assets/articles/DigitalNomads2_1440x960.jpg?id=1545245b-6903-4636-9586-7e18dcb1085d&amp;output_type=jpg 1440w"
              ></img>
              <div>
                <h2>
                  “Dropbox has been tremendously helpful for social media. I can
                  hop on anytime and pull whatever photo is inspiring me to
                  post.”{" "}
                </h2>
                <Link className="img-link" style={{ color: "white" }}>
                  Read the full story
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
            </div>
            <div className="block6-img-info">
              <img
                src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/dmep/assets/customer-success-stories/sundance/sundance_editor.png?id=bacc4706-0999-4aba-aecf-2289a6f0b33c&amp;output_type=jpg"
                srcset="https://fjord.dropboxstatic.com/warp/conversion/dropbox/dmep/assets/customer-success-stories/sundance/sundance_editor.png?id=bacc4706-0999-4aba-aecf-2289a6f0b33c&amp;width=414&amp;output_type=jpg 414w, https://fjord.dropboxstatic.com/warp/conversion/dropbox/dmep/assets/customer-success-stories/sundance/sundance_editor.png?id=bacc4706-0999-4aba-aecf-2289a6f0b33c&amp;width=828&amp;output_type=jpg 828w, https://fjord.dropboxstatic.com/warp/conversion/dropbox/dmep/assets/customer-success-stories/sundance/sundance_editor.png?id=bacc4706-0999-4aba-aecf-2289a6f0b33c&amp;width=1024&amp;output_type=jpg 1024w, https://fjord.dropboxstatic.com/warp/conversion/dropbox/dmep/assets/customer-success-stories/sundance/sundance_editor.png?id=bacc4706-0999-4aba-aecf-2289a6f0b33c&amp;width=1280&amp;output_type=jpg 1280w, https://fjord.dropboxstatic.com/warp/conversion/dropbox/dmep/assets/customer-success-stories/sundance/sundance_editor.png?id=bacc4706-0999-4aba-aecf-2289a6f0b33c&amp;output_type=jpg 1440w"
              ></img>
              <div style={{ background: "rgb(250, 85, 30)", color: "black" }}>
                <h2>
                  “Dropbox increased our team’s collaboration while working from
                  home, which has increased our flexibility and could
                  revolutionize our office culture.”
                </h2>
                <Link className="img-link" style={{ color: "black" }}>
                  Read the full story
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
            </div>

            <div className="block6-img-info">
              <img
                src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/dmep/en-us/assets/articles/customer-success-stories/creativity-explored/1-ce-c03-hero@2x.jpg?id=7e823734-e1e2-4676-bd8d-4e0887d1f3d4&amp;width=1920&amp;output_type=jpg"
                srcset="https://fjord.dropboxstatic.com/warp/conversion/dropbox/dmep/en-us/assets/articles/customer-success-stories/creativity-explored/1-ce-c03-hero@2x.jpg?id=7e823734-e1e2-4676-bd8d-4e0887d1f3d4&amp;width=414&amp;output_type=jpg 414w, https://fjord.dropboxstatic.com/warp/conversion/dropbox/dmep/en-us/assets/articles/customer-success-stories/creativity-explored/1-ce-c03-hero@2x.jpg?id=7e823734-e1e2-4676-bd8d-4e0887d1f3d4&amp;width=828&amp;output_type=jpg 828w, https://fjord.dropboxstatic.com/warp/conversion/dropbox/dmep/en-us/assets/articles/customer-success-stories/creativity-explored/1-ce-c03-hero@2x.jpg?id=7e823734-e1e2-4676-bd8d-4e0887d1f3d4&amp;width=1024&amp;output_type=jpg 1024w, https://fjord.dropboxstatic.com/warp/conversion/dropbox/dmep/en-us/assets/articles/customer-success-stories/creativity-explored/1-ce-c03-hero@2x.jpg?id=7e823734-e1e2-4676-bd8d-4e0887d1f3d4&amp;width=1280&amp;output_type=jpg 1280w, https://fjord.dropboxstatic.com/warp/conversion/dropbox/dmep/en-us/assets/articles/customer-success-stories/creativity-explored/1-ce-c03-hero@2x.jpg?id=7e823734-e1e2-4676-bd8d-4e0887d1f3d4&amp;width=1600&amp;output_type=jpg 1600w, https://fjord.dropboxstatic.com/warp/conversion/dropbox/dmep/en-us/assets/articles/customer-success-stories/creativity-explored/1-ce-c03-hero@2x.jpg?id=7e823734-e1e2-4676-bd8d-4e0887d1f3d4&amp;width=1920&amp;output_type=jpg 1920w"
              ></img>
              <div style={{ background: "rgb(0, 120, 145)", color: "white" }}>
                <h2>
                  “We’re a grass-roots nonprofit. When we use a tool that the
                  rest of the design world uses, it helps professionalize our
                  organization.”
                </h2>
                <Link className="img-link" style={{ color: "white" }}>
                  Read the full story
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
            </div>

            <div className="block6-img-info">
              <img
                src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/dmep/assets/customer-success-stories/semi-permanent/semipermanent1_hero_b.png?id=311cb1d7-b5a5-4a01-8b7e-df63eb2c922c&amp;width=1920&amp;output_type=jpg"
                srcset="https://fjord.dropboxstatic.com/warp/conversion/dropbox/dmep/assets/customer-success-stories/semi-permanent/semipermanent1_hero_b.png?id=311cb1d7-b5a5-4a01-8b7e-df63eb2c922c&amp;width=414&amp;output_type=jpg 414w, https://fjord.dropboxstatic.com/warp/conversion/dropbox/dmep/assets/customer-success-stories/semi-permanent/semipermanent1_hero_b.png?id=311cb1d7-b5a5-4a01-8b7e-df63eb2c922c&amp;width=828&amp;output_type=jpg 828w, https://fjord.dropboxstatic.com/warp/conversion/dropbox/dmep/assets/customer-success-stories/semi-permanent/semipermanent1_hero_b.png?id=311cb1d7-b5a5-4a01-8b7e-df63eb2c922c&amp;width=1024&amp;output_type=jpg 1024w, https://fjord.dropboxstatic.com/warp/conversion/dropbox/dmep/assets/customer-success-stories/semi-permanent/semipermanent1_hero_b.png?id=311cb1d7-b5a5-4a01-8b7e-df63eb2c922c&amp;width=1280&amp;output_type=jpg 1280w, https://fjord.dropboxstatic.com/warp/conversion/dropbox/dmep/assets/customer-success-stories/semi-permanent/semipermanent1_hero_b.png?id=311cb1d7-b5a5-4a01-8b7e-df63eb2c922c&amp;width=1600&amp;output_type=jpg 1600w, https://fjord.dropboxstatic.com/warp/conversion/dropbox/dmep/assets/customer-success-stories/semi-permanent/semipermanent1_hero_b.png?id=311cb1d7-b5a5-4a01-8b7e-df63eb2c922c&amp;width=1920&amp;output_type=jpg 1920w"
              ></img>
              <div style={{ background: "rgb(180, 220, 25)", color: "black" }}>
                <h2>
                  “Dropbox easily allows me to transfer what’s in my mind to
                  another person.”
                </h2>
                <Link className="img-link" style={{ color: "black" }}>
                  Read the full story
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
            </div>

            <div className="block6-img-info">
              <img
                src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/experience/en-us/drop-in-video-series/SOPHIA_Still005.png?id=048eb124-e2f8-43ad-a0b3-71acc76a2635&amp;output_type=jpg"
                srcset="https://fjord.dropboxstatic.com/warp/conversion/dropbox/experience/en-us/drop-in-video-series/SOPHIA_Still005.png?id=048eb124-e2f8-43ad-a0b3-71acc76a2635&amp;width=414&amp;output_type=jpg 414w, https://fjord.dropboxstatic.com/warp/conversion/dropbox/experience/en-us/drop-in-video-series/SOPHIA_Still005.png?id=048eb124-e2f8-43ad-a0b3-71acc76a2635&amp;width=828&amp;output_type=jpg 828w, https://fjord.dropboxstatic.com/warp/conversion/dropbox/experience/en-us/drop-in-video-series/SOPHIA_Still005.png?id=048eb124-e2f8-43ad-a0b3-71acc76a2635&amp;width=1024&amp;output_type=jpg 1024w, https://fjord.dropboxstatic.com/warp/conversion/dropbox/experience/en-us/drop-in-video-series/SOPHIA_Still005.png?id=048eb124-e2f8-43ad-a0b3-71acc76a2635&amp;width=1280&amp;output_type=jpg 1280w, https://fjord.dropboxstatic.com/warp/conversion/dropbox/experience/en-us/drop-in-video-series/SOPHIA_Still005.png?id=048eb124-e2f8-43ad-a0b3-71acc76a2635&amp;width=1600&amp;output_type=jpg 1600w, https://fjord.dropboxstatic.com/warp/conversion/dropbox/experience/en-us/drop-in-video-series/SOPHIA_Still005.png?id=048eb124-e2f8-43ad-a0b3-71acc76a2635&amp;width=1920&amp;output_type=jpg 1920w, https://fjord.dropboxstatic.com/warp/conversion/dropbox/experience/en-us/drop-in-video-series/SOPHIA_Still005.png?id=048eb124-e2f8-43ad-a0b3-71acc76a2635&amp;width=2560&amp;output_type=jpg 2560w, https://fjord.dropboxstatic.com/warp/conversion/dropbox/experience/en-us/drop-in-video-series/SOPHIA_Still005.png?id=048eb124-e2f8-43ad-a0b3-71acc76a2635&amp;width=2880&amp;output_type=jpg 2880w, https://fjord.dropboxstatic.com/warp/conversion/dropbox/experience/en-us/drop-in-video-series/SOPHIA_Still005.png?id=048eb124-e2f8-43ad-a0b3-71acc76a2635&amp;output_type=jpg 3200w"
              ></img>
              <div style={{ background: "rgb(120, 40, 110)", color: "white" }}>
                <h2>
                  “Our team is working remotely—everyone's in a different time
                  zone. Dropbox is a great hub for us to all work at once and
                  seamlessly share files.”
                </h2>
                <Link className="img-link" style={{ color: "white" }}>
                  Read the full story
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
            </div>
            <div className="block6-img-info">
              <img
                src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/experience/en-us/drop-in-video-series/KingChildren_1920x1280.png?id=612f13ad-7264-48ac-9856-b60829cfc557&amp;width=1920&amp;output_type=jpg"
                srcset="https://fjord.dropboxstatic.com/warp/conversion/dropbox/experience/en-us/drop-in-video-series/KingChildren_1920x1280.png?id=612f13ad-7264-48ac-9856-b60829cfc557&amp;width=414&amp;output_type=jpg 414w, https://fjord.dropboxstatic.com/warp/conversion/dropbox/experience/en-us/drop-in-video-series/KingChildren_1920x1280.png?id=612f13ad-7264-48ac-9856-b60829cfc557&amp;width=828&amp;output_type=jpg 828w, https://fjord.dropboxstatic.com/warp/conversion/dropbox/experience/en-us/drop-in-video-series/KingChildren_1920x1280.png?id=612f13ad-7264-48ac-9856-b60829cfc557&amp;width=1024&amp;output_type=jpg 1024w, https://fjord.dropboxstatic.com/warp/conversion/dropbox/experience/en-us/drop-in-video-series/KingChildren_1920x1280.png?id=612f13ad-7264-48ac-9856-b60829cfc557&amp;width=1280&amp;output_type=jpg 1280w, https://fjord.dropboxstatic.com/warp/conversion/dropbox/experience/en-us/drop-in-video-series/KingChildren_1920x1280.png?id=612f13ad-7264-48ac-9856-b60829cfc557&amp;width=1600&amp;output_type=jpg 1600w, https://fjord.dropboxstatic.com/warp/conversion/dropbox/experience/en-us/drop-in-video-series/KingChildren_1920x1280.png?id=612f13ad-7264-48ac-9856-b60829cfc557&amp;width=1920&amp;output_type=jpg 1920w"
              ></img>
              <div style={{ background: "rgb(255, 175, 165)", color: "black" }}>
                <h2>
                  “Dropbox version control is very important. You may want to go
                  back to an earlier version because there's an idea in there
                  that you really like.”
                </h2>
                <Link className="img-link" style={{ color: "black" }}>
                  Read the full story
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
            </div>
            <div className="block6-img-info">
              <img
                src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/dmep/assets/customer-success-stories/hope-gallery/hope_quote.png?id=d39e724d-e9b4-4bf9-b448-6b92200606bf&amp;output_type=jpg"
                srcset="https://fjord.dropboxstatic.com/warp/conversion/dropbox/dmep/assets/customer-success-stories/hope-gallery/hope_quote.png?id=d39e724d-e9b4-4bf9-b448-6b92200606bf&amp;width=414&amp;output_type=jpg 414w, https://fjord.dropboxstatic.com/warp/conversion/dropbox/dmep/assets/customer-success-stories/hope-gallery/hope_quote.png?id=d39e724d-e9b4-4bf9-b448-6b92200606bf&amp;width=828&amp;output_type=jpg 828w, https://fjord.dropboxstatic.com/warp/conversion/dropbox/dmep/assets/customer-success-stories/hope-gallery/hope_quote.png?id=d39e724d-e9b4-4bf9-b448-6b92200606bf&amp;width=1024&amp;output_type=jpg 1024w, https://fjord.dropboxstatic.com/warp/conversion/dropbox/dmep/assets/customer-success-stories/hope-gallery/hope_quote.png?id=d39e724d-e9b4-4bf9-b448-6b92200606bf&amp;width=1280&amp;output_type=jpg 1280w, https://fjord.dropboxstatic.com/warp/conversion/dropbox/dmep/assets/customer-success-stories/hope-gallery/hope_quote.png?id=d39e724d-e9b4-4bf9-b448-6b92200606bf&amp;output_type=jpg 1440w"
              ></img>
              <div style={{ background: "rgb(250, 210, 75)", color: "black" }}>
                <h2>
                  “Creative growth happens when you don’t have to worry about
                  managing storage.”
                </h2>
                <Link className="img-link" style={{ color: "black" }}>
                  Read the full story
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
            </div>
            <div className="button">
              <button onClick={prevSlide}>Previous</button>
              <button onClick={nextSlide}>Next</button>
            </div>
          </div>
        </div>
        <div className="block6-text-b">
          <h1>For all things worth sharing.</h1>
          <Link className="block6-link">
            Refer a friend
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
      </div>
    </div>
  );
}
