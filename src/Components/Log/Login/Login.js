import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import banner from '../../../Assets/loginBanner.svg'

const Login = () => {
   
  return (
    <div className="flex justify-center items-center w-[100%]  h-[100vh]">
      <div class="bg-white  ">
        <div class=" flex flex-col lg:flex-row justify-center  ">
          <img className=" h-full" src={banner} alt="" />

          <div class="flex items-center w-full  mx-auto  lg:w-2/6  lg:px-6">
            <div class="flex-1 border-2 p-5  lg:py-36 rounded-md border-yellow-200">
              <div class="text-center">
                <h2 class="text-5xl mb-8 font-black text-center text-yellow-500 ">
                  Login
                </h2>

                <p class="mt-3 text-gray-400 ">
                   Login to access your account 
                </p>
              </div>

              <div class="mt-8">
                <form>
                  <div>
                    <label
                      for="email"
                      class="block mb-2 text-sm text-gray-900 "
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="your@gamil.com"
                      class="block w-full px-4 py-4 mt-2 text-gray-700  bg-white border rounded-md placeholder-gray-600   border-gray-700 focus:border-yellow-400 focus:ring-yellow-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div class="mt-6">
                    <div class="flex justify-between mb-2">
                      <label
                        for="password"
                        class="text-sm text-gray-600 "
                      >
                        Password
                      </label>
                      <a
                        href="#"
                        class="text-sm text-gray-400 focus:text-yellow-500 hover:text-yellow-500 hover:underline"
                      >
                        Forgot password?
                      </a>
                    </div>

                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Your Password"
                      class="block w-full px-4 py-4 mt-2 text-gray-700  bg-white border  rounded-md placeholder-gray-600   border-gray-700  focus:border-yellow-400 focus:ring-yellow-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div class="mt-6">
                    <button class="w-full px-4 py-3 tracking-wide text-white transition-colors duration-300 transform bg-yellow-500 rounded-md hover:bg-yellow-400 focus:outline-none focus:bg-yellow-400 focus:ring focus:ring-yellow-300 focus:ring-opacity-50">
                      Login
                    </button>
                  </div>
                </form>

                <p class="mt-6 text-sm text-center text-gray-400">
                  Don&#x27;t have an account yet?{" "}
                  <Link
                    to="/register"
                    class="text-yellow-500 focus:outline-none focus:underline hover:underline"
                  >
                    Register
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
