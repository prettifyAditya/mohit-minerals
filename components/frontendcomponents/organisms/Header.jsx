"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "../atoms/Button";
import { usePathname } from "next/navigation";
import { useModalStore } from "@/store/modalStore";
import Staticdata from "@/uploads/data/StaticData.json";
import "@/uploads/styles/header/header.css";
export default function Header() {
  const [headerFixed, setHeaderFixed] = useState(false);
  const openHam = useModalStore((state) => state.openHam);
  const headerData = Staticdata?.Homepage?.Section1;

  useEffect(() => {
    const handleScroll = () => {
      setHeaderFixed(window.scrollY > 100);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`${headerFixed ? "header-fixed" : ""}`}>
      <div className="container header-container">
        <div className="colA">
          <Link href="/" className="logo">
            <Image
              src="/assets/logo.svg"
              width={150}
              height={40}
              alt="logo"
            ></Image>
          </Link>
        </div>
        <div className="colB">
          <ul className="nav-items">
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li className="hasDropdown">
              <p>
                Solutions
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                >
                  {" "}
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="m7 10l5 5l5-5"
                  ></path>
                </svg>
              </p>
              <div className="dropdown-menu">
                <ul>
                  {headerData.map((item) => (
                    <li key={item.id}>
                      <Link href={item.linkHref}>
                        <div className="icon">
                          <Image
                            src={item.iconSrc}
                            width={25}
                            height={25}
                            alt={item.title}
                          />
                        </div>
                        <div className="desc">
                          <h6>{item.title}</h6>
                          <p>{item.heading}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li>
              <Link href="/social-responsibility">Social Reponsibility</Link>
            </li>
            <li>
              <Link href="/career">Careers</Link>
            </li>
            <li>
              <Link href="/media">Media Corner</Link>
            </li>
          </ul>
        </div>
        <div className="colC">
          <Button
            classname="primary-border first_svg"
            linkHref="/contact-us"
            buttonText="Reach Us"
            svgpath={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="m12.065 21.243l-.006-.005zm.182-.274a29 29 0 0 0 3.183-3.392c2.04-2.563 3.281-5.09 3.365-7.337a6.8 6.8 0 1 0-13.591 0c.085 2.247 1.327 4.774 3.366 7.337a29 29 0 0 0 3.183 3.392q.166.15.247.218zm-.985 1.165S4 16.018 4 10a8 8 0 1 1 16 0c0 6.018-7.262 12.134-7.262 12.134c-.404.372-1.069.368-1.476 0M12 12.8a2.8 2.8 0 1 0 0-5.6a2.8 2.8 0 0 0 0 5.6m0 1.2a4 4 0 1 1 0-8a4 4 0 0 1 0 8"
                ></path>
              </svg>
            }
          />
          <div className="lang_select">
            <div className="selected_lang">
              <div className="icon">
                <img src="/assets/icon/flag.svg" alt="" />
              </div>
              <div className="show_lan">Worldwide</div>
              <div className="icon">
                <img src="/assets/icon/down_arrow.svg" alt="" />
              </div>
            </div>
            <div className="dropdown-menu">
              <ul>
                <li>
                  <Image
                    src="/assets/icon/uae-flag.png"
                    width={25}
                    height={25}
                    alt="Uae flag"
                  ></Image>
                  <span>Dubai</span>
                </li>
              </ul>
            </div>
          </div>
          <button type="button" className="ham-btn" onClick={openHam}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
