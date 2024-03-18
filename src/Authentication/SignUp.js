import React, { useState } from "react";
import logo from "../visules/imgs/logo.png";
import { Link, useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import {SyncLoader} from "react-spinners"
import { useAuthContext } from "../Context1/AuthUserContext";
import 'primeicons/primeicons.css';
import { useDispatch } from "react-redux";
import { CreateUserAsync } from "./AuthSlice";
        


export default function SignUp() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, set_Confirm_Password] = useState("");
  const [seepassword, set_See_Password] = useState(true);
  const [see_confirm_password, set_See_Confirm_Password] = useState(true);
  const [flag, setFlag] = useState(true);
  const [otp, setOTP] = useState("");
  const [loadig , setLoading] = useState(false)
  const [confirmobj, setConfirmObj] = useState("");
  const dispatch = useDispatch()
  const {reCaptcha} = useAuthContext();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (number === "" || number === undefined) {
      alert("Number is Undefined");
      return ;
    }
    if(password !== confirm_password) {
      alert("Password not match")
      return;
    }
   try{
    setLoading(!loadig)
    const  response =  await reCaptcha(number);
    setConfirmObj(response);
    setFlag(false);
   }
   catch (err){
    
    alert(err.message);
    console.log(err)
    return ;
   }
   
  };

  const handleOTP = async (e) => {
    e.preventDefault();
    if(otp === "" || otp === undefined) {
      alert("undefined OTP");
      return;
    }
    try {
     await confirmobj.confirm(otp);
     dispatch(CreateUserAsync({Phone_Number:number,username:name,password:password}));
     console.log('dispatch was called')
     

    }
    catch (err) {
      alert(err.message)
  }
 
  }

  return (
    <div>
      <div
        className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8"
        style={{ display: flag ? "block" : "none" }}
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-24 w-auto" src={logo} alt="Your Company" />
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create Your Account
          </h2>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
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
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Full Name
              </label>
              <div className="mt-2">
                <input
                  name="name"
                  type="text"
                  required
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
              </div>
              <div  className="mt-1 flex items-center text-gray-900 shadow-sm ring-1 rounded-md">
                <input
                  id="password"
                  name="password"
                  type={seepassword ? "password" : "text"}
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-5/6 rounded-md border-0  "
                />
                {seepassword ? 
                 <div className="pi pi-eye m-auto" style={{fontSize:'1.5rem'}} onClick={()=>set_See_Password(!seepassword)}/> : <div className="pi pi-eye-slash m-auto" style={{fontSize:'1.5rem'}} onClick={()=>set_See_Password(!seepassword)}/>}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="confirm-password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
              </div>
              <div className="mt-1 flex items-center text-gray-900 shadow-sm ring-1 rounded-md">
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type={see_confirm_password ? "password" : "text"}
                  required
                  onChange={(e) => set_Confirm_Password(e.target.value)}
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                  className="block w-5/6 rounded-md border-0 "
                />
                {see_confirm_password ?<div className="pi pi-eye m-auto" style={{fontSize:'1.5rem'}} onClick={()=>set_See_Confirm_Password(!see_confirm_password)}/> : <div className="pi pi-eye-slash m-auto" style={{fontSize:'1.5rem'}} onClick={()=>set_See_Confirm_Password(!see_confirm_password)}/>}
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div id="recaptcha-container" />
              </div>
            <div className="flex justify-center items-center">
              
{!loadig? 
        <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-gray-green px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Verify Phone Number
              </button>:
              <SyncLoader color="#3B606A"/>}
             
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            have a Account?{" "}
            <Link
              to="/login"
              className="font-semibold leading-6 text-gray-green"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Enter OTP Component */}
      <div
        className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
        style={{ display: !flag ? "block" : "none" }}
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-24 w-auto" src={logo} alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Verify your Phone Number
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleOTP}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Enter OTP
              </label>
              <div className="mt-2">
                <input
                  id="otp"
                  name="otp"
                  type="text"
                  onChange={(e) => setOTP(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-gray-green px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create an Account
              </button>
              <SyncLoader color="black"/>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            <Link
              to="/signup"
              className="font-semibold leading-6 text-gray-green"
            >
              Resend OTP
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
