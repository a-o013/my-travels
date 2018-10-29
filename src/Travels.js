import React from "react";

import Travel from "./Travel"

// src/Quotes.js
const travels = [
  {
    destination:"Los Angeles",
    pays: "USA",
    image:"https://www.crn.com/resources/020e-09f60aacc638-e316a84cac8c-1000/hollywood400.jpg"
  },
  {
    destination: "New York",
    pays: "USA",
    image:"https://static.timesofisrael.com/fr/uploads/2015/12/Statue_de_la_liberte_vue_navette-640x400.jpg"
  },
  {
    destination: "New York",
    pays: "USA",
    image:"https://static.timesofisrael.com/fr/uploads/2015/12/Statue_de_la_liberte_vue_navette-640x400.jpg"
  },
  {
    destination: "New York",
    pays: "USA",
    image:"https://static.timesofisrael.com/fr/uploads/2015/12/Statue_de_la_liberte_vue_navette-640x400.jpg"
  },
  {
    destination: "New York",
    pays: "USA",
    image:"https://static.timesofisrael.com/fr/uploads/2015/12/Statue_de_la_liberte_vue_navette-640x400.jpg"
  }
];



const Travels = () => (
  <div>
    {travels.map(travel => (
      <Travel destination={travel.destination} pays={travel.pays} image={travel.image}/>
    ))}
  </div>
);

export default Travels;