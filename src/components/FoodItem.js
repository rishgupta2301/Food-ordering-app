import { IMG_CDN_URL } from "../constants";

const FoodItem = ({ imageId, name, description, price, defaultPrice }) => {
  return (
    <div>
      <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
        <img src={IMG_CDN_URL + imageId} />
        <h2 className="font-bold text-xl">{name}</h2>
        <h6>{description}</h6>
        <h4>MRP: ₹{(price ? price : defaultPrice) / 100}</h4>
      </div>
    </div>
  );
};

export default FoodItem;
