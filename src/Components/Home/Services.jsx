import React, { useEffect, useState } from "react";
import Service from "./Service";

function Services() {
  let [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/ServicesData.json")
      .then((res) => res.json())
      .then((res) => setServices(res));
  }, []);

  return (
    <div className="py-20">
      <h2 className="pb-8 text-center font-bold lg:text-3xl">
        Services That We Offer
      </h2>

      <div className="grid grid-cols-3 gap-5">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
}

export default Services;
