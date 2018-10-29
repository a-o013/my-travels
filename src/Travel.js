import React from "react";

const Travel = ({ destination, image, pays }) => (
  <figure>
    <img src={image} alt={pays} />
    <figcaption>
     <h3>{destination}</h3>
     <p> {pays} </p>
    </figcaption>
  </figure>
);

export default Travel;