import React, { useContext, useState } from "react";
import { Link, Links, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

function Header() {
  let { user, LogOut, loading } = useContext(AuthContext);
  let [isUserImageHovered, setUserImageHovered] = useState(false);

  console.log(user);
  let li = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
      <li>
        <NavLink to="/consultation">Book a consultation</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start z-50">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow py-5"
          >
            {li}
          </ul>
        </div>
        <Link
          to="/"
          className="font-heading font-extrabold lg:text-3xl text-success-primary-500 italic"
        >
          Success Blueprint
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{li}</ul>
      </div>
      <div className="navbar-end">
        {loading ? (
          <div className="">
            <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
          </div>
        ) : (
          <>
            {user ? (
              <>
                <h4
                  className={`${
                    isUserImageHovered ? "opacity-100" : "opacity-0"
                  } mr-1 ml-1 lg:mr-2`}
                >
                  {user?.displayName}
                </h4>
                <img
                  onMouseEnter={() => setUserImageHovered(true)}
                  onMouseLeave={() => setUserImageHovered(false)}
                  src={user?.photoURL}
                  className="w-10 rounded-full mr-2"
                />
                <Link
                  onClick={LogOut}
                  className="btn bg-success-primary-500 text-white py-2 px-4 hover:bg-success-primary-800"
                >
                  Logout
                </Link>
              </>
            ) : (
              <Link
                to="/login"
                className="btn bg-success-primary-500 text-white hover:bg-success-primary-800"
              >
                Login
              </Link>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
