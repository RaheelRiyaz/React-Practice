import { useForm } from "react-hook-form";
import InputBox from "../../shared/components/Input";
import { baseService } from "../../services/baseservice";
import { HttpStatusCode } from "axios";
import { useNavigate } from "react-router-dom";
import { environment } from "../../environments/environment";

function Login() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();
  const navigateTo = useNavigate();


  function handleForm(data) {
    baseService.Post("users/login", data).then((res) => {
      if (res.data.statusCode === HttpStatusCode.Ok) {
        const { token } = res.data.result;
        localStorage.setItem(environment.tokenName, token);
        navigateTo("/admin");
      } else {
        setError("invalidCredentials",{message:"Invalid Credentials"});
      }
    });
  }

  return (
    <div className="form w-52 h-44 flex justify-center items-center bg-red-400">
      {isSubmitting && <p>Loading ..</p>}
      <form className="w-full" onSubmit={handleSubmit(handleForm)}>
        <div className="mb-5">
          <InputBox
            placeHolder="Username or email"
            classes="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("email", {
              required: {
                value: true,
                message: "Username is required",
              },
            })}
          />
          {errors.userName && <p>{errors.userName.message}</p>}
        </div>
        <div className="mb-5">
          <InputBox
            type="password"
            placeHolder="password"
            classes="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        {errors.invalidCredentials && (
          <p>{errors.invalidCredentials.message}</p>
        )}
        <button
          type="submit"
          className="bg-teal-500 w-32 p-2 rounded-lg m-auto"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
