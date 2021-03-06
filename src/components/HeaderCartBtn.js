import React, {useContext} from 'react'

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import  CartContext from '../store/cart-context';
import styled, {keyframes,} from 'styled-components';

const bump = keyframes`
  0% {transform: scale(1);}
  10% { transform: scale(0.9);}
  30% {transform: scale(1.1);}
  50% {transform: scale(1.15);}
  100% {transform: scale(1);}
`

const Button  = styled.button`
   cursor: pointer;
  font: inherit;
  border: none;
  background-color: #4d1601;
  color: white;
  padding: 0.75rem 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;
  animation: ${bump} 1s linear;

  &:hover {
    background-color: #2c0d00;
  }
  
  &:active{
    background-color: #2c0d00;
  }

  span{
    font-weight: bold;
    &:nth-of-type(1){
      width: 1.35rem;
      height: 1.35rem;
      margin-right: 0.5rem;
  };
  
  &:nth-of-type(3){
     background-color: #b94517;
    padding: 0.25rem 1rem;
    border-radius: 25px;
    margin-left: 1rem;
    font-weight: bold;
  }
}
`;

const HeaderCartBtn = (props) => {
  const cartCtx = useContext(CartContext)

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  },0);

  return (
       <Button onClick={props.onClick} animate={bump}>
          <span><ShoppingCartOutlinedIcon/></span>
          <span>Your Cart</span>
          <span>{numberOfCartItems}</span>
    </Button>
  )
}

export default HeaderCartBtn
