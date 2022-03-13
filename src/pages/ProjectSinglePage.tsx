import React from "react";
import Card from "../components/Card";

import Header from "../components/Header";

const ProjectsSinglePage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="row row--filter">
          <div className="row__inner">
            <button className="filter filter--active">
              All<span className="filter__count">17</span>
            </button>
            <button className="filter">
              To do<span className="filter__count">10</span>
            </button>
            <button className="filter">
              In progress<span className="filter__count">1</span>
            </button>
            <button className="filter">
              Done<span className="filter__count">1</span>
            </button>
          </div>
        </div>
        <div className="column">
          {[1, 2, 3, 4].map((todo) => (
            <Card key={todo} appearance="standard" />
          ))}
        </div>
      </main>
    </>
  );
};

export default ProjectsSinglePage;
