"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

export default function IndustryLeader({ data }) {
  if (!data) return null;
  const swiperRef = useRef(null);
  return (
    <section>
      <div className="industry_leader sec-pad-all">
        <div className="heading">
          <h2>
            Trusted by <span>Industry Leaders</span>
          </h2>
        </div>
        <figure className="truck_vec">
          <Image
            src="/assets/images/home/truck.svg"
            width={1280}
            height={146}
            alt="Truck"
          ></Image>
        </figure>
        <Swiper
          className="industry_slider"
          loop={true}
          ref={swiperRef}
          modules={[Autoplay]}
          speed={2000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            540: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            991: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {data.clientsData.map((client) => (
            <SwiperSlide key={client.id}>
              <figure>
                <Image
                  src={client.imgSrc}
                  alt="Client Logo"
                  width="150"
                  height="70"
                ></Image>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
