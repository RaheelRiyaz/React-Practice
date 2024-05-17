/* eslint-disable react/prop-types */

import { forwardRef } from "react"

function Input({type="text",placeHolder ,classes,...props},ref) {
  return (
   <input type={type} placeholder={placeHolder} className={classes} ref={ref} {...props} />
  )
}

const InputBox = forwardRef(Input);
export default InputBox;
