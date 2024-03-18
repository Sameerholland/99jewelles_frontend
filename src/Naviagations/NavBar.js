import React from "react";
import logo from "../visules/imgs/logo.png";
import { Link } from "react-router-dom";
import '../css/main.css';

export default function NavBar() {
  return (
    <div className="flex justify-between px-10 bg-white h-24 mb-2">
      <div className="flex justify-evenly gap-6 items-center inter text-base font-medium text-gray-green">
        <div>
          <img src={logo} alt="LOGO" />
        </div>
        <div>
          <Link to='/'>Home</Link>
        </div>
        <div>
          {" "}
          <Link to='/products'>Products</Link>
        </div>
        <div>
          {" "}
          <Link to='/jewellery'>Jewelles</Link>
        </div>
      </div>
      <div className=" flex items-center athiti-semibold text-3xl text-gray-green">
        <Link to='/'>99Jewelles</Link>
      </div>
      <div className="flex justify-evenly gap-6 items-center">
        <div className="flex items-center gap-2 border-b-2 pb-1 border-gray-green">
          <div>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.458 20.8333C13.9444 20.8333 16.329 19.8455 18.0871 18.0874C19.8453 16.3292 20.833 13.9447 20.833 11.4583C20.833 8.97185 19.8453 6.58728 18.0871 4.82913C16.329 3.07097 13.9444 2.08325 11.458 2.08325C8.9716 2.08325 6.58703 3.07097 4.82888 4.82913C3.07073 6.58728 2.08301 8.97185 2.08301 11.4583C2.08301 13.9447 3.07073 16.3292 4.82888 18.0874C6.58703 19.8455 8.9716 20.8333 11.458 20.8333Z"
                stroke="#3B606A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                opacity="0.4"
                d="M19.7188 21.5509C20.2709 23.2176 21.5313 23.3843 22.5 21.9259C23.3854 20.5926 22.8021 19.4989 21.1979 19.4989C20.0104 19.4884 19.3438 20.4155 19.7188 21.5509Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <input type="text" placeholder="search here jewelry's" className="placeholder:text-gray-green focus:outline-none border-0" />
        </div>
        <div>
          <Link to='/cart'>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M27.4837 36.6666H12.5171C6.66706 36.6666 5.40039 33.3166 5.88372 29.2166L7.38372 16.7166C7.76706 13.4833 8.33372 10.8333 14.0004 10.8333H26.0004C31.667 10.8333 32.2337 13.4833 32.617 16.7166L33.867 27.1333L34.117 29.2166L34.167 29.6166C34.517 33.5333 33.1504 36.6666 27.4837 36.6666Z"
              fill="black"
            />
            <path
              d="M26.6663 14.5832C25.983 14.5832 25.4163 14.0166 25.4163 13.3332V7.49992C25.4163 5.69992 24.2997 4.58325 22.4997 4.58325H17.4997C15.6997 4.58325 14.583 5.69992 14.583 7.49992V13.3332C14.583 14.0166 14.0163 14.5832 13.333 14.5832C12.6497 14.5832 12.083 14.0166 12.083 13.3332V7.49992C12.083 4.31658 14.3163 2.08325 17.4997 2.08325H22.4997C25.683 2.08325 27.9163 4.31658 27.9163 7.49992V13.3332C27.9163 14.0166 27.3497 14.5832 26.6663 14.5832ZM34.1663 29.6182C34.1163 29.6349 34.0663 29.6349 34.0163 29.6349H13.333C13.0015 29.6349 12.6835 29.5032 12.4491 29.2688C12.2147 29.0344 12.083 28.7164 12.083 28.3849C12.083 28.0534 12.2147 27.7354 12.4491 27.501C12.6835 27.2666 13.0015 27.1349 13.333 27.1349H33.8663L34.1163 29.2182L34.1663 29.6182Z"
              fill="#3B606A"
            />
          </svg>
          </Link>
        </div>
        <div>
          <Link to='/profile'>
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_101_37)">
              <path
                opacity="0.4"
                d="M22.0003 44.3554C32.1258 44.3554 40.3337 36.1476 40.3337 26.0221C40.3337 15.8966 32.1258 7.68872 22.0003 7.68872C11.8748 7.68872 3.66699 15.8966 3.66699 26.0221C3.66699 36.1476 11.8748 44.3554 22.0003 44.3554Z"
                fill="black"
              />
              <path
                d="M22.0002 16.7251C18.2052 16.7251 15.1252 19.8051 15.1252 23.6001C15.1252 27.3218 18.0402 30.3468 21.9085 30.4568H22.2385C24.0182 30.3983 25.7054 29.6503 26.9438 28.3708C28.1822 27.0914 28.8747 25.3807 28.8752 23.6001C28.8752 19.8051 25.7952 16.7251 22.0002 16.7251ZM34.4284 39.4896C31.0449 42.6169 26.6057 44.352 21.9984 44.3479C17.195 44.3479 12.8317 42.4963 9.56836 39.4896C10.0084 37.8213 11.2 36.2996 12.9417 35.1263C17.9467 31.7896 26.0867 31.7896 31.055 35.1263C32.815 36.2996 33.9884 37.8213 34.4284 39.4896Z"
                fill="#3B606A"
              />
            </g>
            <defs>
              <clipPath id="clip0_101_37">
                <rect width="44" height="44" fill="white" />
              </clipPath>
            </defs>
          </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
