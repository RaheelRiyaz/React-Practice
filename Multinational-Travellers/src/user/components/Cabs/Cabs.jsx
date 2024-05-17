import { useEffect, useState } from "react";
import { baseService } from "../../../services/baseservice";
import { HttpStatusCode } from "axios";
import Cab from "../../../shared/components/Cab/Cab";
import Heading from "../../../shared/components/Heading/Heading";

function Cabs() {
  const [cabs, setcabs] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);

  useEffect(() => {
    baseService
      .Fetch("cabs/all-cabs")
      .then((response) => {
        setloading(false);
        if (response.status === HttpStatusCode.Ok) {
          setcabs(response.data.result);
        } else seterror("There is some issue");
      })
      .catch((err) => {
        setloading(false);
        seterror(err.message);
      });
  }, []);

  if (loading) return <p>Loading....</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
    <Heading title={"Our Cabs"}/>
      <div className="flex justify-center items-center gap-5 flex-wrap">
        {cabs &&
          cabs.map((cab) => {
            return <Cab key={cab.cabId} cab={cab} />;
          })}
      </div>
    </>
  );
}

export default Cabs;
