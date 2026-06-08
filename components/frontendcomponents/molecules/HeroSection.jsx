import Image from "next/image";
import Button from "../atoms/Button";
import "@/uploads/styles/component/component.css";

export default function HeroSection({
  data = {},

  classname = "",
  mediaSrc = "",
  posterSrc = "",
  tag = "",
  heading = "",
  desc = "",
  buttonText = "",
  counterData = "",
  ...props
}) {
  return (
    <section>
      <div className={`hero_sec ${classname}`}>
        <div className="container">
          <div className="hero_wrapper banner">
            <div className="bg">
              {data?.mediaSrc?.includes("mp4") ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  src={data?.mediaSrc}
                  poster={data?.posterSrc}
                ></video>
              ) : (
                <Image
                  src={data?.mediaSrc}
                  width={1180}
                  height={530}
                  alt={`${data?.tag} Image`}
                />
              )}
              <div className="banner-wrapper">
                <div className="tag">{data?.tag}</div>
                <div className="heading">
                  <h1>{data?.heading}</h1>
                  <p>{data?.desc}</p>
                  {buttonText && (
                    <Button
                      {...props}
                      buttonText={buttonText}
                      classname="no-radius"
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
                  )}
                </div>
                {data?.counterData && (
                  <div className="counter_wrapper">
                    {data?.counterData?.map((item) => (
                      <div className="counter_col" key={item.title}>
                        <h6
                          dangerouslySetInnerHTML={{ __html: item.title }}
                        ></h6>
                        <p>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
