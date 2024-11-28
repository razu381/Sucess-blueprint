import React from "react";
import { useRouteError } from "react-router-dom";

function NotFound() {
  const error = useRouteError();

  console.log("error = ", error.status);

  if (error.status == 404) {
    return (
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <div>
            <h1 className="text-5xl font-bold">We are looking for the page!</h1>
            <p className="py-6 font-bold text-3xl">404 ! Page not found</p>
          </div>
          <img
            src="/not-found.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <div>
            <h1 className="text-5xl font-bold">
              Sotruj(error) found in your code!
            </h1>
            <p className="py-6 font-bold text-3xl">
              There's been some kind of error in your code, please debug and
              catch the sotruj
            </p>
          </div>
          <img
            src="/not-found.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
        </div>
      </div>
    );
  }
}

export default NotFound;
