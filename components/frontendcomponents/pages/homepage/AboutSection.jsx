"use client";
import { useState, useEffect } from "react";
import Button from "@/components/frontendcomponents/atoms/Button";
import Image from "next/image";

export default function AboutSection() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const images = [
    "/assets/images/home/about1.jpg",
    "/assets/images/home/about2.jpg",
    "/assets/images/home/about3.jpg",
    "/assets/images/home/about4.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % images.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section>
      <div className="about_sec sec-pad-all light-bg">
        <div className="container">
          <div className="main_wrapper flex">
            <figure>
              {images.map((src, index) => (
                <Image
                  key={src}
                  className={index === activeImageIndex ? "active" : ""}
                  src={src}
                  width={577}
                  height={417}
                  alt="About Image"
                />
              ))}
            </figure>
            <figcaption>
              <div className="heading">
                <h2>Mohit Minerals Limited (MML)</h2>
                <p>
                  <strong>Mohit Minerals Limited (MML)</strong> contributes
                  significantly to the energy needs of the Nation, by being the
                  bridge between producers of the commodities and the users of
                  the commodities. We continue to strengthen our position in the
                  sector and are amongst the top 3 Indian coal importers,
                  focusing on the supply of high-quality coal.
                </p>
              </div>
              <div className="btn_wrapper">
                <div className="experience-wrapper">
                  <div className="count_wrap">
                    <h4>
                      <div className="counting">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                      </div>
                      0+
                    </h4>
                  </div>
                  <div className="line"></div>
                  <p>
                    Years of <span>Experience</span>
                  </p>
                </div>
                <Button
                  linkHref="/about-us"
                  classname="no-radius"
                  buttonText="About MML"
                  svgpath={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 1024 1024"
                    >
                      <path
                        fill="currentColor"
                        d="M340.9 149.3a30.6 30.6 0 0 0 0 42.8L652.7 512L341 831.9a30.6 30.6 0 0 0 0 42.7a29 29 0 0 0 41.7 0l331.6-340.3a32 32 0 0 0 0-44.6L382.6 149.4a29 29 0 0 0-41.7 0z"
                      ></path>
                    </svg>
                  }
                />
              </div>
            </figcaption>
          </div>
        </div>
      </div>
    </section>
  );
}
