import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaCircleUser } from "react-icons/fa6";

function ShowComments({ comments }) {
  let { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="my-2">
      {comments.map((comment) => (
        <div className=" bg-slate-50 pt-1 pb-3 px-2 mt-2 mr-[30%] rounded-md">
          <div className="flex gap-2 items-center mt-5">
            {user.photoURL ? (
              <img src={user.photoURL} className="w-5 rounded-full" />
            ) : (
              <FaCircleUser />
            )}

            <h4>{user?.displayName}</h4>
          </div>
          <p className="pt-2">{comment}</p>
        </div>
      ))}
    </div>
  );
}

export default ShowComments;
