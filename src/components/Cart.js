import { useSelector , useDispatch} from "react-redux";
import store from "../utils/store";
import FoodItem from "./FoodItem";
import { removeItem, clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector(store => store.cart.items)
    // console.log("---->" + cartItems[0]);
    const dispatch = useDispatch()

    const handleRemoveItem = (item) => {
        dispatch(removeItem(item));
    }
    const handleClearCart = () => {
        dispatch(clearCart());
    }

  return (


    <div>
      <h1 className="font-bold text-3xl text-center">Cart Items- {cartItems.length}</h1>
      { cartItems.length > 0 && <button className="p-3 m-3 bg-green-100" onClick={() => handleClearCart()} >Clear Cart</button>}
      <div className="flex p-2 m-3 flex-row flex-wrap">

      {cartItems.map((item) => {
        return (
            <div className="flex flex-col">
        <FoodItem key={item?.card?.info.id} {...item?.card?.info} />
        <button onClick={() => handleRemoveItem(item)} className="bg-red-400 p-2 m-5 " >Remove Item</button>
            </div>
        )
      }
    )}
    </div>
      {/* <FoodItem {...cartItems[0]?.card?.info} /> */}
    </div>
  );
};

export default Cart;
