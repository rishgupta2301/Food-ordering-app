import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);
 

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65200&lng=77.16630&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    console.log(json.data);
    setRestaurant(json.data?.cards);
    console.log(restaurant)
    // console.log(restaurant?.cards[2]?.card?.card?.info?.id);
  }
//   const menu = restaurant[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel;

  return (!restaurant) ? <Shimmer />  : (
    <div  className="menu">
    <div>
      <h1>Restaurant id: {resId}</h1>
      <h2>{restaurant[2]?.card?.card?.info?.name}</h2>
      <img style={{height:"500px", width:"500px"}} src={IMG_CDN_URL+restaurant[2]?.card?.card?.info?.cloudinaryImageId} />
      <h3>{restaurant[2]?.card?.card?.info?.avgRating} stars</h3>
      <h3>{restaurant[2]?.card?.card?.info?.areaName}</h3>
      </div>
      <div>
        {/* restaurant[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card */}
        <h1>Menu</h1>
        {console.log(restaurant[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel)}
        <ul>
        {restaurant[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel?.map((menuItem) => {
            return (
            <li key={menuItem.bannerId} >{menuItem.title}</li>
            )
        })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
