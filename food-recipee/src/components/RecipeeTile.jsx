import { useDispatch } from "react-redux";
import { addToFavs } from "../store/MealStore";

/* eslint-disable react/prop-types */
function RecipeeTile({ meal }) {
  const dispatch = useDispatch();
  return (
    <div className="card" style={{ width: "20rem" }}>
      <img src={meal.strMealThumb} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{meal.strMeal}</h5>
        <p className="card-text">{meal.strInstructions}</p>
        <a
          target="_blank"
          href={meal.strYoutube}
          className="btn btn-primary"
          rel="noreferrer"
        >
          View on youtube
        </a>
        <button onClick={() => dispatch(addToFavs(meal))}>Add to favs</button>
      </div>
    </div>
  );
}

export default RecipeeTile;
