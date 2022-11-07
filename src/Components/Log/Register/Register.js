import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../Assets/registerBanner.svg'

const Register = () => {
    const [userInfo ,setUserInfo ] = useState({})

    // form On submite 
  const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(userInfo);
  }

    return (
        <div className="flex justify-center items-center  h-[100vh]">
      <div className="bg-white  w-[100%]">
        <div className=" flex flex-col lg:flex-row justify-center h-screen ">
          <img className=" w-[300px] mx-auto mt-[80%] lg:mt-1 lg:w-[70%]" src={banner} alt="" />

          <div className="flex items-center w-full  mx-auto lg:w-2/6  px-12">
            <div className="flex-1 border-2 border-yellow-200  p-5  lg:py-36 rounded-md">
              <div className="text-center">
                <h2 className="text-5xl mb-8 font-black text-center text-yellow-500 ">
                  Register
                </h2>

                <p className="mt-3 text-gray-400 ">
                   Create new account and gives your opinion and Reviews 
                </p>
              </div>

              <div className="mt-8">
                <form onSubmit={handleSubmit}>
                  <div className='mt-2'>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm text-gray-900 "
                    >
                      Name 
                    </label>
                    <input
                    onChange={(e)=>setUserInfo({...userInfo, name : e.target.value})}
                      type="name"
                      name="name"
                      id="name"
                      placeholder="name"
                      className="block w-full px-4 py-3 mt-2 text-gray-700  bg-white border rounded-md placeholder-gray-400   border-gray-700 focus:border-yellow-400 focus:ring-yellow-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div className='mt-2'>
                    <label
                      htmlFor="photoURL"
                      className="block mb-2 text-sm text-gray-900 "
                    >
                      photoURL Link
                    </label>
                    <input
                    onChange={(e)=>setUserInfo({...userInfo, photoURL : e.target.value})}
                      type="photoURL"
                      name="photoURL"
                      id="photoURL"
                      placeholder="link"
                      className="block w-full px-4 py-3 mt-2 text-gray-700  bg-white border rounded-md placeholder-gray-400   border-gray-700 focus:border-yellow-400 focus:ring-yellow-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div className='mt-2'>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm text-gray-900 "
                    >
                      Email Address
                    </label>
                    <input
                    onChange={(e)=>setUserInfo({...userInfo, email : e.target.value})}
                      type="email"
                      name="email"
                      id="email"
                      placeholder="your@gamil.com"
                      className="block w-full px-4 py-4 mt-2 text-gray-700  bg-white border rounded-md placeholder-gray-400   border-gray-700 focus:border-yellow-400 focus:ring-yellow-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="mt-2">
                    <div className="flex justify-between ">
                      <label
                        htmlFor="password"
                        className="text-sm text-gray-600 "
                      >
                        Password
                      </label>
                      
                    </div>

                    <input
                    onChange={(e)=>setUserInfo({...userInfo, password : e.target.value})}
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Your Password"
                      className="block w-full px-4 py-4 mt-2 text-gray-400  bg-white border  rounded-md placeholder-gray-400   border-gray-700  focus:border-yellow-400 focus:ring-yellow-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="mt-6">
                    <button className="w-full px-4 py-5 tracking-wide text-white transition-colors duration-300 transform bg-yellow-500 rounded-md hover:bg-yellow-400 focus:outline-none focus:bg-yellow-400 focus:ring focus:ring-yellow-300 focus:ring-opacity-50">
                      Register
                    </button>
                  </div>
                </form>

                <p className="mt-8 text-1xl text-center text-gray-400">
                   have an account {" "}
                  <Link
                    to="/login"
                    className="text-yellow-500 focus:outline-none focus:underline hover:underline"
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