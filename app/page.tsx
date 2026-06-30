import HeroSection from "@/components/sections/HeroSection";
import CompanyStats from "@/components/sections/CompanyStats";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import OngoingProjects from "@/components/sections/OngoingProjects";
import ClientsSection from "@/components/sections/ClientsSection";
import SafetyCommitment from "@/components/sections/SafetyCommitment";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      {/* SECTION 2: Hero Section */}
      <HeroSection />

      {/* SECTION 3: Company Statistics */}
      <CompanyStats />

      {/* SECTION 4: About JMDE */}
      <AboutSection />

      {/* SECTION 5: Services */}
      <ServicesSection />

      {/* SECTION 6: Why Choose JMDE */}
      <WhyChooseUs />

      {/* SECTION 7: Featured Projects */}
      <FeaturedProjects />

      {/* SECTION 8: Running Projects */}
      <OngoingProjects />

      {/* SECTION 9: Clients */}
      <ClientsSection />

      {/* SECTION 10: Safety & Quality Commitment */}
      <SafetyCommitment />

      {/* SECTION 11: Contact CTA */}
      <ContactCTA />
    </>
  );
}
