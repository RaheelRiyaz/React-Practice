/* eslint-disable react/prop-types */
function LoadMoreButton({ btntext = "Load", btnHandler, isDisabled = false }) {
  return (
    <button
      onClick={btnHandler}
      disabled={isDisabled}
      type="button"
      className="text-black shadow-xl bg-gray-300 hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
    >
      {btntext}
    </button>
  );
}

export default LoadMoreButton;
