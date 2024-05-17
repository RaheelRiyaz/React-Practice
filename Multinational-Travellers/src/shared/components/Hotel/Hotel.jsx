/* eslint-disable react/prop-types */
import { environment } from "../../../environments/environment";

function Hotel({ hotel }) {
  const basePath = environment.imageUrl;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
      <a>
        <img
          className="rounded-t-lg w-full"
          src={basePath + hotel?.filePath}
          alt=""
        />
      </a>
      <div className="p-5">
        <a>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {hotel?.name}
          </h5>
        </a>
        <div className="stars flex justify-start gap-2 my-2">
          {Array(hotel.stars)
            .fill(0)
            .map((_, i) => (
              <i key={i} className="text-yellow-400 fa-solid fa-star"></i>
            ))}
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {hotel?.description}
        </p>
      </div>
    </div>
  );
}

export default Hotel;
