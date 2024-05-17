import { useEffect, useState } from "react";
import { baseService } from "../../../services/baseservice";
function Slider() {
  const [slides, setslides] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [error, seterror] = useState("");

  
  useEffect(() => {
    const res = baseService.Fetch("slider/active-slides");
    res
      .then((response) => {
        console.log(response.data);
        setslides(response.data.result);
        setisLoading(false);
      })
      .catch((_) => {
        seterror(_.message);
        setisLoading(false);
      });
  }, []);

  if (isLoading) return <p className="text-center">Loading .....</p>;

  if (error) return <p>{error}</p>;
  return (
    <div>
      {slides &&
        slides.map((slide,index) => {
          return <div key={slide.id}>slide {index+1}</div>;
        })}
    </div>
  );
}

export default Slider;
