import staticData from "@/uploads/data/StaticData.json";
import HeroSection from "@/components/frontendcomponents/molecules/HeroSection";
import WhoWeAre from "./WhoWeAre";
import MissionVision from "./MissionVision";
import TeamSection from "@/components/frontendcomponents/molecules/TeamSection";
import ValueSec from "./ValueSec";
import DirectorMessage from "./DirectorMessage";
import History from "./History";
import "@/uploads/styles/about/about.css";

export default function AboutUsPage() {
  const heroSectionData = staticData.AboutUs.Section1;
  const teamData = staticData.AboutUs.Section6;
  return (
    <main>
      <HeroSection classname="aboutus_hero" data={heroSectionData} />
      <WhoWeAre />
      <MissionVision />
      <History />
      <DirectorMessage />
      <TeamSection
        classname="about_team"
        heading="Leadership"
        teamData={teamData}
      />
      <ValueSec />
    </main>
  );
}
