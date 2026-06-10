"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperButton from "@/components/frontendcomponents/atoms/SwiperButton";
import "swiper/css";
import "swiper/css/navigation";
import BusinessCol from "@/components/frontendcomponents/molecules/BusinessCol";

export default function MoreService({ data }) {
  if (!data) return null;
  const swiperRef = useRef(null);
  return (
    <div className="more_solution sec-pad-all">
      <div className="container">
        <div className="heading">
          <h2>More Solutions</h2>
        </div>
        <div className="main_wrapper">
          <div className="service-nav swiper-nav center-full white">
            <SwiperButton classname="service-prev swiper-prev" />
            <SwiperButton classname="service-next swiper-next" />
          </div>
          <Swiper
            ref={swiperRef}
            className="service_slider"
            modules={[Navigation]}
            speed={1000}
            navigation={{
              prevEl: ".service-prev",
              nextEl: ".service-next",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.1,
                spaceBetween: 10,
              },
              540: {
                slidesPerView: 1.3,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <BusinessCol
                  linkHref={item.linkHref}
                  mediaSrc={item.mediaSrc}
                  title={item.title}
                  desc={item.desc}
                  count={item.count}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
