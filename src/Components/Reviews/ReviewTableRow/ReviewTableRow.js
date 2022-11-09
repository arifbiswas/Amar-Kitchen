import React from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ReviewTableRow = ({ myReview, myReviews, setMyReviews,serial }) => {
  

  // Reaview Delete
  const handleDelete = () => {
   const confirm = window.confirm("Delete this Review")
   if(confirm){
    fetch(`http://localhost:5000/reviews/${myReview._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if(data.deletedCount > 0){
              toast.success("Deleted Successfully")
              const reamingReviews = myReviews.filter(
                (myr) => myr._id !== myReview._id
              );
              setMyReviews(reamingReviews);
          }
        })
        .catch((e) => {
          console.log(e);
        });
   }
  };

  return (
    <>
      <tr class="bg-white border-b hover:bg-gray-50">
        <td class="p-4 w-4 text-center ">
          <h1>{serial}</h1>
        </td>
        <td>
          <img
            class="w-32 mx-auto h-32 rounded"
            src={myReview.service_image}
            alt="Jese image"
          />
        </td>
        <th
          scope="row"
          class=" py-4 px-6 w-10 text-gray-900 whitespace-nowrap text-center"
        >
          <div className="flex items-center space-x-2 text-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current"
            >
              <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
            </svg>
            <span className="text-xl font-bold">{myReview?.star}</span>
          </div>
        </th>
        <td class="py-4 px-6 text-center">
          <div class="pl-3">
            <div class="text-base font-semibold">{myReview?.service_name}</div>
            <div class="font-normal text-gray-500">{myReview?.service_name}</div>
          </div>
        </td>
        <td class="py-4 px-6 text-center">
          <div class="pl-3 w-96">
            <div class="text-base font-semibold">
              {myReview.userReview.length > 150
                ? myReview.userReview.slice(0, 100) + "..."
                : myReview.userReview}
            </div>
            {/* <div class="font-normal text-gray-500">{myReview.userReview}</div> */}
          </div>
        </td>
        <td class="py-4 px-6 text-center">
          <div class="pl-3">
            <div class="text-base font-semibold">{myReview?.postTime}</div>
            <div class="font-normal text-gray-500">{myReview?.postDay}</div>
          </div>
        </td>
        {/* <!-- Modal toggle --> */}
        <td class="py-4 px-6 ">
          <div className="flex gap-5 justify-center items-center">
            <Link
              to={`/myReviews/${myReview._id}`}
              htmlFor="editUserModal"
              type="button"
              data-modal-toggle="editUserModal"
              class="font-black text-2xl hover:text-yellow-400 text-yellow-500 "
            >
              <FaEdit></FaEdit>
            </Link>

            <button
              onClick={handleDelete}
              htmlFor="editUserModal"
              type="button"
              data-modal-toggle="editUserModal"
              class="font-black text-2xl  hover:text-red-400 text-red-500"
            >
              <FaRegTrashAlt></FaRegTrashAlt>{" "}
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ReviewTableRow;
