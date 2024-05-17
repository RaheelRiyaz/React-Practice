/* eslint-disable react/prop-types */
import { forwardRef } from "react";
// eslint-disable-next-line react/display-name
const Input = forwardRef(
    ({ type = "text", placeholder, ...props }, ref) => {
  return <input type={type} placeholder={placeholder} ref={ref} {...props} />;
});

export default Input;
