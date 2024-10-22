import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
    return (
      <div className="card">
        <img
          src={
            IMG_CDN_URL +
            cloudinaryImageId
          }
        />
        <h2>{name}</h2>
        <h6>{cuisines.join(", ")}</h6>
        <h4>{avgRating}</h4>
      </div>
    );
  };


  export default RestaurantCard;