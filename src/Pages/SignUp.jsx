import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

function SignUp() {
  let { setUser, createAccount } = useContext(AuthContext);

  function handleSignUp(e) {
    e.preventDefault();
    let name = e.target.name.value;
    let photo = e.target.photo.value;
    let email = e.target.email.value;
    let pass = e.target.pass.value;

    const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    if (!regex.test(pass)) {
      console.log(
        "Password length must be 6 and it should contain one uppercase, one lowercase letter"
      );
      return;
    }

    createAccount(email, pass)
      .then((res) => {
        setUser(res.user);
        console.log("New user craeted with email " + res.user.email);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  return (
    <div>
      <div className="hero min-h-screen svg-background">
        <div className=" flex-col w-1/3 py-10 lg:flex-row-reverse">
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
                  required
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
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-success-primary-400 border-none text-white hover:bg-success-primary-500">
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;