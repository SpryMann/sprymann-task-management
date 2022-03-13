import React from "react";
import "./EditProfile.css";

const EditProfile: React.FC = () => {
  return (
    <div className="edit">
      <picture>
        <source
          srcSet="
        https://images.unsplash.com/photo-1646818057926-abd6f904ad37?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80
      "
          type="image/webp"
        />
        <img
          className="edit__avatar"
          src="https://images.unsplash.com/photo-1646818057926-abd6f904ad37?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
          alt="User avatar"
        />
      </picture>
      <input className="input" type="text" placeholder="First name" />
      <input className="input" type="text" placeholder="Last name" />
      <button className="button button--with-text button--full-size">
        Save
      </button>
    </div>
  );
};

export default EditProfile;
