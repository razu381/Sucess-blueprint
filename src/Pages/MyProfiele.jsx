import React, { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";

function MyProfiele() {
  let { user, setUser, editProfile, loading } = useContext(AuthContext);
  let [profile, setProfile] = useState(user);

  function handleUpdate(e) {
    e.preventDefault();
    let name = e.target.name.value;
    let photo = e.target.photo.value;

    editProfile({ displayName: name, photoURL: photo })
      .then((res) => {
        setProfile({ ...profile, displayName: name, photoURL: photo });
        toast.success("User profile updated successfully");
        console.log("this is profile", profile);
      })
      .catch((err) => toast.error("err.message"));
  }
  return (
    <section className="flex flex-col md:flex-row">
      <div className="bg-success-primary-100 flex-1 mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">
            Update Your Profile
          </h1>

          <p className="mt-4 text-gray-500">
            Keep your profile up-to-date to ensure a personalized experience.
            Use this form to update your personal details, contact information,
            and preferences.
          </p>
        </div>

        <form
          onSubmit={handleUpdate}
          action="#"
          className="mx-auto mb-0 mt-8 max-w-md space-y-4"
        >
          <div>
            <label htmlFor="photo" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                name="photo"
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Photo url"
              />
            </div>
          </div>

          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>

            <div className="relative">
              <input
                name="name"
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Name"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white w-full"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>

      <div className="flex-1 border border-gray-700 bg-success-primary-900 px-4 py-16">
        <article>
          <div className="flex items-center gap-4">
            {profile.photoURL ? (
              <img
                src={profile.photoURL}
                className="size-16 rounded-full object-cover"
              />
            ) : (
              <FaCircleUser size={50} color="white" />
            )}

            <div>
              <h3 className="text-lg font-medium text-white">
                {profile.displayName
                  ? profile.displayName
                  : "Name is not set yet"}
              </h3>

              <div className="flow-root">
                <ul className="-m-1 flex flex-wrap">
                  <li className="p-1 leading-none">
                    <a href="#" className="text-xs font-medium text-gray-300">
                      Twitter
                    </a>
                  </li>

                  <li className="p-1 leading-none">
                    <a href="#" className="text-xs font-medium text-gray-300">
                      GitHub
                    </a>
                  </li>

                  <li className="p-1 leading-none">
                    <a href="#" className="text-xs font-medium text-gray-300">
                      Website
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <ul className="mt-4 space-y-2">
            <li>
              <a
                href="#"
                className="block h-full rounded-lg border border-white p-4 hover:border-success-500"
              >
                <strong className="font-medium text-white">Email</strong>

                <p className="mt-1 text-xs font-medium text-gray-300">
                  {profile.email}
                </p>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block h-full rounded-lg border border-white p-4 hover:border-success-500"
              >
                <strong className="font-medium text-white">Name</strong>

                <p className="mt-1 text-xs font-medium text-gray-300">
                  {profile.displayName
                    ? profile.displayName
                    : "Name is not set yet"}
                </p>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block h-full rounded-lg border border-white p-4 hover:border-success-500"
              >
                <strong className="font-medium text-white">Photo Url</strong>

                <p className="mt-1 text-xs font-medium text-gray-300">
                  {profile.photoURL
                    ? profile.photoURL
                    : "Profile picture is not set yet"}
                </p>
              </a>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default MyProfiele;
