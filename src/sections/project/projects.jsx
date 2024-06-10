import React from "react";
import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freahBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitlift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

function projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Project</h1>
      <div className={styles.projectContainer}>
        <ProjectCard
          src={viberr}
          link="http://google.com"
          h3="viber"
          p="stream app"
        />
        <ProjectCard
          src={freahBurger}
          link="http://google.com"
          h3="Fresh Burger"
          p="food app"
        />
        <ProjectCard
          src={hipsster}
          link="http://google.com"
          h3="Hipsster"
          p="glasses app"
        />
         <ProjectCard
          src={fitlift}
          link="http://google.com"
          h3="fitlift"
          p="fitness app"
        />
      </div>
    </section>
  );
}

export default projects;
