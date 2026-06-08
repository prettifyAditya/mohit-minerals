import staticData from "@/uploads/data/StaticData.json";
import HeroSection from "../../molecules/HeroSection";
import "@/uploads/styles/media/media.css";
import MediaListing from "./MediaListing";

export default function MediaPage() {
  const heroSectionData = staticData.Media.Section1;
  const mediaListingData = staticData.Media.Section2;
  return (
    <main>
      <HeroSection classname="media_hero static_hero" data={heroSectionData} />
      <MediaListing data={mediaListingData} />
    </main>
  );
}
