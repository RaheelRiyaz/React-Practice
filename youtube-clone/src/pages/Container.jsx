// import React from "react";

import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodCard from "../components/FoodCard";
import Button from "../components/Button";
import { setLoading } from "../store/store";

function Container() {
  const { showNavbar, inputValue, loading } = useSelector(
    (store) => store.youtube
  );
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  const btns = ["American", "Indian", "Russian", "Turkish", "Canadian","British"];
  useEffect(() => {
    dispatch(setLoading(true));
    try {
      var res = axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${inputValue}`
      );
      res.then((result) => {
        setItems(result?.data?.meals);
      });
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        dispatch(setLoading(false));
      }, 500);
    }
  }, [dispatch, inputValue]);

  return (
    <div className="flex h-[93.5vh] w-screen bg-red-200">
      <div
        className={`left w-2/12 h-full bg-white ${showNavbar ? "" : "hidden"}`}
      >
        {JSON.stringify(showNavbar)}
      </div>
      <div className="right flex flex-col w-full">
        <div className="top h-20 w-full bg-gray-300 flex items-center">
          {btns && btns.map((btn, i) => <Button key={i} btnText={btn} />)}
        </div>
        <div className="bottom min-h-[94vh] w-full overflow-scroll">
          {loading ? (
            <p>Loading...</p>
          ) : (
            items &&
            items.map((item) => <FoodCard key={item.idMeal} item={item} />)
          )}
        </div>
      </div>
    </div>
  );
}

export default Container;
