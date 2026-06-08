import staticData from "@/uploads/data/StaticData.json";
import HeroSection from "@/components/frontendcomponents/molecules/HeroSection";
import ServiceDesc from "./ServiceDesc";
import IndustriesSec from "./IndustriesSec";
import ContactForm from "@/components/frontendcomponents/organisms/ContactForm";
import MoreService from "./MoreService";
import "@/uploads/styles/service/service.css";

export default function ServiceDetailsPage() {
  const heroSectionData = staticData.ServiceDetails.Section1;
  const industriesSecData = staticData.ServiceDetails.Section3;
  const serviceData = staticData.ServiceDetails.Section5;
  return (
    <main>
      <HeroSection classname="serviceD_hero" data={heroSectionData} />
      <ServiceDesc />
      <IndustriesSec data={industriesSecData} />
      <ContactForm heading="Get Reliable Coal & Coke Solutions Today Now" />
      <MoreService data={serviceData} />
    </main>
  );
}
