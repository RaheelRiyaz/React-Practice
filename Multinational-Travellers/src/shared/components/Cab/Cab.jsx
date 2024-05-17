/* eslint-disable react/prop-types */
import { environment } from "../../../environments/environment";

function Cab({ cab }) {
  const basePath = environment.imageUrl;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
      <a>
        <img
          className="rounded-t-lg w-full"
          src={basePath + cab?.filePath}
          alt=""
        />
      </a>
      <div className="p-5">
        <a className="flex justify-between items-center">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {cab?.name}
          </h5>
          <span className="inline-flex h-7 w-7 rounded-full bg-blue-400 text-white shadow-lg justify-center items-center p-2 text-xs">{cab?.cabType}</span>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {cab?.description}
        </p>
      </div>
    </div>
  );
}

export default Cab;
