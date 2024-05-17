import "./App.css";
import { useSelector } from "react-redux";
import SearchBox from "./components/SearchBox";
import Meals from "./components/Meals";
import { useState } from "react";

function App() {
  const [searchVal, setSearchVal] = useState("");
  const { favMeals } = useSelector((state) => state); // Remove ".favMeals" from here
  const [loading, setLoading] = useState(false);

  const [meals, setMeals] = useState([]);

  async function submitForm(e) {
    e.preventDefault();
    if (!searchVal) return alert("Please fill the field");
    setLoading(true);
    (
      await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchVal}`
      )
    )
      .json()
      .then((res) => {
        setMeals(res.meals);
        setSearchVal("");
      })
      .finally(() => {
        setLoading(false);
      });
  }
  return (
    <>
      <h1>Favourites: {favMeals.length}</h1>
      <SearchBox
        searchVal={searchVal}
        setSearchVal={setSearchVal}
        submitForm={submitForm}
      />
      <Meals meals={meals} loading={loading} />
    </>
  );
}

export default App;
