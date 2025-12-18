// import React from "react";
// import { FaQuoteLeft, FaStar } from "react-icons/fa";

// const TestimonialCard = ({ review }) => {
//   const { reviewerName, comment, reviewerImage, rating } = review;
//   return (
//     <div >
//       <div className="card w-full max-w-md bg-base-100 shadow-md rounded-xl py-12 px-7 ">
//         <div className="flex items-start gap-3">
//           <FaQuoteLeft className="text-2xl mb-4  text-orange-400" />

//           <p className="text-sm ">{comment}</p>
//         </div>

//         <div className="divider my-4"></div>

//         <div className="flex items-center gap-3">
//           <div className="border-4 border-yellow-400 rounded-full">
//             <img src={reviewerImage} alt="" className="rounded-full w-14 " />
//           </div>
//           <div>
//             <h2 className="font-semibold text-gray-800">{reviewerName}</h2>

//             <p className="flex gap-2 justify-center items-center">
//               {" "}
//               Ratting : <FaStar className="text-yellow-400"/>
//               {rating}{" "}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialCard;





import React from "react";
import { FaQuoteLeft, FaStar, FaHeart, FaSmile } from "react-icons/fa";

const TestimonialCard = ({ review }) => {
  const { reviewerName, comment, reviewerImage, rating } = review;
  
  // Generate star rating
  const stars = Array.from({ length: 5 }, (_, index) => (
    <FaStar 
      key={index} 
      className={index < Math.floor(rating) ? "text-yellow-500" : "text-gray-300"}
    />
  ));

  return (
    <div className="transform -rotate-180">
      <div className="bg-gradient-to-br from-white to-yellow-50 shadow-lg rounded-2xl p-8 border border-yellow-100 hover:shadow-2xl hover:border-yellow-200 transition-all duration-500 hover:-translate-y-2">
        
        {/* Quote Section with Emotional Design */}
        <div className="mb-6">
          <div className="flex items-start gap-4">
            <div className="relative">
              <FaQuoteLeft className="text-4xl text-yellow-400 opacity-30" />
              <FaHeart className="text-lg text-red-400 absolute -top-1 -right-1 animate-pulse" />
            </div>
            
            <div>
              <p className="text-gray-700 text-lg leading-relaxed italic font-light">
                "{comment}"
              </p>
              
              {/* Emotional Reaction */}
              <div className="flex items-center gap-2 mt-4">
                <FaSmile className="text-yellow-500 text-xl" />
                <span className="text-sm text-yellow-700 font-medium">
                  Made with love ❤️
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider with Yellow Accent */}
        <div className="relative my-8">
          <div className="h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-2">
            <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
          </div>
        </div>

        {/* Reviewer Info */}
        <div className="flex items-center gap-4">
          {/* Profile Image with Yellow Border */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <img 
              src={reviewerImage} 
              alt={reviewerName}
              className="relative w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
            />
          </div>

          <div className="flex-1">
            {/* Name with Emotional Prefix */}
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-gray-800">
                {reviewerName}
              </h2>
              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                Food Lover
              </span>
            </div>

            {/* Star Rating with Count */}
            <div className="flex items-center gap-3 mt-2">
              <div className="flex items-center gap-1">
                {stars}
              </div>
              <span className="text-yellow-600 font-bold text-lg">
                {rating}
                <span className="text-gray-500 text-sm font-normal">/5</span>
              </span>
            </div>

            {/* Emotional Status */}
            <div className="mt-2">
              <span className="text-sm text-gray-600">
                <span className="text-yellow-600 font-medium">Verdict:</span> Would melt my heart again! 💛
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-6 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;