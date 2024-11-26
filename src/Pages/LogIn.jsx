import React, { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

function LogIn() {
  let { setUser, signIn } = useContext(AuthContext);
  let [userEmail, setUserEmail] = useState();

  let navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    let email = e.target.email.value;
    let pass = e.target.pass.value;

    signIn(email, pass)
      .then((res) => {
        setUser(res.user);
        console.log("New user logged in with email " + res.user.email);
      })
      .catch((err) => console.log(err.message));
  }
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
                  onChange={(e) => setUserEmail(e.target.value)}
                  name="email"
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
                  name="pass"
                  type="password"
                  placeholder="password"
                  className="input input-bordered text-white"
                  required
                />
                <label className="label">
                  <button
                    onClick={() =>
                      navigate("/forgetpass", { state: { userEmail } })
                    }
                    className="label-text-alt link link-hover text-white"
                  >
                    Forgot password?
                  </button>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-success-primary-400 border-none text-white hover:bg-success-primary-500">
                  Login
                </button>
                <p className="text-white py-4 text-xs">
                  New to the website?{" "}
                  <Link to="/signup" className="text-success-primary-500">
                    Create Account
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
