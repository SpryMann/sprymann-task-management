import React from "react";
import { useLocation } from "react-router-dom";

import Auth from "../components/Auth";
import EditProfile from "../components/EditProfile";
import Header from "../components/Header";
import Profile from "../components/Profile";

const ProfilePage: React.FC = () => {
  const location = useLocation();
  const user = {};

  if (!user) {
    return (
      <div className="main">
        <Auth />
      </div>
    );
  }

  if (location.pathname === "/profile/edit" && Boolean(user)) {
    return (
      <>
        <Header />
        <EditProfile />
      </>
    );
  }

  return (
    <>
      <Header />
      <Profile />
    </>
  );
};

export default ProfilePage;
