import staticData from "@/uploads/data/StaticData.json";
import HeroSection from "@/components/frontendcomponents/molecules/HeroSection";
import ContactForm from "@/components/frontendcomponents/organisms/ContactForm";
import MapSec from "./MapSec";
import ContactInfo from "./ContactInfo";
import "@/uploads/styles/contact-us/contact.css";

export default function ContactUsPage() {
  const heroSectionData = staticData.ContactUs.Section1;
  return (
    <main>
      <HeroSection
        classname="contact_hero static_hero"
        data={heroSectionData}
      />
      <ContactInfo />
      <ContactForm heading="Your journey starts with a simple conversation." />
      <MapSec />
    </main>
  );
}
