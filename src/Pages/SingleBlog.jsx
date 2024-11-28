import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "../Components/single post/ShowComments";
import ShowComments from "../Components/single post/ShowComments";

function SingleBlog() {
  let [services, setServices] = useState([]);
  let [comments, setComments] = useState([]);

  let { postId } = useParams();
  postId = parseInt(postId);

  useEffect(() => {
    fetch("/ServicesData.json")
      .then((res) => res.json())
      .then((res) => setServices(res));
  }, []);

  let service = services.find((service) => service.id === postId);
  if (service) {
    let {
      image,
      serviceName,
      briefDescription,
      category,
      pricing,
      counselor,
      durationWithDate,
      rating,
    } = service;

    function handleComment(e) {
      e.preventDefault();
      let comment = e.target.comment.value;
      if (comment.trim().length === 0) {
        alert("Comment can't be empty");
        return;
      }
      setComments([...comments, comment]);
    }

    return (
      <div>
        <div className="mt-10 card bg-base-100 shadow-xl relative px-[10%] mx-auto pb-20">
          <figure>
            <img src={image} className="w-full rounded-2xl" />
          </figure>
          <div className="card-body pl-0">
            <h2 className="card-title">{serviceName}</h2>
            <p className="">
              <span className="font-semibold">Category: </span> {category}
            </p>
            <p className="">
              <span className="font-semibold">Date & Time: </span>
              {durationWithDate}
            </p>
            <p className="">
              <span className="font-semibold">Rating: </span>
              {rating}
            </p>
            <p>
              <span className="font-semibold">Price: </span> {pricing}
            </p>
            <p>
              <span className="font-semibold">Counselor: </span>
              {counselor}
            </p>
            <div>
              <p>
                <span className="font-semibold">
                  Description: <br />
                </span>
                {briefDescription}
              </p>
            </div>
          </div>

          {/* comments section */}
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-12 lg:col-span-4">
              <form action="" onSubmit={handleComment}>
                <textarea
                  name="comment"
                  placeholder="Comment"
                  className="block textarea textarea-bordered textarea-lg w-full lg:max-w-xs"
                ></textarea>
                <input
                  type="submit"
                  value="Comment"
                  className="block bg-blue-500 text-white py-2 px-10 mt-2 rounded-lg"
                />
              </form>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <h2 className="font-bold text-xl ">Comments </h2>
              <ShowComments comments={comments}></ShowComments>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleBlog;
