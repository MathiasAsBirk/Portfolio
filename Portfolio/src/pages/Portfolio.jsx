import Section from "../components/primitives/Section";
import ProjectsPreview from "../components/home/ProjectsPreview"; // reuse for now

export default function Portfolio(){
  return (
    <Section>
      <h2 style={{marginBottom:10}}>All projects</h2>
      <ProjectsPreview />
    </Section>
  );
}
