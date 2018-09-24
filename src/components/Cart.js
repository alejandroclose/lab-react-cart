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
    <div className="item">
        <div className="info">
      {props.qty}
    </div>
    <div className="info">
      x
      </div>
    <div className="info">
      {props.name}
    </div>
    <div className="info">
      Price: {props.price.toFixed(2)}€
    </div>
    </div>
  );
};

//Finding the total
const subtotalArr = products.map((product)=>{
  const prices = product.price;
  return prices;
})

const total = subtotalArr.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);


class Cart extends Component {
  render() {
    
    return(
      <div>
        <h2>Cart</h2>
        {products.map((product) => {

          return(
            <Item key ={product.SKU} name = {product.name} qty = {product.qty} price = {product.price}/>
            
            
          )
        })
        
        
        }
        <div>Total: {total.toFixed(2)}€</div>
      </div>
      
    )
  }
  
}
export default Cart;
