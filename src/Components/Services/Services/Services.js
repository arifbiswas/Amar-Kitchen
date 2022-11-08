import React, { useEffect, useState } from "react";
import ServicesCard from "../ServicesCard/ServicesCard";

const Services = () => {
  // All services
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/services`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
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
    </div>
  );
};

export default Services;
