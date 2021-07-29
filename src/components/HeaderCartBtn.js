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

const SpanOne  = styled.span`
 width: 1.35rem;
  height: 1.35rem;
  margin-right: 0.5rem;

`;

const SpanTwo  = styled.span`
 

`;

const SpanThree  = styled.span`
 
  background-color: #b94517;
  padding: 0.25rem 1rem;
  border-radius: 25px;
  margin-left: 1rem;
  font-weight: bold;

`;

const HeaderCartBtn = () => {
  return (
       <Button>
          <SpanOne><ShoppingCartOutlinedIcon/></SpanOne>
          <SpanTwo>Your Chart</SpanTwo>
          <SpanThree>3</SpanThree>
    </Button>
  )
}

export default HeaderCartBtn
