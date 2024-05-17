import { DataContext } from "../context/DataContext";
// import { useData } from "../context/usedata";
import { useContext, useEffect } from "react";
function Profile() {
  
  const {data} = useContext(DataContext);
  useEffect(() => {console.log("Profile hitted");}, [data]);

  return (
    <div>
      <h1>Welcome {data} </h1>
    </div>
  );
}

export default Profile;
