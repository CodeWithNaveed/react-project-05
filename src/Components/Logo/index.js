import "./App.css";
import tree from "./assets/tree.png";

const Logo = () => {
  return (
    <div className="logo">
      <div className="imageBox">
        <img src={tree} alt="tree" />
      </div>
      <h1>FAR AWAY</h1>
      <div className="imageBox">
        <img src="https://png.pngtree.com/png-clipart/20220818/ourmid/pngtree-brown-briefcase-transparent-png-image_6115630.png" alt="briefcase" />
      </div>
    </div>
  );
};

export default Logo;