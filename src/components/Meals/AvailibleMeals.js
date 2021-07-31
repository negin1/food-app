import React from 'react'

import styled from 'styled-components';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';


const Section = styled.div`
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
  animation: meals-appear 1s ease-out forwards;
  
   ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
  

  
`;

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Joojeh Kabab',
    description: 'Chicken pieces marinaded in saffron.',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Koobideh Kebab',
    description: 'Juicy ground beef, Basmati Rice Served with Saffron & Grilled Tomato',
    price: 18.99,
  },
  {
    id: 'm3',
    name: 'Ghormeh sabzi',
    description: 'Persian Herb Stew',
    price: 16.5,
  },
  {
    id: 'm4',
    name: 'Gheime',
    description: 'Stew consisting of mutton, tomatoes, split peas, onion and dried lim',
    price: 12.99,
  },
  
];

const AvailibleMeals = () => {
  const mealsList = DUMMY_MEALS.map(meal => <MealItem 
    key={meal.id}
    id={meal.id}
    name={meal.name}
    description={meal.description}
    price={meal.price}
    />);
  return (
   
    <Section>
      <Card>
        <ul>
          {mealsList}
        </ul>
      </Card>
    </Section>
    
  )
}

export default AvailibleMeals
