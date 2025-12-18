// import { useQuery } from "@tanstack/react-query";
// import React from "react";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";
// import { FaStar, FaClock, FaFire, FaArrowRight } from "react-icons/fa";
// import { Link } from "react-router";
// import Loading from "../../../Components/Loading/Loading";

// const TopRatedMeals = () => {
//   const axiosSecure = useAxiosSecure();

//   const { data: data = {}, isLoading } = useQuery({
//     queryKey: ["meals"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("/meals");
//       return res.data;
//     },
//   });

//   if (isLoading) {
//     return <Loading />;
//   }

//   const topMeals =
//     data.meals?.sort((a, b) => (b.Rating || 0) - (a.Rating || 0)).slice(0, 6) ||
//     [];

//   return (
//     <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-4">
//             <FaFire className="text-amber-500" />
//             <span className="font-semibold text-sm">TRENDING NOW</span>
//           </div>
//           <h2 className="text-5xl font-bold text-gray-800 mb-4">
//             Top Rated <span className="text-amber-500">Meals</span>
//           </h2>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//             Discover our most loved dishes, handcrafted by talented local chefs
//           </p>
//         </div>

//         {/* Meals Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//           {topMeals.map((meal, index) => (
//             <Link
//               key={meal._id}
//               to={`/meals-details/${meal._id}`}
//               className="group"
//             >
//               <div className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
//                 {/* Image Container */}
//                 <div className="relative h-64 overflow-hidden">
//                   <img
//                     src={meal.FoodImage}
//                     alt={meal.FoodName}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                   {/* Overlay Gradient */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

//                   {/* Rating Badge */}
//                   <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full flex items-center gap-1 shadow-lg">
//                     <FaStar className="text-amber-500 text-sm" />
//                     <span className="font-bold text-gray-800">
//                       {meal.Rating || "4.5"}
//                     </span>
//                   </div>

//                   {/* Rank Badge */}
//                   {index < 3 && (
//                     <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
//                       {index + 1}
//                     </div>
//                   )}

//                   {/* Price Tag */}
//                   <div className="absolute bottom-4 left-4 bg-amber-500 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
//                     ${meal.Price}
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-6">
//                   <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-amber-500 transition-colors">
//                     {meal.FoodName}
//                   </h3>

//                   <p className="text-gray-600 mb-4 flex items-center gap-2">
//                     <span className="font-semibold">By</span> {meal.ChefName}
//                   </p>

//                   {/* Delivery Time */}
//                   <div className="flex items-center gap-2 text-gray-500 mb-4">
//                     <FaClock className="text-amber-500" />
//                     <span className="text-sm">
//                       {meal.DeliveryTime || "30-40 mins"}
//                     </span>
//                   </div>

