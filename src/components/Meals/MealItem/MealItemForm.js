
import React from 'react'

import styled from 'styled-components';
import Input from '../../UI/Input';


const Form = styled.form`
    text-align: right;

    button {
   
  font: inherit;
  cursor: pointer;
  background-color: #8a2b06;
  border: 1px solid #8a2b06;
  color: white;
  padding: 0.25rem 2rem;
  border-radius: 20px;
  font-weight: bold;
}
`;
const MealItemForm = props => {
  return (
    <Form>
    <Input lable='Amount'
       input={{
        id: 'amount',
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1',
      }} 
    /> 
      <button> + Add</button>
    
    </Form>
  )
}

export default MealItemForm
