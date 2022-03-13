import React from "react";

import Header from "../components/Header";
import ProjectsList from "../components/ProjectsList";

const ProjectsPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="main">
        <ProjectsList
          projects={[
            { title: "1", background: "pink", color: "white" },
            { title: "2", background: "purple", color: "white" },
            { title: "3", background: "yellow", color: "black" },
          ]}
        />
      </main>
    </>
  );
};

export default ProjectsPage;
