import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import validator from "validator";
import Loader from "../components/Loader";
import { useAppContext } from "../context/appContext";

const Auth = () => {
  const navigate = useNavigate();
  const { setupUser ,isLoading} = useAppContext();
  const [authType, setAuthType] = useState("signup");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;
  function onChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  }
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async function onSubmit(e) {
    e.preventDefault();
    try {
      if (!validator.isEmail(email)) {
        toast.error("Please provide correct email");
        return;
      }
      if (password?.length < 8) {
        toast.error("Password must be atleast 8 characters long");
        return;
      }
      if (authType === "signup") {
        setupUser(
          formData,
          "register",
          "Sign Up successfull"
        );
      } else {
        setupUser(
          formData,
          "login",
          "Sign In successfull"
        );
      }
      await sleep(3000)
      navigate("/")
    } catch (error) {
      toast.error("Something Went Wrong");
    }
  }
  const { user } = useAppContext();
  if (user) {
    return <Navigate to="/" />;
  }
  if(isLoading)
  {
    return <Loader/>
  }
  return (
    <section className="flex items-center justify-center h-screen">
      <div className="px-6 py-4 w-[50%] md:mx-0 mx-auto right-auto bottom-auto border border-gray-300 rounded-lg">
        <div className="w-full h-full ">
          <div className="font-medium text-2xl text-center">
            {authType === "signup" ? "Sign Up" : "Sign In"}
          </div>
          <form
            className="flex flex-col items-center w-full mt-2"
            onSubmit={onSubmit}
          >
            {authType === "signup" && (
              <div className="flex flex-col items-center w-full mb-4">
                <label
                  className="text-left w-full text-black text-lg font-medium"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="mt-2 w-full h-10 border border-gray-300 rounded
                transition duration-150 ease-in-out focus:text-gray-700
                 focus:bg-white focus:border-slate-600 p-2"
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  required={true}
                  value={name}
                  onChange={onChange}
                />
              </div>
            )}
            <div className="flex flex-col items-center w-full mb-4">
              <label
                className="text-left w-full text-black text-lg font-medium"
                htmlFor="email"
              >
                Emails
              </label>
              <input
                className="mt-2 w-full h-10 border border-gray-300 rounded
                transition duration-150 ease-in-out focus:text-gray-700
                 focus:bg-white focus:border-slate-600 p-2"
                type="email"
                id="email"
                placeholder="Enter Email Address"
                required={true}
                value={email}
                onChange={onChange}
              />
            </div>
            <div className="relative flex flex-col items-center w-full">
              <label
                className="text-left w-full text-black text-lg font-medium"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className=" mt-2 w-full h-10 border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700
                focus:bg-white focus:border-slate-600 p-2"
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                required={true}
                value={password}
                onChange={onChange}
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-12 text-xl cursor-pointer"
                />
              ) : (
                <AiFillEye
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-12 text-xl cursor-pointer"
                />
              )}
            </div>

            <button
              disabled={isLoading}
              className="mt-8 w-full bg-black text-white px-7 py-3 text-sm 
          font-medium uppercase rounded shadow-md
        hover:bg-gray-700 transition duration-150 
          ease-in-out hover:shadow-lg active:bg-gray-800"
              type="submit"
            >
              {isLoading && (
                <Loader textColor="text-gray-300" loaderColor="fill-black" />
              )}
              {!isLoading && authType === "signup" ? "Sign Up" : "Sign In"}
            </button>

            <div className="mt-4 flex flex-col md:flex-row items-center w-full">
              <div className="flex items-center font-light text-base text-gray-500">
                {authType === "signup" ? "" : "Don't "} Have an account
                <span
                  className="text-black ml-2 font-medium cursor-pointer"
                  onClick={() =>
                    setAuthType((prev) =>
                      prev === "signup" ? "signin" : "signup"
                    )
                  }
                >
                  {authType === "signup" ? "Sign In" : "Sign Up"}
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Auth;
