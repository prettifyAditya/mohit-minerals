import Image from "next/image";
import Link from "next/link";
import Overlay from "./Overlay";
import VideoPop from "./VideoPop";
import Button from "../atoms/Button";
import TeamPop from "./TeamPop";
import Hamburger from "./Hamburger";
export default function Footer() {
  return (
    <>
      <footer>
        <video
          src="/assets/video/footer-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="footer-bg"
        />
        <div className="call_to_action container">
          <div className="colA">
            <ul>
              <li>
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="#005D99"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="m14 10l-3 3m9.288-9.969a.535.535 0 0 1 .68.681l-5.924 16.93a.535.535 0 0 1-.994.04l-3.219-7.242a.54.54 0 0 0-.271-.271l-7.242-3.22a.535.535 0 0 1 .04-.993z"
                    ></path>
                  </svg>
                </div>
                <div className="content">
                  <h6>Email Us</h6>
                  <a href="mailto:corporate@mohitminerals.in">
                    corporate@mohitminerals.in
                  </a>
                </div>
              </li>
              <li>
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#005d99"
                      d="M16 3.25H8c-.96 0-1.75.79-1.75 1.75v14c0 .96.79 1.75 1.75 1.75h8c.96 0 1.75-.79 1.75-1.75V5c0-.96-.79-1.75-1.75-1.75M16.25 19c0 .14-.11.25-.25.25H8c-.14 0-.25-.11-.25-.25V5c0-.14.11-.25.25-.25h8c.14 0 .25.11.25.25zM13 16c0 .55-.45 1-1 1s-1-.45-1-1s.45-1 1-1s1 .45 1 1"
                    ></path>
                  </svg>
                </div>
                <div className="content">
                  <h6>call Us</h6>
                  <a href="tel:+91-011-47049596">+91-011-47049596</a>
                </div>
              </li>
            </ul>
          </div>
          <div className="colB">
            <Button buttonText="Whatsapp" />
            <Button
              linkHref="/contact-us"
              buttonText="Reach us"
              classname="primary-border"
              svgpath={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="m14 10l-3 3m9.288-9.969a.535.535 0 0 1 .68.681l-5.924 16.93a.535.535 0 0 1-.994.04l-3.219-7.242a.54.54 0 0 0-.271-.271l-7.242-3.22a.535.535 0 0 1 .04-.993z"
                  ></path>
                </svg>
              }
            />
          </div>
        </div>
        <div className="content">
          <div className="upper-footer container">
            <a href="/" className="colA">
              <img src="/assets/logo.svg" alt="Logo" />
            </a>
            <div className="colB">
              <div className="list">
                <h6>Solutions</h6>
                <ul>
                  <li>
                    <a href="/service-details">Coal & Coke</a>
                  </li>
                  <li>
                    <a href="/service-details">Handing & Logistic</a>
                  </li>
                  <li>
                    <a href="/service-details">IRON ORE</a>
                  </li>
                  <li>
                    <a href="/service-details">BIO-Fuel</a>
                  </li>
                </ul>
              </div>
              <div className="list">
                <h6>Company</h6>
                <ul>
                  <li>
                    <a href="/about-us">About us</a>
                  </li>
                  <li>
                    <a href="/career">Careers</a>
                  </li>
                  <li>
                    <a href="/media">Media</a>
                  </li>
                  <li>
                    <a href="/social-responsibility">Social Responsibility</a>
                  </li>
                  <li>
                    <a href="/contact-us">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className="list">
                <h6>Contact us</h6>
                <ul>
                  <li>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18px"
                        height="18px"
                        viewBox="0 0 16 16"
                      >
                        <g fill="none" stroke="#005d99" strokeWidth={1}>
                          <path d="M8 14.5C10.5 11 12.5 8 12.5 6a4.5 4.5 0 1 0-9 0c0 2 2 5 4.5 8.5Z" />
                          <path d="M10 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z" />
                        </g>
                      </svg>
                    </div>
                    <a href="" target="_blank">
                      7/23, Kirti Nagar Industrial Area, Near Narayana
                      Underpass, New Delhi-110015, India
                    </a>
                  </li>
                </ul>
                <ul className="social_icons">
                  <li>
                    <a href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="currentColor"
                          d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        viewBox="0 0 640 640"
                      >
                        <path
                          fill="currentColor"
                          d="M240 363.3V576h116V363.3h86.5l18-97.8H356v-34.6c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4.4 37 1.2V71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4v42.1h-66v97.8z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lower-footer">
            <p>© Mohit Minerals. All rights reserved.</p>
            <p className="pret">
              Made by passion{" "}
              <Link href="https://www.prettifycreative.com/" target="_blank">
                <img src="/assets/icon/prettify.svg" alt="" />
              </Link>
            </p>
          </div>
        </div>
      </footer>

      <Overlay />
      <VideoPop />
      <TeamPop />
      <Hamburger />
    </>
  );
}
