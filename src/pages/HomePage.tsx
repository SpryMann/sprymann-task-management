import React from "react";

import Header from "../components/Header";
import Banner from "../components/Banner";
import CardsList from "../components/CardsList";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Banner />
        <CardsList title="To do" todos={[1, 2, 3]} direction="row" />
        <CardsList
          title="In progress"
          todos={[1, 2, 3, 4]}
          direction="column"
        />
      </main>
    </>
  );
};

export default HomePage;
