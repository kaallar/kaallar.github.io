import ClinicaNavbar from "../components/clinica/ClinicaNavbar";
import ClinicaHero from "../components/clinica/ClinicaHero";
import ClinicaStats from "../components/clinica/ClinicaStats";
import ClinicaAbout from "../components/clinica/ClinicaAbout";
import ClinicaServices from "../components/clinica/ClinicaServices";
import ClinicaGallery from "../components/clinica/ClinicaGallery";
import ClinicaTestimonials from "../components/clinica/ClinicaTestimonials";
import ClinicaWhyUs from "../components/clinica/ClinicaWhyUs";
import ClinicaHours from "../components/clinica/ClinicaHours";
import ClinicaFooter from "../components/clinica/ClinicaFooter";
import WhatsAppFloat from "../components/clinica/WhatsAppFloat";
import ClinicaTeam from "../components/clinica/ClinicaTeam";

function ClinicaDemo() {
  return (
    <>
      <ClinicaNavbar />
      <ClinicaHero />
      <ClinicaStats />
      <ClinicaAbout />
      <ClinicaServices />
      <ClinicaTeam />
      <ClinicaGallery />
      <ClinicaTestimonials />
      <ClinicaWhyUs />
      <ClinicaHours />
      <ClinicaFooter />
      <WhatsAppFloat />
    </>
  );
}

export default ClinicaDemo;