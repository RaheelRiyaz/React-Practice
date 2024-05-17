import { useParams } from "react-router-dom";

function Github() {
  const { name } = useParams();
  return (
    <div>
      <h1 className="text-center text-success mt-5">
        hello Mr <span className="text-decoration-underline text-primary">{name}</span>
      </h1>
    </div>
  );
}

export default Github;
