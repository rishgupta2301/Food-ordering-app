import { useState, useEffect } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";


const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState(""); //useState is used to create state variables

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      // "https://www.swiggy.com/mapi/homepage/getCards?lat=28.65420&lng=77.23730"
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.713120511989953&lng=77.12344182819285"
    );
    const json = await data.json();
    console.log(json);
    console.log("--------")
    console.log(json?.data?.cards[4]?.card?.card)
    setAllRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }
  console.log("render");

  // Conditional Rendering:
  // if restaurant is empty : Shimmer UI
  // if restaurant has data: actual data UI

  //not render component (Early return):

  const online = useOnline();

  if(!online){
    return <h2>🔴 Offline, please check your internet connection!</h2>
  }

  if (!allRestaurants) return null;

  // if(filteredRestaurants?.length === 0) return <h2>No matches found!!</h2>

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => {
            console.log(searchText);
            setSearchText(e.target.value);
            // searchText = e.target.value
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            // need to filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id} >
                <RestaurantCard {...restaurant.info}/>
              </Link>
            );
          })
        ) : (
          <h2>Not found!</h2>
        )}
      </div>
    </>
  );
};

export default Body;
