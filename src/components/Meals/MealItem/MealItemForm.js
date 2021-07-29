
import React from 'react'

import styled from 'styled-components';


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
const MealItemForm = prop => {
  return (
    <Form>
      <input />
      <button> + Add</button>

    
    </Form>
  )
}

export default MealItemForm
