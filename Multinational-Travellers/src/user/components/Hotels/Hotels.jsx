/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Heading from "../../../shared/components/Heading/Heading";
import { baseService } from "../../../services/baseservice";
import { HttpStatusCode } from "axios";
import Hotel from "../../../shared/components/Hotel/Hotel";
import LoadMoreButton from "../../../shared/components/LoadButton/LoadMoreButton";
import PackageSkelton from "../../../shared/components/Package/PackageSkelton";

function Hotels() {
  const [hotels, sethotels] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("");
  const [empty, setempty] = useState(false);
  const [pageNo, setpageNo] = useState(1);
  const pageSize = 1;

  useEffect(() => {
    baseService
      .Fetch(`hotels/hotels-pagewize/${pageNo}/${pageSize}`)
      .then((res) => {
        setloading(false);
        if (res.status === HttpStatusCode.Ok) {
          if (res.data.result.length === 0) {
            setempty(true);
            return;
          }

          sethotels((_) => [..._, ...res.data.result]);
        } else seterror("There is some issue");
      })
      .catch((err) => {
        setloading(false);
        seterror(err.message);
      });
  }, [pageSize, pageNo]);

  function handleLoadMore() {
    setpageNo(pageNo + 1);
  }

  if (loading)
    return (
      <div className="flex justify-center items-center flex-wrap gap-5">
        {Array(2)
          .fill(0)
          .map((_, i) => (
            <PackageSkelton key={i} />
          ))}
      </div>
    );
  if (error) return <p>{error}</p>;

  return (
    <>
      <Heading title={"Our Hotels"} />
      <div className="flex justify-center items-center gap-5 flex-wrap">
        {hotels &&
          hotels.map((hotel) => {
            return <Hotel key={hotel.hotelId} hotel={hotel} />;
          })}
      </div>
      <div className="flex justify-center items-center mt-3">
        {empty ? (
          <p className="text-red-400">No more hotel found</p>
        ) : (
          <LoadMoreButton
            btntext="Load More hotels"
            btnHandler={handleLoadMore}
          />
        )}
      </div>
    </>
  );
}

export default Hotels;
