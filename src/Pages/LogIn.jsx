import React from "react";

function LogIn() {
  return (
    <div>
      <div className="hero svg-background min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-white bg-opacity-5 w-full max-w-md shrink-0 shadow-2xl">
            <h2 className="text-center text-white text-2xl font-bold pt-5">
              Sucess Blueprint
            </h2>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered text-white"
                  required
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-white"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-success-primary-400 border-none text-white hover:bg-success-primary-500">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
