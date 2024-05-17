import { useState, useEffect } from "react";
import Heading from "../../shared/components/Heading/Heading";
import { baseService } from "../../services/baseservice";
import { HttpStatusCode } from "axios";
import Avatar from "react-avatar";
import { environment } from "../../environments/environment";
import LinkButton from "../components/LinkButton";
function Packages() {
  const [packages, setpackages] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [error, seterror] = useState("");

  function handleStatus(e) {
    console.log(e.target);
    e.target.checked=false
  }
  useEffect(() => {
    baseService
      .Fetch("packages/all-packages")
      .then((res) => {
        setisLoading(false);
        if (res.status === HttpStatusCode.Ok) {
          setpackages(res.data.result);
        }
      })
      .catch((err) => {
        setisLoading(false);
        seterror(err.message);
      });
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <Heading title="Our Packages" />
      <LinkButton
        btnText={"Add Package +"}
        route={"add"}
        classes={
          "bg-gray-100 text-sm hover:bg-gray-200 rounded-lg p-2 my-5 mx-2"
        }
      />

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-3">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Avatar
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Day
              </th>
              <th scope="col" className="px-6 py-3">
                Nights
              </th>

              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {packages &&
              packages.map((p) => {
                return (
                  <tr
                    key={p?.id}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <td className="px-6 py-4">
                      <Avatar
                        round={true}
                        className="object-cover"
                        src={environment.imageUrl + p?.files[0]?.filePath}
                      />
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {p?.name}
                    </th>
                    <td className="px-6 py-4">{p?.days}</td>
                    <td className="px-6 py-4">{p?.nights}</td>
                    <td className="px-6 py-4">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "INR",
                      }).format(p.startingPrice)}
                    </td>
                    <td className="px-6 py-4">
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          onChange={handleStatus}
                          className="sr-only peer"
                          value={p?.isActive}
                          checked={p?.isActive}
                        />
                        <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Packages;
