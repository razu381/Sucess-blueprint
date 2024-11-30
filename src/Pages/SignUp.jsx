import React, { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

function SignUp() {
  let { setUser, createAccount, editProfile, loginWithGoogle } =
    useContext(AuthContext);

  let [showPass, setShowpass] = useState(false);

  let navigate = useNavigate();

  function handleSignUp(e) {
    e.preventDefault();
    let name = e.target.name.value;
    let photo = e.target.photo.value;
    let email = e.target.email.value;
    let pass = e.target.pass.value;

    const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    if (!regex.test(pass)) {
      toast.error(
        "Password length must be 6 and it should contain one uppercase, one lowercase letter"
      );
      return;
    }

    createAccount(email, pass)
      .then((res) => {
        setUser(res.user);
        editProfile({ displayName: name, photoURL: photo });
        toast.success("New user craeted with email " + res.user.email);
        navigate("/profile");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }

  return (
    <div>
      <Helmet>
        <title>Sign up - Success Blueprint</title>
      </Helmet>
      <div className="hero bg-blue-950 svg-background">
        <div className=" flex-col py-10 lg:flex-row-reverse">
          <div className="card bg-white bg-opacity-5 w-full shrink-0 shadow-2xl">
            <h2 className="text-center text-white text-2xl font-bold pt-5">
              Sucess Blueprint
            </h2>
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Photo Url</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="Profile picture url"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                {showPass ? (
                  <FaEyeSlash
                    onClick={() => setShowpass(!showPass)}
                    color="grey"
                    className="absolute top-12 mt-1 right-3"
                  />
                ) : (
                  <FaEye
                    onClick={() => setShowpass(!showPass)}
                    color="grey"
                    className="absolute top-12 mt-1 right-3"
                  />
                )}
                <input
                  name="pass"
                  type={showPass ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-success-primary-400 border-none text-white hover:bg-success-primary-500">
                  Sign up
                </button>

                {/* login with google */}
                <button
                  onClick={loginWithGoogle}
                  className="btn bg-transparent border border-[#F4B400]  text-[#F4B400] hover:bg-success-dark  mt-5"
                >
                  Signup with Google
                </button>
                {/* New to our site text */}
                <p className="text-white py-4 text-xs text-center">
                  New to the website?
                  <Link to="/login" className="text-success-primary-500">
                    Login
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

export default SignUp;
