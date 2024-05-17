// import React from 'react'

// eslint-disable-next-line react/prop-types
function SearchBox({ searchVal, setSearchVal, submitForm, ...props }) {
  return (
    <form
      onSubmit={submitForm}
      className="mx-auto mt-5"
      style={{ width: "300px" }}
    >
      <input
        type="text"
        value={searchVal}
        {...props}
        onChange={(e) => setSearchVal(e.target.value)}
      />
    </form>
  );
}

export default SearchBox;
