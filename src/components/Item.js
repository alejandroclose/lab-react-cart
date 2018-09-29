import React from "react";

const Item = props => {
  return (
    <div className="item">
      <div className="qty-buttons">
        <button
          onClick= {props.onIncrement}
        >
          +
        </button>
        <button
          // onClick={props.onDecrement}
          onClick={()=>{
            this.onDecrement(props)
          }}
        >
          -
        </button>
      </div>
      <div className="info">{props.qty}</div>
      <div className="info">x</div>
      <div className="info">{props.name}</div>
      <div className="info">Price: {props.price.toFixed(2)}€</div>
    </div>
  );
};


export default Item;