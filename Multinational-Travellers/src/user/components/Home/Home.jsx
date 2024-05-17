import Cabs from "../Cabs/Cabs";
import Hotels from "../Hotels/Hotels";
import PackagesComponent from "../Packages/Packages";
import Slider from "../Slider/Slider";

function Home() {
  return (
    <>
      <Slider />
      <PackagesComponent/>
      <Hotels />
      <Cabs />
    </>
  );
}

export default Home;
