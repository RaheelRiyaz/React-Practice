/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { baseService } from "../../../services/baseservice";
import Package from "../../../shared/components/Package/Package";
import PackageSkelton from "../../../shared/components/Package/PackageSkelton";
import LoadMoreButton from "../../../shared/components/LoadButton/LoadMoreButton";
import Heading from "../../../shared/components/Heading/Heading";
import { HttpStatusCode } from "axios";

function PackagesComponent() {
  const [page, setpage] = useState(1);
  const [pageSize, setpageSize] = useState(1);
  const [laoding, setlaoding] = useState(true);
  const [packages, setpackages] = useState([]);
  const [isEmpty, setisEmpty] = useState(false);

  useEffect(() => {
    const res = baseService
      .Fetch(`packages/display-packages/pagewize/${page}/${pageSize}`)
      .then((response) => {
        setlaoding(false);
        if (response.status === HttpStatusCode.Ok) {
          if (response.data.result.length === 0) {
            setisEmpty(true);
            return;
          }
          setpackages((_) => [..._, ...response.data.result]);
        }
      })
      .catch((err) => {
        setlaoding(false);
      });
  }, [page, pageSize]);

  function handleLoadMore() {
    setpage((_) => _ + 1);
  }

  if (laoding)
    return (
      <div className="flex justify-center items-center gap-5 flex-wrap">
        {Array(3)
          .fill(0)
          .map((_, i) => {
            return <PackageSkelton key={i} />;
          })}
      </div>
    );

  return (
    <>
      <Heading title={"Our Packages"} />
      <div className="flex justify-center items-center gap-5 flex-wrap">
        {packages &&
          packages.map((p, i) => {
            return <Package key={i} p={p} />;
          })}

        <div className="d-block w-full flex justify-center items-center">
          {isEmpty ? (
            <p className="text-red-400 text-center">No more package found</p>
          ) : (
            <LoadMoreButton
              btntext="Load More Packages"
              btnHandler={handleLoadMore}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default PackagesComponent;
