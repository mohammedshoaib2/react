import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { InputComponent, Button } from "../components/index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/AuthService";
import { useNavigate } from "react-router-dom";
import { logIn } from "../../features/authSlice";

function SignupForm() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = async (userData) => {
    try {
      const userAccountData = await authService.createAccount(userData);
      dispatch(logIn({ userData: userAccountData }));
      navigate("/");
    } catch (error) {
      setError(error.message.toString());
    }
  };
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex flex-col justify-center w-1/4 px-10 py-12 bg-white rounded-lg gap-5"
    >
      <h2 className="text-xl font-semibold text-center">Signup Here</h2>
      <p className="mt-2 text-center">Hey, Enter yout details to get signup</p>
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
      <Button>Submit</Button>
      <p className="text-red-500 text-center">{error}</p>
    </form>
  );
}

export default SignupForm;
