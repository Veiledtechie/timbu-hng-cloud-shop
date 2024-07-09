import React from "react";
import "./Home.css";
import Rectangleone from "./Rectangleone.png";
import Rectangletwo from "./Rectangletwo.png";
export default function Memories() {
  return (
    <div className="row mt-5 memories">
      <div className="col-md-6">
        <h2 className="memories-details">Make Memories with Miva</h2>
        <p className="memories-details-two">
          Explore our curated selection of premium quality designed and handmade
          pieces to elevate your decor
        </p>
      </div>

      <div className="col-md-6 memories-images">
        <img src={Rectangletwo} alt="" className="rectangle2" />

        <img src={Rectangleone} alt="" className="Rectangle1" />
      </div>
    </div>
  );
}
