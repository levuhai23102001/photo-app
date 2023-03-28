import React from "react";
import "./card.css";
const Card = ({ imgURL, title, category, onRemoveImg }) => {
  return (
    <>
      <div className="card">
        <div className="card-top">
          <img src={imgURL} alt="" className="card-img" />
          <div className="overlay">
            <div className="remove-btn" onClick={onRemoveImg}>
              Remove
            </div>
          </div>
        </div>
        <div className="card-content">
          <h4 className="card-title">{title}</h4>
          <span className="card-cate">{category}</span>
        </div>
      </div>
    </>
  );
};

export default Card;
