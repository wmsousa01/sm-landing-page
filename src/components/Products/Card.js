import React from "react";
import "./Card.css";


function Card(props) {
  return (
    <div className="div-card">
      <div className="card">
        <div className="card-header">{props.header}</div>
        <div className="card-image">
        <img src={props.logo} alt="Logo" />
        </div>
        <div className="card-body">
          <p className="card-paragraph">{props.paragraph}</p>
          <div className="price-section">
            <h1 className="card-price">{props.price}</h1>
            <p className="card-paragraph">{props.alert}</p>
          </div>
        </div>
        <div>
          <a href={props.route}>
            <button className="card-button">{props.button}</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
