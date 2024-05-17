/* eslint-disable no-unused-vars */
import { forwardRef } from "react";

/* eslint-disable react/prop-types */
function Input({ type = "text", placeholder, classes, name, ...props }, ref) {
  return (
    <input
      type={type}
      ref={ref}
      placeholder={placeholder}
      className={classes}
      name={name}
      {...props}
    />
  );
}
export const InputBox = forwardRef(Input);
