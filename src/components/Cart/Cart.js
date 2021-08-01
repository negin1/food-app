
import React, {useContext} from 'react'
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import CartItem from './CartItem';

import styled from 'styled-components';


const Ul  = styled.ul`
    list-style: none;
  margin: 0;
  padding: 0;
  max-height: 20rem;
  overflow: auto;
`;

const Total  = styled.div`
    display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem 0;
`;

const Actions  = styled.div`
    text-align: right;

     button{
         font: inherit;
          cursor: pointer;
          background-color: transparent;
          border: 1px solid #8a2b06;
          padding: 0.5rem 2rem;
          border-radius: 25px;
          margin-left: 1rem;
     }
  
`;

const Cart = props => {

  const cartCtx  = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.lenght > 0;
  
  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = item => {
    cartCtx.addItem({...item, amount: 1})
  };

  const cartItems = (
    <Ul>
     {cartCtx.items.map((item) =>  (
      <CartItem 
        key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        onRemove={cartItemRemoveHandler.bind(null, item.id)}
        onAdd={cartItemAddHandler.bind(null, item)}
      />
     ))}
    </Ul>
  );

  return (
    <>
   <Modal onClose={props.onClose}>
      {cartItems}
      <Total>
        <span>Total Amount</span>
        <span>£{totalAmount}</span>
      </Total>
      <Actions>
        <button onClick={props.onClose}>Close</button>
        
       {hasItems && <button >Order</button>}
      </Actions>
   </Modal>
    </>
  )
}

export default Cart
