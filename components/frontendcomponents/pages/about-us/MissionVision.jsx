import Image from "next/image";

export default function MissionVision() {
  return (
    <div className="mission_vision banner">
      <div className="bg">
        <video
          src="/assets/video/footer-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>
        <div className="banner-wrapper container">
          <div className="main_wrapper">
            <div className="item_col">
              <figure>
                <Image
                  src="/assets/images/about-us/mission.svg"
                  width={87}
                  height={87}
                  alt="Mission Image"
                ></Image>
              </figure>
              <figcaption>
                <h3>Our Mission</h3>
                <p>
                  At Mohit Minerals, we are driven by entrepreneurial spirit and
                  professional excellence, continuously evolving to meet the
                  demands of a rapidly changing world.
                </p>
              </figcaption>
            </div>
            <div className="item_col">
              <figure>
                <Image
                  src="/assets/images/about-us/vision.svg"
                  width={87}
                  height={87}
                  alt="Mission Image"
                ></Image>
              </figure>
              <figcaption>
                <h3>Our Vision</h3>
                <p>
                  At Mohit Minerals, our vision is to build a future-ready
                  organization that leads with innovation, integrity, and
                  excellence while creating lasting value in an ever-evolving
                  world.
                </p>
              </figcaption>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
