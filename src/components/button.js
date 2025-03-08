import { Link } from "react-router-dom";
import "../components/b.css";
const Button = ({ onClickHandler, value, title ,img}) => {
    return (
      <button onClick={onClickHandler} value={value} className="btns">
      
      {title}
      </button>
    );
  };
 
  export default Button ;
  