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

`;

const HeaderCartBtn = () => {
  return (
       <Button>
          <span><ShoppingCartOutlinedIcon/></span>
          <span>Your Chart</span>
          <span>3</span>
    </Button>
  )
}

export default HeaderCartBtn
