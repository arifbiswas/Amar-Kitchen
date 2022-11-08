import React, { useContext, useState } from "react";
import { AuthProvider } from "../../../Contexts/AuthContext/AuthContext";

const PostReview = ({ service }) => {
  const { user } = useContext(AuthProvider);
  const [postReview, setPostReview] = useState({});

  
 
    const time = new Date().toLocaleTimeString();
    const day = new Date().toDateString();
  
  const handlePostReviews = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const start = form.start.value;
    const userReview = form.userReview.value;
    const postReviewWithUserInfo = {
      ...postReview,
      userImage: user?.photoURL,
      userEmail: user?.email,
       userName,
      service_id: service._id,
     postTime: time,
     postDay : day,
     service_name: service.service_name,
     service_image: service.image,
     start,
     userReview
    };
    console.log(postReviewWithUserInfo);

    // fetch("http://localhost:5000/reviews",{
    //     method : "POST",
    //     headers : {
    //         "content-type" : "application/json"
    //     },
    //     body : JSON.stringify(postReviewWithUserInfo)
    // })
    // .then(res => res.json())
    // .then(data =>{
    //     form.reset();
    //     console.log(data)
    //     if(data.acknowledged){
    //         alert("Reviews is Send")
    //     }
    // })
    // .catch(e => {
    //     console.log(e);
    // })
  };

  return (
    <div>
      <div className="mx-auto max-w-4xl shadow-lg flex justify-center items-center py-5 rounded-md gap-5 ">
        <div className="avatar ">
          <div className="w-12 rounded-full">
            <img src={user?.photoURL} />
          </div>
          <div></div>
        </div>
        <div className="text-3xl font-bold">YOUR REVIEWS</div>
      </div>
      <section class="max-w-4xl p-6 mx-auto border my-8 rounded-md shadow-md ">
        <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white"></h2>

        <form onSubmit={handlePostReviews}>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 items-center ">
            <div>
              <label class="text-gray-700 " for="name">
                name
              </label>
              <input
                id="name"
                type="text"
                defaultValue={user?.displayName}
                name="userName"
                placeholder="name"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="start" className="text-gray-700 mb-2 ">
                Select Star
              </label>
              <select
                name="start"
                id="start"
                className="py-2 px-2 bg-white border border-gray-300"
              >
                <option value="1">1 Start</option>
                <option value="2">2 Start</option>
                <option value="3">3 Start</option>
                <option value="3.5">3.5 Start</option>
                <option value="4">4 Start</option>
                <option value="4.5">4.5 Start</option>
                <option value="5" selected>
                  5 Start
                </option>
              </select>
            </div>
          </div>
          <div className="mt-5">
            <label class="text-gray-700" for="name">
              Review
            </label>
            <textarea
              id="name"
              type="text"
              name="userReview"
              placeholder="Write Reviews"
              class="block w-full h-80 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
          <div class="flex justify-end mt-6">
            <button class="px-8 w-full py-5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Send Review
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default PostReview;
