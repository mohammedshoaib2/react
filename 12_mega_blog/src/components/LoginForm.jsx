import React, { useState } from "react";
import authService from "../appwrite/AuthService";
import { useDispatch } from "react-redux";
import { logIn, logOut } from "../../features/authSlice";
import { useForm } from "react-hook-form";
import { InputComponent, Button } from "../components/index";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const loginHandler = async (data) => {
    setError("");
    setLoader(true);
    console.log(data);
    try {
      const userData = await authService.login(data);
      if (userData) {
        dispatch(logIn({ userData: data }));
        setError("");
        setLoader(false);
        navigate("/");
      }
    } catch (error) {
      dispatch(logOut());
      setLoader(false);
      setError(String(error.message));
    }
  };
  return (
    <form
      onSubmit={handleSubmit(loginHandler)}
      className="flex flex-col justify-center w-1/4 px-10 py-12 bg-gray-50 rounded-lg gap-5 mx-auto my-auto shadow-slate-400 shadow-lg"
    >
      <h2 className="text-xl font-semibold text-center">Login Here</h2>
      <p className="-mt-2 text-center text-gray-500">
        Hey, Enter your details to login
      </p>
      <InputComponent
        type="email"
        placeholder="Email"
        {...register("email", { required: true })}
      />
      <InputComponent
        type="password"
        placeholder="Password"
        {...register("password", { required: true })}
      />
      <Button loader={loader}>Submit</Button>
      <p className="text-red-500 text-center">{error}</p>
    </form>
  );
}

export default LoginForm;
