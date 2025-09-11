import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { login } from "../store/authSlice";
import authService from "../appwrite/auth";
import Logo from "../components/Logo";
import Input from "../components/Input";
import Button from "../components/Button";
import AccountTabs from "../components/AccountTab";

function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError("");
    try {
      const session = await authService.createAccount(data);
      if (session) {
        const user = await authService.getCurrentUser();
        if (user) dispatch(login(user));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-full h-full">
      <div className="container mx-auto max-w-[1276px]">
        <div className="flex flex-col items-center w-full px-4 md:px-6 py-12 md:py-16 lg:py-24">
          <div className="w-full max-w-[756px]">
            <AccountTabs />
          {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
            <form onSubmit={handleSubmit(create)}>
              <div className="mt-8 flex flex-col items-start gap-4 md:gap-5 self-stretch">
                <Input
                  label="Full Name: "
                  placeholder="Enter your full name"
                  {...register("name", {
                    required: true,
                  })}
                />
                <Input
                  label="Email: "
                  placeholder="Enter your email"
                  type="email"
                  {...register("email", {
                    required: true,
                    validate: {
                      matchPatern: (value) =>
                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                          value
                        ) || "Email address must be a valid address",
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
                  Create Account
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
