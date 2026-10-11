import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemsList";
import { clearCart } from "../utils/store/cartSlice";

const Cart =()=>{
    const dispatch =useDispatch();
    //** Interview tip */
    // Always subscribe to correct portion of store other wise it will cause performance issue
    // because if you subscribe to whole store and anything changes inside store changes this cart component will know and 
    // render the component again which is not efficient.
    // Since this cart does not require user data it should not be subscribe to whole store right only subscribe to slice which is 
    //required
    const cartItems = useSelector((store)=>store.cart.items)
    const handleClearCart = ()=>{
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto m-4 p-4">
            <button className="p-2 m-2 bg-black rounded-lg text-white" onClick={handleClearCart}>Clear Cart</button>
            {cartItems.length ===0 ? <h1>Cart is Empty, Please add items to your cart</h1> : <ItemList items={cartItems} displayAddItemButton={false}/>}
            
            </div>
        </div>
    )
};

export default Cart