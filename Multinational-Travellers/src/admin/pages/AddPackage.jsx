// import React from 'react'

import { useForm } from "react-hook-form";
import { InputBox } from "../components/Input";

function AddPackage() {
  const { register, handleSubmit } = useForm();

  function handleForm(data) {
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <InputBox
        placeholder={"Package name"}
        name="name"
        classes={"border border-gray-100 p-2 rounded-lg m-2 outline-none"}
        {...register("name", {
          required: true,
        })}
      />
      <InputBox
        placeholder={"Days"}
        {...register("days", {
          required: true,
        })}
        classes={"border border-gray-100 p-2 rounded-lg m-2 outline-none"}
        type="number"
        name="days"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddPackage;
