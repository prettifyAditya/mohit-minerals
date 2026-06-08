import staticData from "@/uploads/data/StaticData.json";
import InsightsSec from "./InsightsSec";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import BusinessSolution from "./BusinessSolution";
import RealEstate from "./RealEstate";
import GlobalPresence from "./GlobalPresence";
import IndustryLeader from "./IndustryLeader";
import SocialResponsibility from "./SocialResponsibility";
import JourneySection from "./JourneySection";
import TeamSection from "@/components/frontendcomponents/molecules/TeamSection";
import "@/uploads/styles/home/home.css";

export default function HomePage() {
  const heroSectionData = staticData.Homepage.Section1;
  const insightsData = staticData.Homepage.Section2;
  const businessData = staticData.Homepage.Section4;
  const journeyData = staticData.Homepage.Section7;
  const industryData = staticData.Homepage.Section8;
  const teamData = staticData.Homepage.Section9;
  return (
    <main>
      <HeroSection data={heroSectionData} />
      <InsightsSec data={insightsData} />
      <AboutSection />
      <BusinessSolution data={businessData} />
      <RealEstate />
      <GlobalPresence />
      <JourneySection data={journeyData} />
      <IndustryLeader data={industryData} />
      <TeamSection
        heading="Meet the Visionaries"
        buttonText="Explore Our Leadership"
        teamData={teamData}
      />
      <SocialResponsibility />
    </main>
  );
}
