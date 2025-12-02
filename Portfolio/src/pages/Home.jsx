import Header from "../components/header/Header";
import Section from "../components/primitives/Section";
import AboutTeaser from "../components/home/AboutTeaser";
import Techicons from "../components/techicons/Techicons";
import ProjectsPreview from "../components/home/ProjectsPreview";
import ContactStrip from "../components/home/ContactStrip";

export default function Home(){
  return (
    <>
      <Header />
      <Section alt><AboutTeaser /></Section>
      <Section><Techicons /></Section>
      <Section alt><ProjectsPreview /></Section>
      <Section><ContactStrip /></Section>
    </>
  );
}
