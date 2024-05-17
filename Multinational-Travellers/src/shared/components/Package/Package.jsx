/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { NavLink } from "react-router-dom";
import { environment } from "../../../environments/environment";
function Package({ p }) {
  const basePath = environment.imageUrl;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
      <a >
        <img
          className="rounded-t-lg w-full"
          src={basePath + p.files[0].filePath}
          alt=""
        />
      </a>
      <div className="p-5">
        <a >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {p?.packageResponse?.name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {p?.packageResponse?.description}
        </p>
        <NavLink
          to={`/packages/details/${p?.packageResponse.id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </NavLink>
      </div>
    </div>
  );
}

export default Package;
