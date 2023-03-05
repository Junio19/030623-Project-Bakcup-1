import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";
// import { buyIceCream } from "../redux";

const IceCreamContainer = ({ numOfIceCream, buyIceCream }) => {
  //   const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  //   const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of Ice Cream - {numOfIceCream}</h2>
      <button onClick={buyIceCream}>Buy Ice Cream</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
