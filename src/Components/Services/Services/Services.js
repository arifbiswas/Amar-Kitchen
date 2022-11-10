import React, { useEffect, useState } from "react";
import ServicesCard from "../ServicesCard/ServicesCard";

const Services = () => {
  // All services
  const [services, setServices] = useState([]);
  const [count , setCount] = useState(0);
  const [perPage , setPerPage] = useState(1)
  const [size, setSize] = useState(4);
  useEffect(() => {
    fetch(`https://ass-11-amar-kitchen-server-arifbiswas.vercel.app/services?perPage=${perPage}&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data,data.services , data.count);
        setServices(data.services);
        setCount(data.count)
      })
      .catch((e) => {
        console.log(e);
      });
  }, [perPage,size ]);
  const pages = Math.ceil(count / size)
  return (
    <div className="my-8">
        <h1 className="text-4xl text-center text-yellow-400 font-extrabold">All Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
            {
                services.map(service => <ServicesCard
                key={service._id}
                service={service}
                ></ServicesCard>)
            }
        </div>
       
        <div className="flex justify-center items-center gap-3 py-3 px-4 border-2 ml-3 rounded-md my-12 border-yellow-500 text-1xl font-bold">
         {
            [...Array(pages).keys()].map(number =><button
            key={number}
            onClick={()=>setPerPage(number)}
            className="py-3 px-4 border-2 ml-3 rounded-md my-12 border-yellow-500 text-1xl font-bold"
            >{number + 1}</button>)
         }
          <div>
          <select  onChange={(e)=>setSize(parseInt(e.target.value))}  className="py-3 px-4 border-2 ml-3 rounded-md my-12 border-yellow-500 text-1xl font-bold"> 
          <option  className="py-3 px-4 border-2 ml-3 rounded-md my-12 border-yellow-500 text-1xl font-bold"  value="0">0</option>
          <option  className="py-3 px-4 border-2 ml-3 rounded-md my-12 border-yellow-500 text-1xl font-bold"  value="1">1</option>
          <option  className="py-3 px-4 border-2 ml-3 rounded-md my-12 border-yellow-500 text-1xl font-bold" selected value="4" >4</option>
          <option  className="py-3 px-4 border-2 ml-3 rounded-md my-12 border-yellow-500 text-1xl font-bold"   value="8">8</option>
          <option  className="py-3 px-4 border-2 ml-3 rounded-md my-12 border-yellow-500 text-1xl font-bold"   value="10">10</option>
          </select>
        </div>
        </div>
    </div>
  );
};

export default Services;
