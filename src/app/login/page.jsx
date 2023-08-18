"use client"

import SocialLogin from "@/components/SocialLogin";
import createJWT from "@/createJWT";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const LoginPage = () => {
  const {signIn} = useAuth();
  const search = useSearchParams();
  const from = search.get("redirectUrl") || "/";
  const {replace} = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    console.log(data);
    const {email, password} = data;
    const toastId = toast.loading("Loading...")
    try {
      await signIn(email, password);
      await createJWT({email})
      toast.dismiss(toastId);
      toast.success("user signed in successfully")
      replace(from);
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error.message ||"user not signed in")
    }
  };
  
  return (
    <div className="flex justify-evenly flex-col md:flex-row items-center h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="w-full max-w-sm bg-white p-8 shadow-md rounded-md">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              }}
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  className={`w-full px-3 py-2 border rounded-md ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:border-purple-500`}
                />
              )}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{ required: "Password is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="password"
                  className={`w-full px-3 py-2 border rounded-md ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:border-purple-500`}
                />
              )}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className={`w-full bg-purple-500 text-white py-2 rounded-md
            }`}
          >
            Login
          </button>
          <p className="mt-2">
            New here!{" "}
            <Link className="btn-link" href={"/register"}>
              Create an Account
            </Link>
          </p>
        </form>
        <div className="mt-10">
        <div className="divider">OR</div>
        <SocialLogin/>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
