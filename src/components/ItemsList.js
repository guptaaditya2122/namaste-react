import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/store/cartSlice";


const ItemList = ({ items, displayAddItemButton }) => {

  const dispatch = useDispatch();

  const handleAddItems = (item)=>{
    // dispatch an action
    dispatch(addItem(item))  // this pizza here is payload & here we do not need to pass state even though it is first argument
    // Because that state is managed by Redux on its own
  }


  return (
    <div>
      {items.map((item, index) => (
        <div
          key={item.card.info.id}
          className="p-3 m-2 border-b-1 border-gray-300 text-left"
        >
          <div className="flex justify-between">
            <div className=" py-2">
              <span className="text-lg">{item?.card?.info?.name}</span>
              <span>
                {" "}
                - Rs{" "}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <div>
              <div className="absolute">
               { displayAddItemButton && <button className="p-2 rounded-lg mx-5 my-17 hover:bg-amber-200 bg-amber-50 shadow-lg m-auto"
                onClick={()=>handleAddItems(item)}>Add +</button> } 
              </div>
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-24 h-18"
              />
            </div>
          </div>
          <p className="text-xs w-10/12">{item.card.info.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
