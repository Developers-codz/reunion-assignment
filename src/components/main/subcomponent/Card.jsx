import React from "react";
import { BathroomIcon, Bed, Dimension, HeartOutline, Sparkle } from "../../../assets";
import "./style.css";

export const Card = ({ estate }) => {
  return (
    <>
      <li className="card">
        <div className="image-wrapper">
        <img src={estate.image} alt="" className="card-img" />
       
            <div className="pill">
                <Sparkle />
                <span>Popular</span>
                </div>
            <div className="triangle"></div>
   
        </div>
        <div className="card-detail">
          <div className="card-head">
           
              <div className="price-tag">
                ₹ {estate.price}
                <span className="month">/month</span>
            </div>
            <div className="heart-icon">
                <HeartOutline />
            </div>
            </div>
            <div className="estate-name">{estate.name}</div>
            <div className="address">
              {estate.location.address}, {estate.location.city},{" "}
              {estate.location.state}
          </div>
          <div className="card-footer">
              <div className="home-detail">
                  <Bed /><span>{estate.deta.bed} Bed</span>
              </div>
              <div className="home-detail">
                  <BathroomIcon /><span>{estate.deta.bathroom} bathroom</span>
              </div>
              <div className="home-detail">
              <Dimension /><span>{estate.deta.dimension} dimension</span>
              </div>
          </div>
        </div>
      </li>
    </>
  );
};
