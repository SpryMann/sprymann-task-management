import "./ProjectItem.css";
import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

interface ProjectItemProps {
  background: "pink" | "purple" | "yellow";
  color: "white" | "black";
}

const ProjectItem: React.FC<ProjectItemProps> = ({ background, color }) => {
  return (
    <Link
      className={classNames(
        "project",
        {
          "project--pink": background === "pink",
        },
        {
          "project--purple": background === "purple",
        },
        {
          "project--yellow": background === "yellow",
        },
        { "project--dark-color": color === "black" }
      )}
      to={"project"}
    >
      <p className="project__suptitle">12/12 tasks · 100%</p>
      <h2 className="project__title">SuperApp</h2>
    </Link>
  );
};

export default ProjectItem;
