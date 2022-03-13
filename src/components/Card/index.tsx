import React from "react";
import "./Card.css";

interface CardProps {
  appearance: "square" | "progress" | "standard";
}

const Card: React.FC<CardProps> = ({ appearance }) => {
  if (appearance === "square") {
    return (
      <div className="card row__card card--square card--gray">
        <p className="card__suptitle">SuperApp</p>
        <h2 className="card__title">Redesign home screen</h2>
        <p className="card__subtitle">
          <span className="circle card__circle"></span>till 10 May 2022
        </p>
      </div>
    );
  } else if (appearance === "progress") {
    return (
      <div className="card column__card card--lane">
        <div className="card__text">
          <p className="card__suptitle">Sam's project</p>
          <h2 className="card__title">Create two ad banners</h2>
          <p className="card__subtitle">2 hours</p>
        </div>
        <div className="progress card__progress">
          <svg className="progress__border">
            <circle cx="24" cy="24" r="24" stroke-linecamp="round"></circle>
          </svg>
          <span className="progress__percent">70%</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card-wrap">
        <div className="card-status">
          <button className="button button--with-text button--yellow status__button status__button--left">
            In progress
          </button>
          <button className="button button--with-text button--purple status__button status__button--right">
            Done
          </button>
        </div>
        <div className="card">
          <h2 className="card__title">
            Create new blog post<span className="circle"></span>
          </h2>
          <p className="card__subtitle">
            <svg className="icon icon--calendar">
              <g clipPath="url(#clip0_5_66)">
                <path d="M13.3335 2.00001H12.6668V0.666672H11.3335V2.00001H4.66683V0.666672H3.3335V2.00001H2.66683C1.9335 2.00001 1.3335 2.60001 1.3335 3.33334L1.3335 14C1.3335 14.7333 1.9335 15.3333 2.66683 15.3333H13.3335C14.0668 15.3333 14.6668 14.7333 14.6668 14V3.33334C14.6668 2.60001 14.0668 2.00001 13.3335 2.00001ZM13.3335 14H2.66683V5.33334H13.3335V14Z"></path>
              </g>
              <defs>
                <clipPath id="clip0_5_66">
                  <rect width="16" height="16"></rect>
                </clipPath>
              </defs>
            </svg>
            till 10 May 2022
          </p>
        </div>
      </div>
    );
  }
};

export default Card;
