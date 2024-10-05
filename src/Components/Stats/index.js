import "./App.css";

const Stats = ({ itemList }) => {
  return (
    <p className="stats">
      You have {itemList.length} items on your list, and you have package {itemList.length}({itemList.length === 0 ? "0" : (itemList.length*100)/itemList.length})%
    </p>
  );
};

export default Stats;