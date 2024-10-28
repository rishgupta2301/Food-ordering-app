import { useState, useEffect } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants) {
  const filteredData = restaurants.filter((restaurant) => {
    return restaurant.info.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });
  return filteredData;
}

const Body = () => {
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState(""); //useState is used to create state variables


  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=28.65420&lng=77.23730");
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurants(json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
  }
  console.log("render")

// Conditional Rendering:
// if restaurant is empty : Shimmer UI
// if restaurant has data: actual data UI

//not render component (Early return):
if(!allRestaurants) return null;

// if(filteredRestaurants?.length === 0) return <h2>No matches found!!</h2>

  return (
    (allRestaurants?.length === 0) ? <Shimmer /> :
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
        
        {filteredRestaurants.length > 0 ? (filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })) : <h2>Not found!</h2>}
      </div>
    </>
  );
};

export default Body;
