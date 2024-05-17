/* eslint-disable react/prop-types */
// import React from 'react'

import Container from "./Container";
import RecipeeTile from "./RecipeeTile";

// eslint-disable-next-line react/prop-types
function Meals({ meals, loading }) {
  if (loading) return <p className="text-center">Loading</p>;
  if (!meals) return <p className="text-center">No meal found</p>;
  if (meals.length == 0) return <p className="text-center">Please search meal</p>;

  return (
    <Container>
      {meals &&
        meals.map((meal) => <RecipeeTile key={meal.idMeal} meal={meal} />)}
    </Container>
  );
}

export default Meals;
