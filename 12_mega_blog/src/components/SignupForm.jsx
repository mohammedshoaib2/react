import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { InputComponent, Button } from "../components/index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/AuthService";
import { useNavigate } from "react-router-dom";
import { logIn, logOut } from "../../features/authSlice";

function SignupForm() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = async (userData) => {
    try {
      setLoader(true);
      const userAccountData = await authService.createAccount(userData);
      dispatch(logIn({ userData: userAccountData }));
      navigate("/");
    } catch (error) {
      setLoader(false);
      dispatch(logOut());
      setError(error.message.toString());
    }
  };
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex flex-col justify-center mt-10 w-1/4 px-10 py-12 bg-gray-50 rounded-lg gap-5 mx-auto my-auto shadow-slate-400 shadow-lg"
    >
      <h2 className="text-xl font-semibold text-center">Signup Here</h2>
      <p className="-mt-2 text-center text-gray-500">
        Hey, Enter yout details to get signup
      </p>
      <InputComponent
        placeholder="Full Name"
        {...register("name", {
          required: true,
        })}
      />
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

export default SignupForm;
