import { useForm } from "react-hook-form";
import "./App.css";
import Input from "./components/Input";

function App() {
  const { register, handleSubmit } = useForm();

  function signup(data) {
    console.log(data);
  }
  return (
    <>
      <form onSubmit={handleSubmit(signup)}>
        <Input
          placeholder={"Username"}
          {...register("userName", {
            required: true,
          })}
        />
        <Input
          placeholder={"Email"}
          {...register("email", {
            required: true,
          })}
        />
        <Input
          placeholder={"Password"}
          {...register("password", {
            required: true,
          })}
        />
        <button type="submit">Signup</button>
      </form>
    </>
  );
}

export default App;
