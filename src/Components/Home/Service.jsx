import React from "react";
import { Link } from "react-router-dom";

function Service({ service }) {
  let { id, image, serviceName, category, pricing, counselor } = service;
  return (
    <div className="card bg-base-100 shadow-xl relative">
      <figure>
        <img src={image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{serviceName}</h2>
        <p className="bg-success-primary-500 absolute py-1 px-3 rounded-full text-white text-xs top-3 right-2">
          {category}
        </p>
        <p>
          <span className="font-semibold">Price: </span> {pricing}
        </p>
        <p>
          <span className="font-semibold">Counselor: </span>
          {counselor}
        </p>
        <div className="card-actions mt-4">
          <Link
            to={`/services/${id}`}
            className="btn bg-success-primary-500 hover:bg-success-primary-800 text-white w-full"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Service;
