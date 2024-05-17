/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

function LinkButton({ btnText, route, classes }) {
  return (
    <Link to={route} className={classes}>
      {btnText}
    </Link>
  );
}

export default LinkButton;
