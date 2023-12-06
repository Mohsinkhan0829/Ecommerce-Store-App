import React from "react";

const FeaturesItem = (props) => {
  return (

      <div>
        <img src={props.image} alt="" />
        <h6>{props.name}</h6>
      </div>

);
};

export default FeaturesItem;
