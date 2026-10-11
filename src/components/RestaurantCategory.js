import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCateogory = ({ category, showItem , handleShowIndex}) => {
    // const [showItems , setShowItems] = useState(false);

const handleClick = ()=>{
    handleShowIndex();
}

  return (
    <div>
      {/* Header */}
      <div className=" w-6/12 mx-auto my-5  bg-gray-100 p-2 shadow-lg ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="text-lg font-bold">
            {category.title} ({category.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {/* Accordion Body */}
        {showItem && <ItemsList items={category?.itemCards} displayAddItemButton={true} />}
      </div>
    </div>
  );
};

export default RestaurantCateogory;


/**
 * Here in this component we are using state variables to open and close the accordion but due to what happens is 
 * all the accoridon gets open and i want if one accordion is open & i clicked on the other, opened one shold be closed.
 * so in order to do that we need to lift the state showINdex from child component to to its parent.
 * so that the state var can be used to handle open/close of accordion.
 * 
 * Currently this componeny if state is present in uncontrolled component since it manages it owns state and no else is controlling
 * it.
 * BUt is we move this state to its parent then this will be Controlled component because it will be controlled by parent 
 * componeny by passing state into it.
 */