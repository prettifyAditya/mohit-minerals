"use client";
import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperButton from "@/components/frontendcomponents/atoms/SwiperButton";
import "swiper/css";
import "swiper/css/navigation";

export default function ValueSec() {
  const swiperRef = useRef(null);

  return (
    <section>
      <div className="value_sec sec-pad-all">
        <div className="container">
          <div className="heading">
            <h2>Our Value Chain</h2>
          </div>
          <div className="main_wrapper">
            <div className="image_wrapper">
              <Swiper
                ref={swiperRef}
                className="image_slider"
                modules={[Navigation]}
                speed={1000}
                direction="vertical"
                slidesPerView="1"
                spaceBetween={15}
                allowTouchMove={false}
                navigation={{
                  prevEl: ".value-prev",
                  nextEl: ".value-next",
                }}
              >
                <SwiperSlide>
                  <figure>
                    <Image
                      src="/assets/images/about-us/value_img.jpg"
                      width={379}
                      height={379}
                      alt="Value Image"
                    ></Image>
                  </figure>
                </SwiperSlide>
                <SwiperSlide>
                  <figure>
                    <Image
                      src="/assets/images/about-us/value_img.jpg"
                      width={379}
                      height={379}
                      alt="Value Image"
                    ></Image>
                  </figure>
                </SwiperSlide>
                <SwiperSlide>
                  <figure>
                    <Image
                      src="/assets/images/about-us/value_img.jpg"
                      width={379}
                      height={379}
                      alt="Value Image"
                    ></Image>
                  </figure>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="content_wrapper">
              <Swiper
                ref={swiperRef}
                className="content_slider"
                modules={[Navigation]}
                speed={1000}
                slidesPerView="1"
                spaceBetween={10}
                allowTouchMove={false}
                navigation={{
                  prevEl: ".value-prev",
                  nextEl: ".value-next",
                }}
              >
                <SwiperSlide>
                  <figcaption>
                    <h4>Quality Inspection & Assurance</h4>
                    <div className="desc">
                      <p>
                        Our team of experienced surveyors and quality experts
                        conducts detailed mine inspections and sample analysis
                        through internationally accredited laboratories to
                        ensure every quality standard is thoroughly verified.
                      </p>
                    </div>
                  </figcaption>
                </SwiperSlide>
                <SwiperSlide>
                  <figcaption>
                    <h4>Quality Inspection & Assurance</h4>
                    <div className="desc">
                      <p>
                        Our team of experienced surveyors and quality experts
                        conducts detailed mine inspections and sample analysis
                        through internationally accredited laboratories to
                        ensure every quality standard is thoroughly verified.
                      </p>
                    </div>
                  </figcaption>
                </SwiperSlide>
                <SwiperSlide>
                  <figcaption>
                    <h4>Quality Inspection & Assurance</h4>
                    <div className="desc">
                      <p>
                        Our team of experienced surveyors and quality experts
                        conducts detailed mine inspections and sample analysis
                        through internationally accredited laboratories to
                        ensure every quality standard is thoroughly verified.
                      </p>
                    </div>
                  </figcaption>
                </SwiperSlide>
              </Swiper>
              <div className="value-nav swiper-nav group primary-border">
                <SwiperButton classname="value-prev swiper-prev" />
                <SwiperButton classname="value-next swiper-next" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
