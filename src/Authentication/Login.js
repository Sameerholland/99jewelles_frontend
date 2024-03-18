import React, { useState } from "react";
import { useDispatch } from "react-redux";
import logo from "../visules/imgs/logo.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "primeicons/primeicons.css";
import "react-phone-number-input/style.css";
import { LoginuserAsync } from "./AuthSlice";

export default function Login() {
  const [seepassword, setSeePassword] = useState(false);
  const [number, setNumber] = useState("");
  const [password, SetPassword] = useState("");
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(LoginuserAsync({ Phone_Number: number, password: password }));
    Navigate('/')
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-24 w-auto" src={logo} alt="Your Company" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Phone Number
            </label>
            <div className="mt-2">
              <PhoneInput
                defaultCountry="IN"
                value={number}
                onChange={setNumber}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2 flex items-center rounded-md border-0  text-gray-900 shadow-sm ring-1  ">
              <input
                id="password"
                name="password"
                type={!seepassword ? "password" : "text"}
                autoComplete="current-password"
                required
                onChange={(e) => {
                  SetPassword(e.target.value);
                }}
                className="block w-5/6 rounded-md border-0  "
              />
              {!seepassword ? (
                <div
                  className="pi pi-eye m-auto"
                  style={{ fontSize: "1.5rem" }}
                  onClick={() => setSeePassword(!seepassword)}
                />
              ) : (
                <div
                  className="pi pi-eye-slash m-auto"
                  style={{ fontSize: "1.5rem" }}
                  onClick={() => setSeePassword(!seepassword)}
                />
              )}
            </div>
          </div>

          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-gray-green px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a Account?{" "}
          <Link
            to="/signup"
            className="font-semibold leading-6 text-gray-green"
          >
            Create an Account
          </Link>
        </p>
      </div>
    </div>
  );
}
