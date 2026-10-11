import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
// import restaurantList from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  // let [listOfRestaurant, setlistOfRestaurant] = useState(restaurantList);
  let [listOfRestaurant, setlistOfRestaurant] = useState([]);
  // We have introduced filteredRestaurant state to store the filtered list of restaurants based on the search text.
  // This way, we can keep the original list intact and only display the filtered results when a search is performed.
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser, setUserName}  = useContext(UserContext);
  // We are passing restaurant card and it will return a enhanced component with promoted label on it
  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard) // this is a Higher Order Component

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6072095&lng=77.4506093&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const jsonData = await data.json();
    console.log(jsonData);
    setlistOfRestaurant(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilteredRestaurant(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  if(onlineStatus === false){
    return <h1>Looks like you are Offline. Please check after sometime !!</h1>
  }

  return listOfRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className=" flex justify-center flex-row m-2 p-4">
        {/* Here if we do not put onChange then whenever user type in searech box, the value will not be updated because the searchText with empty string is binded
            to input box so inorder to update the value, we need to use onChange */}
        <input
          type="text"
          className="border border-solid border-2 border-black "
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="px-4 mx-4 bg-green-100 border border-solid border-2 border-black rounded-lg"
          onClick={() => {
            const filteredList = listOfRestaurant.filter((res) =>
              res?.info?.name.toLowerCase().includes(searchText.toLowerCase()),
            );
            // setlistOfRestaurant(filteredList);
            setFilteredRestaurant(filteredList);
          }}
        >
          Search
        </button>

        {/* <button className="clear-btn" onClick={()=>{
                setSearchText("");
                setFilteredRestaurant([]);
            }}>Clear</button> */}

        <button
          className="px-4 mx-4 bg-yellow-100 border border-solid border-2 border-black rounded-lg"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4,
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <label>UserName : </label>
        <input className="px-2 mx-1 border" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)} />
      </div>
      <div className="flex flex-wrap justify-center mx-4  shadow-2xl">
        {filteredRestaurant.map((restaurant) => (
          <Link
          className="restaurant-card-link"
            to={"/restaurants/" + restaurant.info.id}  // to access this id we use useParam hook in RestaurantMenu component
            key={restaurant.info.id}
          >
            {restaurant?.info?.promoted ? <PromotedRestaurantCard resData={restaurant.info}/> 
            : <RestaurantCard resData={restaurant.info} />}
            
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

// https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6072095&lng=77.4506093&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
