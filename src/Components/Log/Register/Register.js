import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../Assets/registerBanner.svg'

const Register = () => {
    return (
        <div className="flex justify-center items-center  h-[100vh]">
      <div class="bg-white  w-[100%]">
        <div class=" flex flex-col lg:flex-row justify-center h-screen ">
          <img className=" w-[300px] mx-auto mt-[80%] lg:mt-1 lg:w-[70%]" src={banner} alt="" />

          <div class="flex items-center w-full  mx-auto lg:w-2/6  px-12">
            <div class="flex-1 border-2 border-yellow-200  p-5  lg:py-36 rounded-md">
              <div class="text-center">
                <h2 class="text-5xl mb-8 font-black text-center text-yellow-500 ">
                  Register
                </h2>

                <p class="mt-3 text-gray-400 ">
                   Create new account and gives your opinion and Reviews 
                </p>
              </div>

              <div class="mt-8">
                <form>
                  <div className='mt-2'>
                    <label
                      for="name"
                      class="block mb-2 text-sm text-gray-900 "
                    >
                      Name 
                    </label>
                    <input
                      type="name"
                      name="name"
                      id="name"
                      placeholder="name"
                      class="block w-full px-4 py-3 mt-2 text-gray-700  bg-white border rounded-md placeholder-gray-400   border-gray-700 focus:border-yellow-400 focus:ring-yellow-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div className='mt-2'>
                    <label
                      for="photoURL"
                      class="block mb-2 text-sm text-gray-900 "
                    >
                      photoURL Link
                    </label>
                    <input
                      type="photoURL"
                      name="photoURL"
                      id="photoURL"
                      placeholder="link"
                      class="block w-full px-4 py-3 mt-2 text-gray-700  bg-white border rounded-md placeholder-gray-400   border-gray-700 focus:border-yellow-400 focus:ring-yellow-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div className='mt-2'>
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
                      class="block w-full px-4 py-4 mt-2 text-gray-700  bg-white border rounded-md placeholder-gray-400   border-gray-700 focus:border-yellow-400 focus:ring-yellow-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div class="mt-2">
                    <div class="flex justify-between ">
                      <label
                        for="password"
                        class="text-sm text-gray-600 "
                      >
                        Password
                      </label>
                      
                    </div>

                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Your Password"
                      class="block w-full px-4 py-4 mt-2 text-gray-400  bg-white border  rounded-md placeholder-gray-400   border-gray-700  focus:border-yellow-400 focus:ring-yellow-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div class="mt-6">
                    <button class="w-full px-4 py-5 tracking-wide text-white transition-colors duration-300 transform bg-yellow-500 rounded-md hover:bg-yellow-400 focus:outline-none focus:bg-yellow-400 focus:ring focus:ring-yellow-300 focus:ring-opacity-50">
                      Register
                    </button>
                  </div>
                </form>

                <p class="mt-8 text-1xl text-center text-gray-400">
                   have an account {" "}
                  <Link
                    to="/login"
                    class="text-yellow-500 focus:outline-none focus:underline hover:underline"
                  >
                    Login
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

export default Register;