//                   {/* Ingredients Preview */}
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {meal.Ingredients?.slice(0, 3).map((ingredient, idx) => (
//                       <span
//                         key={idx}
//                         className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
//                       >
//                         {ingredient}
//                       </span>
//                     ))}
//                     {meal.Ingredients?.length > 3 && (
//                       <span className="text-xs bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-semibold">
//                         +{meal.Ingredients.length - 3} more
//                       </span>
//                     )}
//                   </div>

//                   {/* Order Button */}
//                   <button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold py-3 rounded-xl hover:from-amber-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg">
//                     Order Now
//                     <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//                   </button>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {/* View All Button */}
//         <div className="text-center">
//           <Link
//             to="/meals"
//             className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold px-8 py-4 rounded-full hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
//           >
//             View All Meals
//             <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopRatedMeals;

import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaStar, FaClock, FaFire, FaArrowRight, FaHeart, FaLeaf } from "react-icons/fa";
import { Link } from "react-router";
import Loading from "../../../Components/Loading/Loading";

const TopRatedMeals = () => {
  const axiosSecure = useAxiosSecure();

  const { data: data = {}, isLoading } = useQuery({
    queryKey: ["meals"],
    queryFn: async () => {
      const res = await axiosSecure.get("/meals");
      return res.data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  const topMeals =
    data.meals?.sort((a, b) => (b.Rating || 0) - (a.Rating || 0)).slice(0, 6) ||
    [];

  return (
    <div className="transform rotate-180 origin-center py-20 bg-gradient-to-b from-yellow-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 transform -rotate-180">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full mb-4 animate-pulse">
            <FaFire className="text-yellow-500 animate-bounce" />
            <span className="font-semibold text-sm">TRENDING NOW</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            Taste the <span className="text-yellow-500">Emotion</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Meals that don't just fill your stomach, but touch your heart. 
            Each dish tells a story of passion and tradition.
          </p>
        </div>

        {/* Meals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {topMeals.map((meal, index) => (
            <Link
              key={meal._id}
              to={`/meals-details/${meal._id}`}
              className="group transform -rotate-180"
            >
              {/* Different card styles based on index */}
              <div className={`
                rounded-3xl overflow-hidden transition-all duration-500 
                ${index % 3 === 0 
                  ? "bg-gradient-to-br from-white to-yellow-50 shadow-lg hover:shadow-2xl" 
                  : index % 3 === 1 
                  ? "bg-gradient-to-bl from-white to-yellow-50 shadow-lg hover:shadow-2xl" 
                  : "bg-gradient-to-tr from-white to-yellow-50 shadow-lg hover:shadow-2xl"
                }
                hover:-translate-y-4 hover:scale-[1.02]
              `}>
                
                {/* Image Container with Floating Effect */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={meal.FoodImage}
                    alt={meal.FoodName}
                    className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* Animated Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Floating Rating Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full flex items-center gap-1 shadow-lg animate-float">
                    <FaStar className="text-yellow-500 text-sm animate-spin-slow" />
                    <span className="font-bold text-gray-800">
                      {meal.Rating || "4.5"}
                    </span>
                  </div>

                  {/* Emotional Rank Badge */}
                  {index < 3 && (
                    <div className={`
                      absolute top-4 left-4 text-white w-10 h-10 rounded-full 
                      flex items-center justify-center font-bold text-lg shadow-lg
                      ${index === 0 
                        ? "bg-gradient-to-r from-yellow-500 to-yellow-600 animate-bounce" 
                        : index === 1 
                        ? "bg-gradient-to-r from-yellow-400 to-yellow-500 animate-pulse" 
                        : "bg-gradient-to-r from-yellow-300 to-yellow-400"
                      }
                    `}>
                      {index + 1}
                    </div>
                  )}

                  {/* Love Button */}
                  <div className="absolute top-16 left-4 bg-white/90 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-red-50">
                    <FaHeart className="text-red-400 hover:text-red-500 cursor-pointer" />
                  </div>

                  {/* Price Tag with Bounce Effect */}
                  <div className="absolute bottom-4 left-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                    ${meal.Price}
                  </div>

                  {/* Chef Badge */}
                  <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Chef's Pick
                  </div>
                </div>

                {/* Content with Slide-in Effect */}
                <div className="p-6 transform transition-all duration-500 group-hover:bg-gradient-to-b from-white to-yellow-50">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                    {meal.FoodName}
                  </h3>

                  {/* Chef with Heart Icon */}
                  <p className="text-gray-600 mb-4 flex items-center gap-2">
                    <span className="font-semibold flex items-center gap-1">
                      <FaHeart className="text-red-400 text-xs" />
                      Prepared with love by
                    </span> 
                    <span className="font-bold text-yellow-600">{meal.ChefName}</span>
                  </p>

                  {/* Delivery Time with Animation */}
                  <div className="flex items-center gap-2 text-gray-500 mb-4 animate-pulse-slow">
                    <FaClock className="text-yellow-500" />
                    <span className="text-sm">
                      {meal.DeliveryTime || "30-40 mins"} • Fresh & Hot
                    </span>
                  </div>

                  {/* Ingredients with Organic Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex flex-wrap gap-2">
                      {meal.Ingredients?.slice(0, 2).map((ingredient, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full border border-yellow-200"
                        >
                          {ingredient}
                        </span>
                      ))}
                      {meal.Ingredients?.length > 2 && (
                        <span className="text-xs bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-3 py-1 rounded-full font-semibold">
                          +{meal.Ingredients.length - 2} more
                        </span>
                      )}
                    </div>
                    {meal.Category?.toLowerCase().includes('vegetarian') && (
                      <FaLeaf className="text-green-500 text-lg" />
                    )}
                  </div>

                  {/* Emotional Order Button */}
                  <button className="w-full bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 text-white font-bold py-3 rounded-xl hover:from-yellow-600 hover:via-yellow-500 hover:to-yellow-600 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 animate-glow">
                    <span>Experience This Taste</span>
                    <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>

                {/* Bottom Decorative Line */}
                <div className="h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button with Heartbeat Animation */}
        <div className="text-center transform -rotate-180">
          <Link
            to="/meals"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 text-white font-bold px-8 py-4 rounded-full hover:from-yellow-600 hover:via-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 animate-heartbeat"
          >
            <FaHeart className="text-red-300" />
            Discover More Heartwarming Meals
            <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopRatedMeals;