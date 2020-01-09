import React from "react";
import PropTypes from "prop-types";

const Card = ({ property }) => {
  const {
    index,
    picture,
    city,
    info,
    info2,
    infoPass,
    tech1,
    tech2,
    tech3,
    code,
    url
  } = property;
  return (
    <div id={`card-${index}`} className="card">
      <div className="icon-container">
        <i className={tech1}></i>
        <i className={tech2}></i>
        <i className={tech3}></i>
      </div>
      <img src={picture} alt={city} />
      <div className="details">
        <p className="location">{info}</p>
      </div>
      <div className="test-email">
        <p className="test-email-text">
          {info2}
          &nbsp; &nbsp; &nbsp;
          {infoPass}
        </p>
        <p className="test-email-text"></p>
      </div>
    </div>
  );
};

Card.propTypes = {
  property: PropTypes.object.isRequired
};

export default Card;
