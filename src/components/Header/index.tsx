import "./Header.css";
import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

const Header: React.FC = () => {
  const user = {};
  const location = useLocation();
  const navigate = useNavigate();

  const returnBack = () => {
    navigate(-1);
  };

  if (location.pathname === "/") {
    return (
      <header className="header">
        <h1 className="header__title">Hello, Mary</h1>
        <button className="button header__button">
          <div className="header__icon-wrap header__icon-wrap--active">
            <svg className="icon header__icon">
              <path d="M12.5 22.9167C13.6458 22.9167 14.5833 21.9792 14.5833 20.8333H10.4167C10.4167 21.9792 11.3542 22.9167 12.5 22.9167ZM18.75 16.6667V11.4583C18.75 8.26041 17.0521 5.58332 14.0625 4.87499V4.16666C14.0625 3.30207 13.3646 2.60416 12.5 2.60416C11.6354 2.60416 10.9375 3.30207 10.9375 4.16666V4.87499C7.95834 5.58332 6.25 8.24999 6.25 11.4583V16.6667L4.16667 18.75V19.7917H20.8333V18.75L18.75 16.6667ZM16.6667 17.7083H8.33334V11.4583C8.33334 8.87499 9.90625 6.77082 12.5 6.77082C15.0938 6.77082 16.6667 8.87499 16.6667 11.4583V17.7083Z"></path>
            </svg>
          </div>
        </button>
      </header>
    );
  } else if (location.pathname === "/projects") {
    return (
      <header className="header">
        <h1 className="header__title">Projects</h1>
        <button className="button header__button">
          <div className="header__icon-wrap">
            <svg className="icon header__icon">
              <g clipPath="url(#clip0_5_8)">
                <path d="M24.6582 21.6162L19.79 16.748C19.5703 16.5283 19.2725 16.4062 18.96 16.4062H18.1641C19.5117 14.6826 20.3125 12.5146 20.3125 10.1562C20.3125 4.5459 15.7666 0 10.1562 0C4.5459 0 0 4.5459 0 10.1562C0 15.7666 4.5459 20.3125 10.1562 20.3125C12.5146 20.3125 14.6826 19.5117 16.4062 18.1641V18.96C16.4062 19.2725 16.5283 19.5703 16.748 19.79L21.6162 24.6582C22.0752 25.1172 22.8174 25.1172 23.2715 24.6582L24.6533 23.2764C25.1123 22.8174 25.1123 22.0752 24.6582 21.6162ZM10.1562 16.4062C6.7041 16.4062 3.90625 13.6133 3.90625 10.1562C3.90625 6.7041 6.69922 3.90625 10.1562 3.90625C13.6084 3.90625 16.4062 6.69922 16.4062 10.1562C16.4062 13.6084 13.6133 16.4062 10.1562 16.4062Z"></path>
              </g>
              <defs>
                <clipPath id="clip0_5_8">
                  <rect width="25" height="25"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
        </button>
      </header>
    );
  } else if (location.pathname.includes("/projects/")) {
    return (
      <header className="header">
        <button
          className="button header__button header__button--left"
          onClick={returnBack}
        >
          <svg className="icon header__icon">
            <path d="M14.1357 21.7334L13.0518 22.8174C12.5928 23.2764 11.8506 23.2764 11.3965 22.8174L1.9043 13.3301C1.44531 12.8711 1.44531 12.1289 1.9043 11.6748L11.3965 2.18262C11.8555 1.72363 12.5977 1.72363 13.0518 2.18262L14.1357 3.2666C14.5996 3.73047 14.5898 4.4873 14.1162 4.94141L8.23242 10.5469H22.2656C22.915 10.5469 23.4375 11.0693 23.4375 11.7188V13.2813C23.4375 13.9307 22.915 14.4531 22.2656 14.4531H8.23242L14.1162 20.0586C14.5947 20.5127 14.6045 21.2695 14.1357 21.7334Z"></path>
          </svg>
        </button>
        <h1 className="header__title">Project</h1>
      </header>
    );
  } else if (location.pathname === "/profile" && Boolean(user)) {
    return (
      <header className="header">
        <button
          className="button header__button header__button--left"
          onClick={returnBack}
        >
          <svg className="icon header__icon">
            <path d="M14.1357 21.7334L13.0518 22.8174C12.5928 23.2764 11.8506 23.2764 11.3965 22.8174L1.9043 13.3301C1.44531 12.8711 1.44531 12.1289 1.9043 11.6748L11.3965 2.18262C11.8555 1.72363 12.5977 1.72363 13.0518 2.18262L14.1357 3.2666C14.5996 3.73047 14.5898 4.4873 14.1162 4.94141L8.23242 10.5469H22.2656C22.915 10.5469 23.4375 11.0693 23.4375 11.7188V13.2813C23.4375 13.9307 22.915 14.4531 22.2656 14.4531H8.23242L14.1162 20.0586C14.5947 20.5127 14.6045 21.2695 14.1357 21.7334Z"></path>
          </svg>
        </button>
        <Link className="button header__button" to={"edit"}>
          <svg className="icon header__icon">
            <g clipPath="url(#clip0_8_180)">
              <path d="M24.3116 6.93848L22.0606 9.18945C21.8311 9.41895 21.46 9.41895 21.2305 9.18945L15.8106 3.76953C15.5811 3.54004 15.5811 3.16895 15.8106 2.93945L18.0616 0.688477C18.9747 -0.224609 20.459 -0.224609 21.377 0.688477L24.3116 3.62305C25.2296 4.53613 25.2296 6.02051 24.3116 6.93848ZM13.877 4.87305L1.05475 17.6953L0.019595 23.6279C-0.122007 24.4287 0.576236 25.1221 1.37702 24.9854L7.30963 23.9453L20.1319 11.123C20.3614 10.8936 20.3614 10.5225 20.1319 10.293L14.712 4.87305C14.4776 4.64355 14.1065 4.64355 13.877 4.87305V4.87305ZM6.05963 16.5967C5.79108 16.3281 5.79108 15.8984 6.05963 15.6299L13.5792 8.11035C13.8477 7.8418 14.2774 7.8418 14.546 8.11035C14.8145 8.37891 14.8145 8.80859 14.546 9.07715L7.02643 16.5967C6.75788 16.8652 6.32819 16.8652 6.05963 16.5967V16.5967ZM4.29694 20.7031H6.64069V22.4756L3.49127 23.0273L1.97272 21.5088L2.52448 18.3594H4.29694V20.7031Z"></path>
            </g>
            <defs>
              <clipPath id="clip0_8_180">
                <rect width="25" height="25"></rect>
              </clipPath>
            </defs>
          </svg>
        </Link>
      </header>
    );
  } else if (location.pathname === "/profile/edit" && Boolean(user)) {
    return (
      <header className="header">
        <button
          className="button header__button header__button--left"
          onClick={returnBack}
        >
          <svg className="icon header__icon">
            <path d="M14.1357 21.7334L13.0518 22.8174C12.5928 23.2764 11.8506 23.2764 11.3965 22.8174L1.9043 13.3301C1.44531 12.8711 1.44531 12.1289 1.9043 11.6748L11.3965 2.18262C11.8555 1.72363 12.5977 1.72363 13.0518 2.18262L14.1357 3.2666C14.5996 3.73047 14.5898 4.4873 14.1162 4.94141L8.23242 10.5469H22.2656C22.915 10.5469 23.4375 11.0693 23.4375 11.7188V13.2813C23.4375 13.9307 22.915 14.4531 22.2656 14.4531H8.23242L14.1162 20.0586C14.5947 20.5127 14.6045 21.2695 14.1357 21.7334Z"></path>
          </svg>
        </button>
        <h1 className="header__title">Edit profile</h1>
      </header>
    );
  }

  return <></>;
};

export default Header;
