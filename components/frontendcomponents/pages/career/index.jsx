"use client";
import { useRef } from "react";
import staticData from "@/uploads/data/StaticData.json";
import HeroSection from "@/components/frontendcomponents/molecules/HeroSection";
import TeamInfo from "./TeamInfo";
import LifeOrganisation from "./LifeOrganisation";
import OpenPositions from "./OpenPositions";
import FutureColleagues from "./FutureColleagues";
import PositionsPop from "@/components/frontendcomponents/molecules/PositionsPop";
import "@/uploads/styles/career/career.css";

export default function CareerPage() {
  const positionsSec = useRef(null);
  const heroSectionData = staticData.Career.Section1;
  const activeScroll = (ref) => {
    if (ref.current) {
      const top = ref.current.offsetTop - 70;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };
  return (
    <main>
      <HeroSection
        classname="career_hero"
        data={heroSectionData}
        buttonText="View Current Openings"
        onClick={() => activeScroll(positionsSec)}
      />
      <TeamInfo />
      <LifeOrganisation />
      <OpenPositions ref={positionsSec} />
      <FutureColleagues />
      <PositionsPop />
    </main>
  );
}
