import React, { useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";

const HomeShortServices = () => {
  // limited services 
   const [services, setServices] = useState([]);
  
  useEffect(()=>{
    fetch(`https://ass-11-amar-kitchen-server-arifbiswas.vercel.app/services?limited=3`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setServices(data)
    })
    .catch(e => {
      console.log(e);
    })
  },[])

  const navigate = useNavigate();


  return (
    <div className="cover text-center">
      <section className="">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl  text-center text-yellow-800 capitalize lg:text-6xl font-extrabold dark:text-white">
            Services
          </h1>

          <p className="mt-4 text-center text-white font-bold ">
           My services is The best , if you try it And gives review ,<br />
            3 Best and Delius Food in this List  ,<br />
            If you like this food, can you visit see all server ,<br />
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">

            {/* card  */}
            {
              services.map(service => <div
              key={service._id}
                className={`overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group border-2`}
                style={{backgroundImage: `url(${service.image})`}}
                
              >
                <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-yellow-600/20 group-hover:opacity-100">
                  <h2 className="mt-4 text-2xl font-semibold text-white capitalize">
                    {service?.service_name}
                  </h2>
                  <p className="mt-2 text-lg tracking-wider text-white uppercase ">
                  {service.description.slice(0,200) + "..."}
                  </p>
                </div>
              </div>)
            }

          </div>
        </div>
      </section>
      <button
      onClick={()=>navigate("/services")}
      className="px-8 py-3  bg-gradient-to-r from-orange-500 to-yellow-400 my-12 shadow-md rounded-md hover:bg-orange-500 font-bold text-white text-center mx-auto">See All</button>
    </div>
  );
};

export default HomeShortServices;
