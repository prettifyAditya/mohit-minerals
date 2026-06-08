import Button from "@/components/frontendcomponents/atoms/Button";

export default function RealEstate() {
  return (
    <section>
      <div className="container-fluid">
        <div className="banner real_estate_banner">
          <div className="bg">
            <video
              src="/assets/video/real_estate_video.mp4"
              autoPlay
              muted
              loop
              playsInline
            ></video>
            <div className="banner-wrapper">
              <div className="heading">
                <h2>Real Estate</h2>
                <p>Residential & Commercial Property Development</p>
                <h6>
                  <span>30 LAC SFT</span> Delivered{" "}
                </h6>
                <Button
                  classname="white-border no-radius"
                  buttonText="Explore more"
                  linkHref="https://mnbbuildfab.com/"
                  target="_blank"
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
        </div>
      </div>
    </section>
  );
}
