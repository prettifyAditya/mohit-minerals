"use client";
import Image from "next/image";
import { useModalStore } from "@/store/modalStore";
import Button from "@/components/frontendcomponents/atoms/Button";
import "@/uploads/styles/component/component.css";

export default function TeamSection({
  classname = "",
  heading = "",
  buttonText = "",
  teamData = {},
}) {
  const openTeamPop = useModalStore((state) => state.openTeamPop);
  return (
    <section>
      <div className={`team_sec sec-pad-all ${classname}`}>
        <div className="container">
          <div className="heading">
            <h2 className="primary">{heading}</h2>
          </div>
          <div className="team_wrapper">
            {teamData.map((item) => (
              <div className="team_col" onClick={openTeamPop} key={item.id}>
                <figure>
                  <Image
                    src={item.mediaSrc}
                    width={342}
                    height={342}
                    alt="Team Image"
                  ></Image>
                </figure>
                <figcaption>
                  <h6>{item.name}</h6>
                  <p>{item.position}</p>
                </figcaption>
              </div>
            ))}
            {/* <div className="team_col" onClick={openTeamPop}>
              <figure>
                <Image
                  src="/assets/images/others/team2.png"
                  width={342}
                  height={342}
                  alt="Team Image"
                ></Image>
              </figure>
              <figcaption>
                <h6>Mohit Bajaj</h6>
                <p>Director</p>
              </figcaption>
            </div> */}
          </div>
          {buttonText && (
            <div className="btn_wrap">
              <Button
                linkHref="/about-us"
                classname="no-radius"
                buttonText="Explore Our Leadership"
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
          )}
        </div>
      </div>
    </section>
  );
}
