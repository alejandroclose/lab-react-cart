import React, { Component } from "react";
import Item from './Item'

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
    qty: 4,
    price: 10.5,
    SKU: "ES0030003"
  }
];

// const onDecrement = handleDecrement(props)
// console.log(onDecrement);

//Finding the total
const subtotalArr = products.map(product => {
  const prices = product.price * product.qty;
  return prices;
});

const total = subtotalArr.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

class Cart extends Component {
  
  state = {
    products,
    total: 0
  };

  handleIncrement = () => {
    console.log(this.state.products)
    console.log()


    this.setState({
      total: this.state.products
    })
  }

  //  handleDecrement = () =>{
  //   console.log('handleDecrement')
  // }

  render() {
    return (
      <div>
        <h2>Cart</h2>
        {products.map((product) => {
          return (
            <Item
              key={product.SKU}
              name={product.name}
              qty={product.qty}
              price={product.price}
              onIncrement={this.handleIncrement}
              onDecrement = {this.handleDecrement}
            />
          );
        })}
        <br />
        <div>Total: {total.toFixed(2)}€</div>
      </div>
    );
  }
}
export default Cart;
