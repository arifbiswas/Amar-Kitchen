import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthProvider } from "../../../Contexts/AuthContext/AuthContext";

const ReviewUpdate = () => {
    const navigate =useNavigate();
  const { openModal, setOpenModal } = useContext(AuthProvider);
  const [selectReview, setSelectReview] = useState({});
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSelectReview(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);
  console.log(selectReview);
  
  const {userEmail,userReview,start,_id} = selectReview;

  const handleUpdate = (e) =>{
    e.preventDefault();
    const form = e.target;
    const star = form.star.value;
    const userReview =form.userReview.value;
    const updateReview = {star ,userReview}
    // console.log(newReview);
    fetch(`http://localhost:5000/reviews/${_id}`,{
        method : "PATCH",
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify(updateReview)
    })
    .then(res =>res.json())
    .then(data =>{
        console.log(data);
        if(data.modifiedCount > 0){
            toast.success("Reviews Update Successfully")
            navigate('/myReviews')
        }
    })
    .catch(e => {
        console.log(e);
    })
  }

  return (
    <div>
     
      
        <div class="relative w-[100%]  h-[100vh] ">
          {/* <!-- Modal content --> */}
          <form
            onSubmit={handleUpdate}
            action="editUserModal"
            class="relative bg-white rounded-lg shadow "
          >
            {/* <!-- Modal header --> */}
            <div class="flex justify-between items-start p-4 rounded-t border-b ">
              <h3 class="text-xl font-semibold text-gray-900 ">Edit Review</h3>
              <Link
                to="/myReviews"
                onClick={() => setOpenModal(!openModal)}
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-red-500 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
                data-modal-toggle="editUserModal"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
            {/* <!-- Modal body --> */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-5 mt-5">
              <img
                src={selectReview?.service_image}
                className="w-60 h-60 rounded-md"
                alt=""
              />
              <div className="flex items-center justify-center">
                <h2 className="text-2xl lg:text-5xl font-black text-orange-500">
                  {selectReview?.service_name}
                </h2>
              </div>
            </div>
            <div class="p-6 space-y-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <div className="flex flex-col ">
                    <label htmlFor="star" className="text-gray-700 mb-2 ">
                      Select Star
                    </label>
                    <select
                      name="star"
                      id="star"
                      className="py-2 px-2 bg-white border border-gray-300"
                    //   defaultValue={start}
                      
                    >
                      <option value="1">1 Star</option>
                      <option value="2">2 Star</option>
                      <option value="3">3 Star</option>
                      <option value="3.5">3.5 Star</option>
                      <option value="4">4 Start</option>
                      <option value="4.5">4.5 Star</option>
                      <option value="5">
                        5 Star
                      </option>
                      <option selected value={start}>
                        {start} Star
                      </option>
                    </select>
                  </div>
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="first-name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    defaultValue={userEmail}
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-yellow-600 focus:border-yellow-600 block w-full p-2.5 "
                    placeholder="Bonnie"
                    disabled
                  />
                </div> 
              </div>
              <div class="col-span-6 sm:col-span-3">
                  <label
                    for="first-name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    First Name
                  </label>
                  <textarea
                    type="text"
                    name="userReview"
                    id="first-name"
                    defaultValue={userReview}
                    class="shadow-sm h-40 bg-gray-50 border border-gray-300 text-gray-600 text-1xl rounded-lg focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-40  focus:outline-none focus:ring block w-full p-2.5 "
                    placeholder="Bonnie"
                    required=""
                  />
                </div>
            </div>
            {/* <!-- Modal footer --> */}
            <div class="flex items-center justify-center p-6 space-x-2 rounded-b border-t border-gray-200 ">
              <button
                type="submit"
                class="px-8 w-full py-5 leading-5 text-black transition-colors duration-300 transform bg-white hover:text-yellow-500 text-1xl rounded-md  border-4 hover:border-yellow-500 focus:bg-gray-600"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
  
  );
};

export default ReviewUpdate;
