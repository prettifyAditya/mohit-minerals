import staticData from "@/uploads/data/StaticData.json";
import HeroSection from "@/components/frontendcomponents/molecules/HeroSection";
import SocialDetails from "./SocialDetails";
import "@/uploads/styles/social/social.css";

export default function SocialResponsibilityPage() {
  const heroSectionData = staticData.SocialResponsibility.Section1;
  const socialDetailsData = staticData.SocialResponsibility.Section2;
  return (
    <main>
      <HeroSection classname="social_hero static_hero" data={heroSectionData} />
      <SocialDetails data={socialDetailsData} />
    </main>
  );
}
