/* eslint-disable react/prop-types */

function Container({ children }) {
  return (
    <div className="d-flex justify-content-evenly p-3 items-center flex-wrap">
      {children}
    </div>
  );
}

export default Container;
