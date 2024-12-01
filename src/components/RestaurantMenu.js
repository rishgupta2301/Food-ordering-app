import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurant = useRestaurant(resId);

  // console.log(restaurant);
  //   const menu = restaurant[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel;

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurant id: {resId}</h1>
        <h2>{restaurant[2]?.card?.card?.info?.name}</h2>
        <img
          style={{ height: "500px", width: "500px" }}
          src={IMG_CDN_URL + restaurant[2]?.card?.card?.info?.cloudinaryImageId}
        />
        <h3>{restaurant[2]?.card?.card?.info?.avgRating} stars</h3>
        <h3>{restaurant[2]?.card?.card?.info?.areaName}</h3>
      </div>
      <div>
        {/* restaurant[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card */}
        <h1>Menu</h1>
        {console.log(
          restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
        )}
        <ul>
          {restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
            (menuItem) => {
              return <li key={menuItem.bannerId}>{menuItem.card?.info?.name}</li>;
            }
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
