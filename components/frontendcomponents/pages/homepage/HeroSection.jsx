"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Button from "@/components/frontendcomponents/atoms/Button";

export default function HeroSection({ data }) {
  if (!data) return null;
  const [activeCard, setActiveCard] = useState(data[0]?.id || 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => {
        const currentIndex = data.findIndex((item) => item.id === prev);
        const nextIndex = (currentIndex + 1) % data.length;
        return data[nextIndex].id;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [data]);

  const activeItem = data.find((item) => item.id === activeCard);

  return (
    <section>
      <div className="hero_sec sec-pad-all">
        <div className="container">
          <div className="main_wrapper">
            <div className="background_wrapper">
              {data.map((item) => (
                <figure
                  key={item.id}
                  className={`${activeCard === item.id ? "active" : ""}`}
                >
                  {item.bgSrc.includes("mp4") ? (
                    <video
                      src={item.bgSrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                    ></video>
                  ) : (
                    <Image
                      src={item.bgSrc}
                      width={1180}
                      height={530}
                      alt={`${item.title} Image`}
                    />
                  )}
                </figure>
              ))}
            </div>
            <div className="content_wrapper">
              {data.map((item) => (
                <div
                  className={`content_col ${activeCard === item.id ? "active" : ""}`}
                  key={item.id}
                >
                  <h6>{item.title}</h6>
                  <h2>{item.heading}</h2>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="solutions_wrapper">
              {data.map((item) => (
                <div
                  className={`solution_wrap ${activeCard === item.id ? "active" : ""}`}
                  key={item.id}
                >
                  <div className="icon">
                    <Image
                      src={item.iconSrc}
                      width={42}
                      height={42}
                      alt={item.title}
                    />
                  </div>
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
            <Button
              linkHref={activeItem?.linkHref}
              classname="no-radius"
              buttonText="Explore Solutions"
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
        </div>
      </div>
    </section>
  );
}
