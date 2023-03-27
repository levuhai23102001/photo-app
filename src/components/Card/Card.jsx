import React from "react";
import "./card.css";
const Card = ({ imgURL, title, category }) => {
  return (
    <>
      <div className="card">
        <div className="card-top">
          <img src={imgURL} alt="" className="card-img" />
        </div>
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <span className="card-cate">{category}</span>
        </div>
      </div>
    </>
  );
};

export default Card;
