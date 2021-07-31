import { PinDropSharp } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';

 
const StyledInput = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

`;
const Input = React.forwardRef((props, ref) => {
  return (
   <StyledInput> 
    <label htmlFor={props.input.id}>{props.label}</label>
    <input ref={ref} {...props.input}/>
   </StyledInput>
  )
});

export default Input
