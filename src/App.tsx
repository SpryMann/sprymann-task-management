import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Menu from "./components/Menu";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectsSinglePage from "./pages/ProjectSinglePage";
import ProfilePage from "./pages/ProfilePage";

const App: React.FC = () => {
  return (
    <div className="container">
      <Menu />

      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/projects"}>
          <Route path={""} element={<ProjectsPage />} />
          <Route path={":projectId"} element={<ProjectsSinglePage />} />
        </Route>
        <Route path={"/profile"}>
          <Route path={""} element={<ProfilePage />} />
          <Route path={"edit"} element={<ProfilePage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
