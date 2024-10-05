import "./App.css";
import { useState } from "react";

const PackagingList = ({ itemList, setItemList }) => {

  return (
    <div className="packaging">
      <div className="itemListContainer">
        <div className="itemList">
          {itemList.map((item) => (
            <ItemList item={item} itemList={itemList} setItemList={setItemList} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackagingList;



const ItemList = ({ item, setItemList, itemList }) => {
  const [addClass, setAddClass] = useState(false);
  const [isDeleted, setIsDeleted] = useState("");

  const clickHandler_for_cuteline = () => {
    setAddClass(!addClass ? "cute-line" : false);
  };

  const deleteHandler = () => {
    setIsDeleted("deleted");

    setTimeout(() => {
      setIsDeleted("");
      setItemList(itemList.filter((elem) => elem !== item));
      console.log(itemList);
    }, 1000);

  };


  return (
    <div className={`item ${isDeleted}`}>
      <label class="custom-checkbox">
        <input type="checkbox" className="checkbox" />
        <span class="checkmark" onClick={clickHandler_for_cuteline}></span>
      </label>

      <div className="text-itemNumber-container">
        <p>{item.itemNumber}</p>
        <p>{item.inputText}</p>
        <div className={addClass}></div>
      </div>

      <button className="cancel-button" onClick={deleteHandler}>x</button>
    </div>
  );
};

