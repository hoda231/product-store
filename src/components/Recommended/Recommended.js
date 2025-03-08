import Button from "../button";
import "./Recommended.css";
import va from "../data/assets/expensive.jpg";

const Recommended = ({ handleClick ,productfilter }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button className="all" onClickHandler={handleClick} value="" title="All Products" img={va}/>
          <Button onClickHandler={handleClick} value="Hair Oil" title={"Hair Oil"} />
          <Button onClickHandler={handleClick} value="Face Oil" title="Face Oil" />
         <Button onClickHandler={handleClick} value="BODY Oils" title="BODY Oils" />
         <Button onClickHandler={handleClick} value="baby oil" title="baby oil" />
          
        </div>
      </div>
    </>
  );
};

export default Recommended;
