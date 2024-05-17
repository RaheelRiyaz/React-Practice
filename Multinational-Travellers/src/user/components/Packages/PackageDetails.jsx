/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseService } from "../../../services/baseservice";
import { HttpStatusCode } from "axios";
import { initFlowbite } from "flowbite";


function PackageDetails() {
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);
  const [inclusions, setinclusions] = useState([]);
  const [exclusions, setexclusions] = useState([]);
  const [itineraries, setitineraries] = useState([]);
  const [costing, setcosting] = useState([]);
  const [pack, setpack] = useState({});
  const [files, setfiles] = useState([]);
  const [destinations, setdestinations] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    baseService
      .Find(`packages/compactpackage/${id}`)
      .then((res) => {
        setloading(false);
        console.log(res);
        if (res.status === HttpStatusCode.Ok) {
          const {
            inclusions,
            exclusions,
            itineraries,
            destinationWithHotels,
            files,
            package: packageData,
          } = res.data.result;

          setexclusions(exclusions);
          setinclusions(inclusions);
          setitineraries(itineraries);
          setfiles(files);
          setdestinations(destinationWithHotels);
          setpack(packageData);
        } else seterror("There is some issue");
      })
      .catch((err) => {
        seterror(err.message);
        setloading(false);
      });
    initFlowbite();
  }, [id]);

  if (loading) return <p className="text-center text-blue-600">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="details">
      <div id="accordion-collapse" data-accordion="collapse">
        {itineraries.map((_) => {
          return (
            <div key={_.id}>
              <h2 id={`accordion-collapse-heading-${_.id}`}>
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                  data-accordion-target={`#accordion-collapse-body-${_.id}`}
                  aria-expanded="true"
                  aria-controls={`accordion-collapse-body-${_.id}`}
                >
                  <span>{_.title}</span>
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id={`accordion-collapse-body-${_.id}`}
                className="hidden p-2"
                aria-labelledby={`accordion-collapse-heading-${_.id}`}
              >
                {_.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PackageDetails;
