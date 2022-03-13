import React from "react";

import ProjectItem from "./ProjectItem";

interface ProjectsListProps {
  projects: IProject[];
}

interface IProject {
  title: string;
  background: "pink" | "purple" | "yellow";
  color: "white" | "black";
}

const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
  return (
    <div className="column">
      {projects.map((project) => (
        <ProjectItem
          key={project.title}
          background={project.background}
          color={project.color}
        />
      ))}

      <button className="button button--with-text button--full-size">
        <svg className="icon icon--plus">
          <path d="M15 7H10V2C10 1.44781 10.0522 1 9.5 1H8.5C7.94781 1 8 1.44781 8 2V7H3C2.44781 7 2 6.94781 2 7.5V8.5C2 9.05219 2.44781 9 3 9H8V14C8 14.5522 7.94781 15 8.5 15H9.5C10.0522 15 10 14.5522 10 14V9H15C15.5522 9 16 9.05219 16 8.5V7.5C16 6.94781 15.5522 7 15 7Z"></path>
        </svg>
        New project
      </button>
    </div>
  );
};

export default ProjectsList;
