import React, { Component } from "react";

const products = [
  {
    name: "Nomad Coffee Temporada",
    qty: 2,
    price: 11,
    SKU: "ES0010001"
  },
  {
    name: "Puchero Coffee Pump Espresso",
    qty: 1,
    price: 10,
    SKU: "ES0020002"
  },
  {
    name: "Bluebell Coffee Mujeres",
    qty: 2,
    price: 10.5,
    SKU: "ES0030003"
  }
];

const Item = props => {
  return (
    <div>
      {props.name} - 
    </div>
  );
};

class Cart extends Component {
  render() {
    return(
      <div>
        <h2>Cart</h2>
        {products.map((product, SKU) => {
          return(
            
            <Item key ={product.SKU} name = {product.name}/>
          )
            
        })
        }
      </div>
    )
  }
}

export default Cart;
