import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [loginButton, setLoginButton] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const user = useContext(UserContext);

    // Subsccribing to store using a Selector
    const cartItems = useSelector((store)=>store.cart.items);    // used to subscribe to store & inside store i want to subscribe to cart items 
    console.log(cartItems)


    return (
        <div className="flex justify-between bg-purple-200 shadow-lg mb-2">
            <div className="logo-container">
                <img className="w-56" 
                src={LOGO_URL}
                alt="Logo" />
            </div>
            <nav className="flex items=center">
                <ul className="flex p-4 m-10 gap-10 list-none">
                        {/* <li>Online Status {onlineStatus ? "🟢" : "🔴"}</li> */}
                        <li> <Link to="/">Home</Link></li>
                        <li> <Link to="/about">About</Link></li>
                        <li> <Link to="/contact">Contact Us</Link></li>
                        <li> <Link to="/grocery">Grocery</Link></li>
                        <li className="text-lg font-bold"> <Link to="/cart">Cart ( {cartItems.length} items)</Link></li>
                        <button className="login-btn" onClick={()=>
                    {loginButton === "Login" ? setLoginButton("Logout") : setLoginButton("Login")}}>{loginButton}</button>
                        <li className="text-lg font-bold px-3">{onlineStatus ? "🟢" : "🔴"}  {user.loggedInUser}</li>
                    </ul>
                </nav>
               </div>
    )
}

export default Header;

// So Here whenever we a state is changed the component is re-rendered everytime and the new state is reflected in the UI.

// React reconciliation algo checks the diff between the new virtual DOM and the old virtual DOM 
// and updates the real DOM accordingly (that is to say all the other things except button are not changed and only since button is updated so React will only update the button text).
//  This is how React efficiently updates the UI when state changes occur.