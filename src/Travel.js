import React from "react";

const Travel = ({ destination, distance, image, pays }) => (
  <figure>
    <img src={image} alt={pays} />
    <figcaption>
     <h3>{destination}</h3>
     <p> {pays} </p>
     <span>{distance} </span>
    </figcaption>
  </figure>
);

export default Travel;