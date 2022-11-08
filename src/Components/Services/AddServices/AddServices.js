import React, { useEffect, useState } from "react";

const AddServices = () => {
  const [service , setService] = useState({});

  const handleServices = (e) =>{
    e.preventDefault();
    console.log(service);
    
    fetch("http://localhost:5000/services",{
      method : "POST",
      headers :{
        "content-type" : "application/json"
      },
      body : JSON.stringify(service)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
     e.target.reset();
    })
    .catch(e => console.log(e))
  }
 

  return (
    <div className="mt-12">
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md ">
        <h2 className="text-2xl lg:text-5xl text-center font-semibold text-gray-700 capitalize ">
          Add Services
        </h2>

        <form 
        onSubmit={handleServices}
        >
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 " for="username">
                Service name
              </label>
              <input
                onBlur={(e)=>setService({...service,service_name:e.target.value})}
                id="username"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-2 border-gray-300 rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 "
                for="emailAddress"
              >
                Service Price
              </label>
              <input
              onBlur={(e)=>setService({...service,service_price:e.target.value})}
                id="emailAddress"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-2 border-gray-300 rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-gray-700 "
                for="emailAddress"
              >
                Quantity
              </label>
              <input
              onBlur={(e)=>setService({...service,quantity:e.target.value})}
                id="emailAddress"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-2 border-gray-300 rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 " for="password">
                Server rating
              </label>
              <input
              onBlur={(e)=>setService({...service,service_rating:e.target.value})}
                id="password"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-2 border-gray-300 rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 " for="password">
                Cooked duration
              </label>
              <input
              onBlur={(e)=>setService({...service,cooked_duration:e.target.value})}
                id="password"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-2 border-gray-300 rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-gray-700 "
                for="passwordConfirmation"
              >
                Picture
              </label>
              <input
              onBlur={(e)=>setService({...service,image:e.target.value})}
                id="passwordConfirmation"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-2 border-gray-300 rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

           
            

          </div>
          <div className="my-5">
              <label
                className="text-gray-900 "
                for="passwordConfirmation"
              >
                Description
              </label>
              <textarea 
              onBlur={(e)=>setService({...service,description:e.target.value})}
                id="passwordConfirmation"
                type="text"
                className="block w-full h-96 py-5  text-gray-900 bg-white border-2 border-gray-300 rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

          <div className="flex justify-end mt-6">
            <button
            type="submit"
            className="px-8 py-3 w-full leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-900 focus:outline-none focus:bg-gray-900">
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddServices;
