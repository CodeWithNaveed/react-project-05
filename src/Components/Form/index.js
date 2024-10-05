import { useState } from "react";
import "./App.css";

const Form = ({ itemList, setItemList }) => {
  const [inputText, setInputText] = useState("");
  const [itemNumber, setItemNumber] = useState(1);

  const addHandler = () => {
    const myList = [...itemList];
    myList.push({
      inputText,
      itemNumber,
    });
    setItemList(myList);
    setInputText("");
    console.log(itemList);
  };

  return (
    <div className="form">
      {/* text */}
      <p className="text">What items do you need for your 😍 trip? </p>


      {/* dropdown */}
      <select className="dropdown" onChange={(e) => setItemNumber(e.target.value)}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((elem) => (
          <option>{elem}</option>
        ))}
      </select>

      {/* input */}
      <input
        onChange={(e) => setInputText(e.target.value)}
        placeholder="items you need"
        className="input"
        value={inputText}
      />

      {/* button */}
      <button onClick={addHandler} className="add-button">Add</button>
    </div>
  );
};

export default Form;