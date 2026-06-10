"use client";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-coverflow";
import SwiperButton from "@/components/frontendcomponents/atoms/SwiperButton";

const historyData = [
  {
    year: "1975",
    image: "/assets/images/about-us/history1.jpg",
    desc: "Mohit Minerals laid its foundation with a vision to build a trusted and growth-driven enterprise, marking the beginning of a legacy rooted in integrity, resilience, and long-term progress.",
  },
  {
    year: "2015",
    image: "/assets/images/about-us/history1.jpg",
    desc: "DescMohit Minerals laid its foundation with a vision to build a trusted and growth-driven enterprise, marking the beginning of a legacy rooted in integrity, resilience, and long-term progress.",
  },
  {
    year: "2017",
    image: "/assets/images/about-us/history1.jpg",
    desc: "DescMohit Minerals laid its foundation with a vision to build a trusted and growth-driven enterprise, marking the beginning of a legacy rooted in integrity, resilience, and long-term progress.",
  },
  {
    year: "2018",
    image: "/assets/images/about-us/history1.jpg",
    desc: "DescMohit Minerals laid its foundation with a vision to build a trusted and growth-driven enterprise, marking the beginning of a legacy rooted in integrity, resilience, and long-term progress.",
  },
  {
    year: "2020",
    image: "/assets/images/about-us/history1.jpg",
    desc: "DescMohit Minerals laid its foundation with a vision to build a trusted and growth-driven enterprise, marking the beginning of a legacy rooted in integrity, resilience, and long-term progress.",
  },
  {
    year: "2021",
    image: "/assets/images/about-us/history1.jpg",
    desc: "DescMohit Minerals laid its foundation with a vision to build a trusted and growth-driven enterprise, marking the beginning of a legacy rooted in integrity, resilience, and long-term progress.",
  },
  {
    year: "2022",
    image: "/assets/images/about-us/history1.jpg",
    desc: "DescMohit Minerals laid its foundation with a vision to build a trusted and growth-driven enterprise, marking the beginning of a legacy rooted in integrity, resilience, and long-term progress.",
  },
  {
    year: "2023",
    image: "/assets/images/about-us/history1.jpg",
    desc: "DescMohit Minerals laid its foundation with a vision to build a trusted and growth-driven enterprise, marking the beginning of a legacy rooted in integrity, resilience, and long-term progress.",
  },
  {
    year: "2024",
    image: "/assets/images/about-us/history1.jpg",
    desc: "DescMohit Minerals laid its foundation with a vision to build a trusted and growth-driven enterprise, marking the beginning of a legacy rooted in integrity, resilience, and long-term progress.",
  },
];

export default function History() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressWidth, setProgressWidth] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);
  const mainSwiperRef = useRef(null);

  // Called once thumbs swiper is initialized — capture visible slide count
  const handleThumbsInit = useCallback((swiper) => {
    setThumbsSwiper(swiper);
    const visible = swiper.slides.filter((s) =>
      s.classList.contains("swiper-slide-visible"),
    ).length;
    setVisibleCount(visible || 1);
  }, []);

  // On main slide change: update progress bar + active classes on thumb slides
  const handleSlideChange = useCallback(
    (swiper) => {
      const index = swiper.activeIndex;
      setActiveIndex(index);

      const widthParts = 100 / (visibleCount || 1);
      setProgressWidth(Math.round(widthParts * (index + 1)));

      // Mark all previous thumb slides as "active", remove from next ones
      if (thumbsSwiper) {
        thumbsSwiper.slides.forEach((slide, i) => {
          if (i < index) {
            slide.classList.add("thumb-past");
          } else {
            slide.classList.remove("thumb-past");
          }
        });
      }
    },
    [thumbsSwiper, visibleCount],
  );

  return (
    <section>
      <div className="history_sec sec-pad-all">
        <div className="container">
          <div className="heading">
            <h2>History</h2>
          </div>

          <div className="main_wrapper">
            {/* ── Main coverflow slider ── */}
            <Swiper
              className="history_slider"
              effect="coverflow"
              grabCursor
              centeredSlides
              modules={[Navigation, Thumbs, EffectCoverflow]}
              speed={1000}
              coverflowEffect={{
                rotate: 20,
                stretch: 0,
                depth: 500,
                modifier: 1,
                slideShadows: true,
              }}
              navigation={{ prevEl: ".history-prev", nextEl: ".history-next" }}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              onSlideChange={handleSlideChange}
              onSwiper={(s) => (mainSwiperRef.current = s)}
              breakpoints={{
                0: { slidesPerView: 1, effect: "slide" },
                540: { slidesPerView: 1.2 },
                991: { slidesPerView: 1.5 },
              }}
            >
              {historyData.map((item) => (
                <SwiperSlide key={item.year}>
                  <div className="item-md history_col">
                    <figure>
                      <Image
                        src={item.image}
                        width={686}
                        height={415}
                        alt={`History ${item.year}`}
                      />
                    </figure>
                    <figcaption>
                      <h4>{item.year}</h4>
                      <div className="desc">
                        <p>{item.desc}</p>
                      </div>
                    </figcaption>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* ── Thumb / year slider ── */}
            <div className="thumb-wrapper">
              <SwiperButton classname="history-prev swiper-prev primary-border" />
              <Swiper
                className="thumb"
                modules={[Thumbs]}
                watchSlidesProgress
                onSwiper={handleThumbsInit}
                speed={1500}
                spaceBetween={0}
                breakpoints={{
                  0: { slidesPerView: 3 },
                  540: { slidesPerView: 4 },
                  768: { slidesPerView: 6 },
                  991: { slidesPerView: 8 },
                }}
              >
                {historyData.map((item, i) => (
                  <SwiperSlide
                    key={item.year}
                    className={i < activeIndex ? "thumb-past" : ""}
                  >
                    {item.year}
                  </SwiperSlide>
                ))}

                {/* Progress bar lives inside thumb swiper, just like original */}
                <div className="swiper-progress-bar">
                  <div
                    className="progress"
                    style={{
                      width: `${progressWidth}%`,
                      transition: `width ${mainSwiperRef.current?.params?.speed || 1000}ms linear`,
                    }}
                  />
                </div>
              </Swiper>
              <SwiperButton classname="history-next swiper-next primary-border" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
