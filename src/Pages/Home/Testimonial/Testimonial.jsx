// import { useQuery } from "@tanstack/react-query";
// import React from "react";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";

// import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
// import TestimonialCard from "./TestimonialCard";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// const Testimonial = () => {
//   const axiosSecure = useAxiosSecure();
//   const { data: reviews = [] } = useQuery({
//     queryKey: ["reviews"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("reviews");
//       console.log(res.data);
//       return res.data
//     },
//   });

//   return (
//    <div className="xl:lg:md:max-w-7xl mx-auto justify-center items-center">
//      <div >
//       <Swiper
//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={3}
//         coverflowEffect={{
//           rotate: 20,
//           stretch: "50",
//           depth: 100,
//           modifier: 1,
//           scale: 0.75,
//           slideShadows: true,
//         }}
//         autoplay={{
//           delay: 2000,
//           disableOnInteraction: false,
//         }}
//         pagination={true}
//         modules={[EffectCoverflow, Pagination, Autoplay]}
//         className="mySwiper"
//       >
        
//           {reviews.map((review) => (
//           <SwiperSlide key={review.id}>
//             <TestimonialCard review={review}></TestimonialCard>
//           </SwiperSlide>
//         ))}
      
//       </Swiper>
//     </div>
//    </div>
//   );
// };

// export default Testimonial;






import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Testimonial = () => {
  const axiosSecure = useAxiosSecure();
  const { data: reviews = [] } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosSecure.get("reviews");
      console.log(res.data);
      return res.data;
    },
  });

  return (
    <div className="transform rotate-180 origin-center py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 transform -rotate-180">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full mb-4">
            <span className="font-semibold text-sm">❤️ CUSTOMER LOVE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Heartwarming <span className="text-yellow-500">Stories</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real emotions, real stories from people who've tasted love in every bite
          </p>
        </div>

        <div className="relative py-10">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              scale: 0.85,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              el: '.testimonial-pagination',
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="testimonialSwiper"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id} className="transform -rotate-180">
                <div className="px-4 py-6 h-full">
                  <TestimonialCard review={review} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Pagination with Yellow Dots */}
          <div className="testimonial-pagination flex justify-center mt-8 gap-2 transform -rotate-180">
            {/* Pagination dots will be inserted here by Swiper */}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transform -rotate-180">
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-yellow-500 mb-2">4.9</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-yellow-500 mb-2">500+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-2xl border border-yellow-200 bg-gradient-to-br from-white to-yellow-50">
            <div className="text-3xl font-bold text-yellow-600 mb-2">100%</div>
            <div className="text-gray-700 font-semibold">Satisfaction</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-yellow-500 mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12 transform -rotate-180">
          <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Share Your Story
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
