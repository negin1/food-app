import React from 'react'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import styled from 'styled-components';

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
  return (
       <Button onClick={props.onClick}>
          <span><ShoppingCartOutlinedIcon/></span>
          <span>Your Cart</span>
          <span>3</span>
    </Button>
  )
}

export default HeaderCartBtn
