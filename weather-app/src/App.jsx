/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setError, setLoading, setResult, setTerm } from "./store/AppStore";
import { MainContainer } from "./components/MainContainer.jsx";
import Header from "./components/Navbar.jsx";

function App() {
  const { term } = useSelector((store) => store.weather);
  const dispatch = useDispatch();

  useEffect(() => {
    if (term) {
      const response = axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${term}`
      );
      response
        .then((result) => {
          dispatch(setResult(result.data[0]));
        })
        .catch((error) => {
          dispatch(setError(error.message));
          dispatch(setResult([]));
        })
        .finally((_) => {
          dispatch(setLoading(false));
          dispatch(setTerm(""));
        });
    }
  }, [term, dispatch]);

  return (
    <>
      <Header />
      <MainContainer />
    </>
  );
}

export default App;
