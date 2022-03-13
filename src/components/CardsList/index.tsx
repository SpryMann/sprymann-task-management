import React from "react";
import "./CardsList.css";

import Card from "./../Card";

interface CardsListProps {
  title: string;
  todos: any[];
  direction: "column" | "row";
}

const CardsList: React.FC<CardsListProps> = ({ title, todos, direction }) => {
  if (direction === "row") {
    return (
      <section className="section">
        <h2 className="section__title">
          {title}
          <span className="section__count">{todos.length}</span>
        </h2>
        <div className="row section__row">
          <div className="row__inner">
            {todos.map((todo) => (
              <Card key={todo} appearance="square" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <h2 className="section__title">
        {title}
        <span className="section__count">{todos.length}</span>
      </h2>
      <div className="column section__column">
        {todos.map((todo) => (
          <Card key={todo} appearance="progress" />
        ))}
      </div>
    </section>
  );
};

export default CardsList;
