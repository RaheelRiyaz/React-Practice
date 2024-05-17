/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { setError, setTerm } from "../store/AppStore";
import { useState } from "react";
import { setLoading } from "../store/AppStore";
function SearchBox() {
  // eslint-disable-next-line no-unused-vars
  const [word, setWord] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(setLoading(true));
    dispatch(setError(""));
    dispatch(setTerm(word));
    setWord("");
  }
  return (
    <form className="mt-12" onSubmit={handleSubmit}>
      <input
        onChange={(e) => setWord(e.target.value)}
        placeholder="Search word here"
        type="search"
        value={word}
        className="outline-none border border-gray-200 rounded-2xl px-3 py-2 md:w-3/5 w-full block mt-2 m-auto"
      />
    </form>
  );
}

export default SearchBox;
