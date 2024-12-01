import { useState, useEffect } from "react"

const useRestaurant = (resId) => {
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
        // console.log(restaurant?.cards[2]?.card?.card?.info?.id);
      }

      return restaurant;

}

export default useRestaurant