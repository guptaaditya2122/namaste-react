
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCateogory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const {resId} = useParams();

  const [showIndex, setShowIndex] = useState(null);

  // Instead of writing a fetching login here -> creating a customHook for this

  const resInfo  = useRestaurantMenu(resId);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API+resId);
  //   const jsonData = await data.json();
  //   console.log(jsonData);
  //   setResInfo(jsonData.data);
  // };

    if(resInfo === null ) return <Shimmer/>

  const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => c?.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    )



  return (
    <div className="text-center m-4 p-4 " >
      <h1 className="text-3xl font-bold my-6">{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
      <p className="text-xl font-bold">{cuisines.join(", ")} - {costForTwoMessage}</p>

      {/* Accordion  */}
      {categories.map((category, index) => 
      <RestaurantCateogory 
      key={index} 
      category ={category.card.card}
      showItem ={ index === showIndex? true : false} // so basically if index is 0 then first accordion will be open if anyother
      // index then that accordion will be open
      handleShowIndex = {()=>setShowIndex(showIndex === index ? null : index)} // this will make 
      // Clicking a closed accordion opens it.
      // Clicking another accordion closes the previous one.
      // Clicking the currently open accordion closes it.
      />
      )}

    </div>
  );
};

export default RestaurantMenu;


/**
 * Now that i lifted the state up to this component i want somehow the child component to change setShowINdex upon clicking
 * og the accordion . So we will the callback function as a props into child component and trigger it so that showIndex will change 
 * here in parent component
 */