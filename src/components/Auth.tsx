import React, { useState } from "react";

const Auth: React.FC = () => {
  const [whatShow, setWhatShow] = useState<"switch" | "signin" | "signup">(
    "switch"
  );

  const changeShow = (show: "signin" | "signup") => {
    setWhatShow(show);
  };

  if (whatShow === "signin") {
    return (
      <div className="profile-enter">
        <input className="input" type="text" placeholder="Username" />
        <input className="input" type="password" placeholder="Password" />
        <button className="button button--with-text button--yellow">
          Sign in
        </button>
      </div>
    );
  } else if (whatShow === "signup") {
    return (
      <div className="profile-enter">
        <input className="input" type="text" placeholder="First name" />
        <input className="input" type="text" placeholder="Last name" />
        <input className="input" type="text" placeholder="Username" />
        <input className="input" type="password" placeholder="Password" />
        <button className="button button--with-text button--yellow">
          Sign up
        </button>
      </div>
    );
  }

  return (
    <div className="profile-enter">
      <button
        className="button button--with-text"
        onClick={() => changeShow("signin")}
      >
        Sign in
      </button>
      <button
        className="button button--with-text button--yellow"
        onClick={() => changeShow("signup")}
      >
        Sign up
      </button>
    </div>
  );
};

export default Auth;
