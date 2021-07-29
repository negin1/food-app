
import React from 'react'


const Cart = () => {

  const cartitems = <ul>{[
    { id:'c1', name: 'Joojeh Kabab', amount: 2, price: 7.99},
    ].map((item) => <li>{item.name}</li>)}</ul>;

  return (
    <>
      {cartitems}
      <div>
        <span>Totla amount</span>
        <span>32,62</span>
      </div>
      <div>
        <button>Close</button>
      </div>
      
    </>
  )
}

export default Cart
