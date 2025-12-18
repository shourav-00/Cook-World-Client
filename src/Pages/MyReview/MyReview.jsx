// import React, { useState } from "react";
// import useAuth from "../../Hooks/useAuth";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";
// import Swal from "sweetalert2";
// import { FaTrash, FaEdit, FaStar, FaQuoteLeft } from "react-icons/fa";
// import { useParams } from "react-router";
// import Loading from "../../Components/Loading/Loading";

// const MyReview = () => {
//   const {user} = useAuth()
//   const { id } = useParams();
//   const axiosSecure = useAxiosSecure();
//   const [editingReview, setEditingReview] = useState(null);
// const [openModal, setOpenModal] = useState(false);


//   const {
//     data: reviews = [],
//     isLoading,
//     refetch,
//   } = useQuery({
//     queryKey: ["reviews", id],
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/reviews?email=${user.email}`);
//       console.log(res.data);
//       return res.data;
//     },
//   });

//   const handleDelete = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Yes, delete it!",
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         try {
//           const res = await axiosSecure.delete(`/reviews/${id}`);
//           if (res.data.deletedCount > 0) {
//             refetch();
//             Swal.fire("Deleted!", "Your review has been deleted.", "success");
//           }
//         } catch (error) {
//           console.error("Error deleting review:", error);
//           Swal.fire("Error", "Could not delete review.", "error");
//         }
//       }
//     });
//   };


// const handleUpdateClick = (review) => {
//   setEditingReview(review);
//   setOpenModal(true);
// };


// const closeModal = () => {
//   setOpenModal(false);
//   setEditingReview(null);
// };



//   const handleUpdateSubmit = async (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const rating = form.rating.value;
//     const comment = form.comment.value;

//     try {
//       const res = await axiosSecure.patch(`/reviews/${editingReview._id}`, {
//         rating,
//         comment,
//       });

//        if (res.data.modifiedCount > 0) {
//       refetch();
//       Swal.fire("Success", "Review updated successfully", "success");
//       closeModal();
//     }
//     } catch (error) {
//       console.error("Error updating review:", error);
//       Swal.fire("Error", "Could not update review.", "error");
//     }
//   };

//   if (isLoading) {
//     return <Loading/>
//   }

//   return (
//     <div className="container mx-auto px-4 py-8 mt-16">
//       <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
//         My Reviews <span className="text-orange-500">({reviews.length})</span>
//       </h2>

//       {reviews.length === 0 ? (
//         <div className="text-center text-gray-500 py-12">
//           <p className="text-lg">You haven't posted any reviews yet.</p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {reviews.map((review) => (
//             <div
//               key={review._id}
//               className="card bg-base-100 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
//             >
//               <div className="card-body">
//                 <div className="flex justify-between items-start mb-2">
//                   <h3 className="card-title text-orange-600 font-bold truncate w-2/3">
//                     {review.mealTitle || review.mealName || "Meal Review"}
//                   </h3>
//                   <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-full text-yellow-700 text-sm font-bold">
//                     <FaStar className="mr-1" /> {review.rating}
//                   </div>
//                 </div>

//                 <div className="relative pl-6 py-2">
//                   <FaQuoteLeft className="absolute top-2 left-0 text-gray-300 text-xl" />
//                   <p className="text-gray-600 italic line-clamp-3 text-sm">
//                     {review.comment}
//                   </p>
//                 </div>

//                 <div className="text-xs text-gray-400 mt-2">
//                   {/* Assuming review has some date field, checking properties */}
//                   Posted on:{" "}
//                   {review.date
//                     ? new Date(review.date).toLocaleDateString()
//                     : "Unknown Date"}
//                 </div>

//                 <div className="card-actions justify-between mt-4 pt-4 border-t border-gray-100">
//                   <div>
//                     <img src={user.photoURL} className="w-10 h-10 rounded-full" alt="" />
//                     <p>Name : {review.reviewerName}</p>
//                   </div>
//                   <div>
//                     <button
//                     onClick={() => handleUpdateClick(review)}
//                     className="btn btn-sm btn-ghost text-blue-600 hover:bg-blue-50"
//                   >
//                     <FaEdit />
//                   </button>
//                   <button
//                     onClick={() => handleDelete(review._id)}
//                     className="btn btn-sm btn-ghost text-red-600 hover:bg-red-50"
//                   >
//                     <FaTrash />
//                   </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Update Modal */}
//     <dialog open={openModal} className="modal modal-bottom sm:modal-middle">
//   <div className="modal-box">
    
//     <button
//       className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//       onClick={closeModal}
//     >
//       ✕
//     </button>

//     <h3 className="font-bold text-lg mb-4 text-orange-600">
//       Update Review
//     </h3>

//     {editingReview && (
//       <form onSubmit={handleUpdateSubmit} className="space-y-4">

//         <input
//           type="number"
//           name="rating"
//           min="1"
//           max="5"
//           step="0.1"
//           defaultValue={editingReview.rating}
//           className="input input-bordered w-full"
//           required
//         />

//         <textarea
//           name="comment"
//           defaultValue={editingReview.comment}
//           className="textarea textarea-bordered h-24"
//           required
//         ></textarea>

//         <div className="modal-action">
//           <button type="submit" className="btn bg-orange-500 text-white">
//             Save Changes
//           </button>
//         </div>
//       </form>
//     )}
//   </div>
// </dialog>

//     </div>
//   );
// };

// export default MyReview;







import React, { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { FaTrash, FaEdit, FaStar, FaQuoteLeft, FaHeart, FaCalendar, FaUser } from "react-icons/fa";
import { useParams } from "react-router";
import Loading from "../../Components/Loading/Loading";

const MyReview = () => {
  const { user } = useAuth()
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [editingReview, setEditingReview] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const {
    data: reviews = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["reviews", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/reviews?email=${user.email}`);
      console.log(res.data);
      return res.data;
    },
  });

  const handleDelete = (id, mealName) => {
    Swal.fire({
      title: "Remove Your Heart Story?",
      text: `Are you sure you want to delete your review for "${mealName}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#f59e0b",
      confirmButtonText: "Yes, remove it",
      cancelButtonText: "Keep it",
      background: '#fef3c7',
      color: '#92400e'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.delete(`/reviews/${id}`);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Story Removed!",
              text: "Your heartfelt review has been deleted.",
              icon: "success",
              background: '#fef3c7',
              color: '#92400e'
            });
          }
        } catch (error) {
          console.error("Error deleting review:", error);
          Swal.fire("Error", "Could not delete review.", "error");
        }
      }
    });
  };

  const handleUpdateClick = (review) => {
    setEditingReview(review);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
    setEditingReview(null);
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const rating = form.rating.value;
    const comment = form.comment.value;

    try {
      const res = await axiosSecure.patch(`/reviews/${editingReview._id}`, {
        rating,
        comment,
      });

      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          title: "Heart Updated!",
          text: "Your emotional review has been updated.",
          icon: "success",
          background: '#fef3c7',
          color: '#92400e'
        });
        closeModal();
      }
    } catch (error) {
      console.error("Error updating review:", error);
      Swal.fire("Error", "Could not update review.", "error");
    }
  };

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="transform rotate-180 origin-center min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <div className="container mx-auto px-4 py-12 transform -rotate-180">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full mb-4 border border-yellow-200">
            <FaHeart className="text-yellow-500" />
            <span className="font-bold text-sm">MY HEART STORIES</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            My <span className="text-yellow-500">Emotional</span> Reviews
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Stories from your heart about meals that touched your soul
          </p>
          
          {/* Stats Badge */}
          <div className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-2 rounded-full shadow-lg">
            <FaQuoteLeft className="text-yellow-200" />
            <span className="font-bold text-xl">{reviews.length}</span>
            <span className="font-medium">Heart Stories</span>
          </div>
        </div>

        {reviews.length === 0 ? (
          <div className="text-center py-20 max-w-md mx-auto">
            <div className="relative mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-r from-yellow-100 to-yellow-50 rounded-full flex items-center justify-center border-4 border-yellow-200">
                <FaHeart className="text-6xl text-yellow-300" />
              </div>
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <FaQuoteLeft className="text-red-400" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">No Heart Stories Yet</h3>
            <p className="text-gray-600 mb-8">
              Start sharing your emotional experiences with meals that touched your heart
            </p>
            <button className="btn bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Share Your First Story
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div
                key={review._id}
                className="bg-white rounded-2xl shadow-lg border border-yellow-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Card Header */}
                <div className="bg-gradient-to-r from-yellow-50 to-white p-4 border-b border-yellow-100">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-gray-800 truncate flex-1">
                      {review.mealTitle || review.mealName || "Heartfelt Meal"}
                    </h3>
                    <div className="flex items-center bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-sm">
                      <FaStar className="mr-1 text-yellow-200" /> {review.rating}
                    </div>
                  </div>
                </div>

                {/* Review Content */}
                <div className="p-6">
                  <div className="relative mb-4">
                    <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-r from-yellow-100 to-yellow-50 flex items-center justify-center border border-yellow-200">
                      <FaQuoteLeft className="text-yellow-400 text-lg" />
                    </div>
                    <div className="pl-8">
                      <p className="text-gray-600 leading-relaxed line-clamp-4 italic">
                        "{review.comment}"
                      </p>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
                    <FaCalendar className="text-yellow-500" />
                    <span>
                      Shared on: {review.date
                        ? new Date(review.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })
                        : "Unknown Date"}
                    </span>
                  </div>

                  {/* User Info & Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-yellow-100">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img 
                          src={user.photoURL || "https://i.ibb.co/1Jgq0jZ/user.png"} 
                          className="w-10 h-10 rounded-full border-2 border-yellow-300 object-cover"
                          alt="User"
                        />
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                          <FaUser className="text-white text-xs" />
                        </div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">{review.reviewerName}</div>
                        <div className="text-xs text-gray-500">Food Lover</div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleUpdateClick(review)}
                        className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-50 to-blue-100 text-blue-500 hover:from-blue-100 hover:to-blue-200 border border-blue-200 flex items-center justify-center transition-all duration-300 hover:scale-110"
                        title="Edit your heart story"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(review._id, review.mealTitle || review.mealName)}
                        className="w-10 h-10 rounded-full bg-gradient-to-r from-red-50 to-red-100 text-red-500 hover:from-red-100 hover:to-red-200 border border-red-200 flex items-center justify-center transition-all duration-300 hover:scale-110"
                        title="Remove heart story"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Bottom Decorative Line */}
                <div className="h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>
              </div>
            ))}
          </div>
        )}

        {/* Summary Footer */}
        {reviews.length > 0 && (
          <div className="mt-12 bg-gradient-to-r from-yellow-50 to-white rounded-2xl p-6 border border-yellow-100 shadow-lg">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <h4 className="text-lg font-bold text-gray-800">Heart Stories Summary</h4>
                <p className="text-gray-600 text-sm">
                  You've shared {reviews.length} emotional stories from your culinary journey
                </p>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">{reviews.length}</div>
                  <div className="text-gray-600 text-sm">Total Stories</div>
                </div>
                <div className="h-10 w-px bg-yellow-200"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">
                    {reviews.reduce((sum, review) => sum + (parseFloat(review.rating) || 0), 0) / reviews.length || 0}
                  </div>
                  <div className="text-gray-600 text-sm">Avg Heart Rating</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Update Modal */}
        <dialog open={openModal} className="modal modal-bottom sm:modal-middle">
          <div className="modal-box bg-white border border-yellow-100 shadow-2xl max-w-md">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              ✕
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-100 to-yellow-50 rounded-full flex items-center justify-center border border-yellow-200">
                <FaEdit className="text-yellow-500 text-2xl" />
              </div>
              <h3 className="font-bold text-2xl text-gray-800 mb-2">
                Update Heart Story
              </h3>
              <p className="text-gray-600 text-sm">
                Edit your emotional experience with this meal
              </p>
            </div>

            {editingReview && (
              <form onSubmit={handleUpdateSubmit} className="space-y-6">
                {/* Rating Input */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    Heart Rating <span className="text-yellow-500">★</span>
                  </label>
                  <div className="flex gap-2 justify-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => {
                          const ratingInput = document.querySelector('input[name="rating"]');
                          if (ratingInput) ratingInput.value = star;
                        }}
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all duration-300 ${
                          star <= (editingReview.rating || 5)
                            ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-lg"
                            : "bg-gray-100 text-gray-400 hover:bg-yellow-100 hover:text-yellow-500"
                        }`}
                      >
                        <FaStar />
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    name="rating"
                    min="1"
                    max="5"
                    step="0.1"
                    defaultValue={editingReview.rating}
                    className="input input-bordered w-full mt-4 border-yellow-200 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                    required
                  />
                </div>

                {/* Comment Input */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    Emotional Story
                  </label>
                  <textarea
                    name="comment"
                    defaultValue={editingReview.comment}
                    className="textarea textarea-bordered w-full h-32 border-yellow-200 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                    placeholder="Share your updated emotional experience..."
                    required
                  ></textarea>
                </div>

                <div className="modal-action">
                  <button 
                    type="button" 
                    onClick={closeModal}
                    className="btn btn-outline border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="btn bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white border-none shadow-lg"
                  >
                    Update Heart Story
                  </button>
                </div>
              </form>
            )}
          </div>
        </dialog>

        {/* Bottom Quote */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-yellow-50 to-white px-8 py-6 rounded-2xl border border-yellow-200 max-w-2xl">
            <p className="text-gray-700 text-lg italic mb-2">
              "Every review is a story from the heart, a memory shared, 
              and an emotion expressed through the language of food."
            </p>
            <div className="text-yellow-500 font-semibold">
              - Keep sharing your culinary love stories
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReview;