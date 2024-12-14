import { useSelector , useDispatch} from "react-redux";
import store from "../utils/store";
import FoodItem from "./FoodItem";
import { removeItem } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector(store => store.cart.items)
    // console.log("---->" + cartItems[0]);
    const dispatch = useDispatch()

    const handleRemoveItem = (item) => {
        dispatch(removeItem(item));
    }

  return (


    <div>
      <h1 className="font-bold text-3xl text-center">Cart Items- {cartItems.length}</h1>
      <div className="flex p-2 m-3 flex-row flex-wrap">

      {cartItems.map((item) => {
        return (
            <>
        <FoodItem key={item?.card?.info.id} {...item?.card?.info} />
        <button onClick={() => handleRemoveItem(item)} className="bg-red-400 p-2 m-5 " >Remove Item</button>
            </>
        )
      }
    )}
    </div>
      {/* <FoodItem {...cartItems[0]?.card?.info} /> */}
    </div>
  );
};

export default Cart;
