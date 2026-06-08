import Image from "next/image";
import Link from "next/link";
import Button from "@/components/frontendcomponents/atoms/Button";

export default function SocialResponsibility() {
  return (
    <section>
      <div className="social_responsibility sec-pad-all">
        <div className="container">
          <div className="heading">
            <h2 className="primary">Social Responsibility</h2>
          </div>
          <div className="main_wrapper">
            <Link className="social_col item-md" href="/social-responsibility">
              <figure>
                <Image
                  src="/assets/images/home/social1.jpg"
                  width={380}
                  height={335}
                  alt="Social Image"
                ></Image>
              </figure>
              <figcaption>
                <h6>Renewable Energy Sector</h6>
                <div className="desc">
                  <p>
                    Empowering Communities with Clean Energy for a Sustainable
                    Tomorrow
                  </p>
                  <Button
                    classname="no-radius small"
                    buttonText="Read More"
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
            </Link>
            <Link className="social_col item-md" href="/social-responsibility">
              <figure>
                <Image
                  src="/assets/images/home/social2.jpg"
                  width={380}
                  height={335}
                  alt="Social Image"
                ></Image>
              </figure>
              <figcaption>
                <h6>Social Responsibility Activities</h6>
                <div className="desc">
                  <p>
                    Empowering Communities with Clean Energy for a Sustainable
                    Tomorrow
                  </p>
                  <Button
                    classname="no-radius small"
                    buttonText="Read More"
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
            </Link>
            <Link className="social_col item-md" href="/social-responsibility">
              <figure>
                <Image
                  src="/assets/images/home/social3.jpg"
                  width={380}
                  height={335}
                  alt="Social Image"
                ></Image>
              </figure>
              <figcaption>
                <h6>Sustainability Initiatives</h6>
                <div className="desc">
                  <p>
                    Empowering Communities with Clean Energy for a Sustainable
                    Tomorrow
                  </p>
                  <Button
                    classname="no-radius small"
                    buttonText="Read More"
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
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
