import ProjectCard from "../projectcard/Projectcard";
import styles from "./projectspreview.module.css";

export default function ProjectsPreview(){
  const items = [
    { title:"Portfolio", desc:"This site. React + CSS Modules, deployed on GitHub Pages.", tech:["React","CSS"], href:"https://github.com/your/portfolio" },
    { title:"Fullstack App", desc:"CRUD with Node, Express, MongoDB. Clean and fast.", tech:["Node","Express","MongoDB"], href:"https://github.com/your/fullstack" },
    { title:"UI Components", desc:"Small component lib with docs and tests.", tech:["React","Vite","Vitest"], href:"https://github.com/your/ui-kit" },
  ];
  return (
    <div>
      <div className={styles.head}>
        <h2>Selected projects</h2>
        <a className="btn btn--ghost" href="/portfolio">See all</a>
      </div>
      <div className={styles.grid}>
        {items.map((p,i)=><ProjectCard key={i} {...p} />)}
      </div>
    </div>
  );
}
