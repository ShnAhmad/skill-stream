import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { login as authLogin } from "../store/authSlice";
import Logo from "../components/Logo";
import Input from "../components/Input";
import Button from "../components/Button";
import authService from "../appwrite/auth";
import AccountTabs from "../components/AccountTab";

function Login() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = (data) => {
    setError("");
    authService
      .login(data)
      .then((session) => {
        if (session) {
          authService.getCurrentUser().then((user) => {
            dispatch(authLogin({ user }));
            navigate("/");
          });
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="w-full h-full">
    <div className="container mx-auto max-w-[1276px]">
      <div
        className="flex flex-col items-center w-full px-4 md:px-6 py-12 md:py-16 lg:py-24"
      >
        <div className="w-full max-w-[756px]">
        <AccountTabs/>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className="mt-8 flex flex-col items-start gap-4 md:gap-5 self-stretch">
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />
            <Button type="submit" className="w-full">
              Sign in
            </Button>
        </form>
      </div>
            </div>

    </div>
    </div>
  );
}

export default Login;
