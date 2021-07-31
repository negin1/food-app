
import React, {useRef, useState} from 'react'

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
const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <Form onSubmit={submitHandler}>
    <Input
      ref={amountInputRef}
       lable='Amount'
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
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p> }
    
    </Form>
  )
}

export default MealItemForm
