import React from "react";
import {
  BathroomIcon,
  Bed,
  Dimension,
  HeartFilled,
  HeartOutline,
  Sparkle,
} from "../../../assets";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavHandler,
  removefromFavHandler,
} from "../../../features/favorites/favoriteSlice";

export const Card = ({ estate }) => {
  const dispatch = useDispatch();
  const { fav } = useSelector((store) => store.fav);
  const isInFav = (id) => fav.find((each) => each.id === id);
  return (
    <>
      <li className="card">
        <div className="image-wrapper">
          <img src={estate.image} alt="" className="card-img" />

         {estate.popular ? <><div className="pill">
            <Sparkle />
            <span>Popular</span>
          </div>
          <div className="triangle"></div></>  : <></>}
        </div>
        <div className="card-detail">
          <div className="card-head">
            <div className="price-tag">
              ₹ {estate.price}
              <span className="month">/month</span>
            </div>
            {isInFav(estate.id) ? (
              <div
                className="heart-icon filled"
                onClick={() => dispatch(removefromFavHandler(estate.id))}
              >
                <HeartFilled />
              </div>
            ) : (
              <div
                className="heart-icon "
                onClick={() => dispatch(addToFavHandler(estate))}
              >
                <HeartOutline />
              </div>
            )}
          </div>
          <div className="estate-name">{estate.name}({estate["property-type"]})</div>
          <div className="address">
            {estate.location.address}, {estate.location.city},{" "}
            {estate.location.state}
          </div>
          <div className="card-footer">
            <div className="home-detail">
              <Bed />
              <span>{estate.deta.bed} Bed</span>
            </div>
            <div className="home-detail">
              <BathroomIcon />
              <span>{estate.deta.bathroom} bathroom</span>
            </div>
            <div className="home-detail">
              <Dimension />
              <span>{estate.deta.dimension} dimension</span>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
