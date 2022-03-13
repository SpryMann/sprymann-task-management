import React from "react";
import "./Profile.css";

const Profile: React.FC = () => {
  return (
    <div className="profile">
      <picture>
        <source
          srcSet="
        https://images.unsplash.com/photo-1646818057926-abd6f904ad37?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80
      "
          type="image/webp"
        />
        <img
          className="profile__avatar"
          src="https://images.unsplash.com/photo-1646818057926-abd6f904ad37?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
          alt="User avatar"
        />
      </picture>
      <h1 className="profile__fullname">James Mariam</h1>
      <button className="button button--with-text button--full-size button--gray">
        Log out
      </button>
    </div>
  );
};

export default Profile;
