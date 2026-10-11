import { useContext } from "react";
import {CDN_URL} from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const {loggedInUser} = useContext(UserContext)

    const {name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId} = props.resData;
    return (
        <div className=" flex flex-col m-4 p-4 w-[250px] rounded-lg  hover:bg-amber-100 " >
            <img className="logo" style={{ width: "200px", height: "200px" }} 
            src={CDN_URL+cloudinaryImageId} 
            alt="Restaurant" />
            <h3 className="text-lg p-4 font-bold">{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <p>{avgRating} stars</p>
            <p>{costForTwo}</p>
            <p>{sla.deliveryTime} mins</p>
            <p className="font-bold text-gray-2 00">{loggedInUser}</p>
        </div>
    )
}

//Higher order Component
// input - restaurant card => output enhanced restaurant card

export const withPromotedLabel = (RestaurantCard) =>{ // since this is a higherorder function 
    // it will take and return a componenent, in React componenent is a just a function which returns JSX
    // this arrow function is how we write a component check above RestaurantCard component.
    return (props)=>{
        // component returns a JSX 
        return(
            <div>
                <label className="absolute bg-black text-white p-2 m-2 rounded-lg">Promoted </label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;