import React, { useContext }  from 'react'
import CartContext from '../../../store/cart-context';

import styled from 'styled-components';
import MealItemForm from './MealItemForm';

const Meal = styled.div`
 display: flex;
 flex-direction: column;
  justify-content: space-between;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;

  h2 {
  margin: 0 0 0.25rem 0;
}

h3 {
  font-style: italic;
}
p{
  margin-top: 0.25rem;
  font-weight: bold;
  color: #ad5502;
  font-size: 1.25rem;
}

`;

const MealItem = props => {
    const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };

  return (
    <li>
      <Meal>
        <div>
          <h2>{props.name}</h2>
          <h3>{props.description}</h3>
          <p>£ {props.price}</p>
        </div>
          <div><MealItemForm onAddToCart={addToCartHandler}/>
        </div>
      </Meal>
    
    </li>

  )
}

export default MealItem
