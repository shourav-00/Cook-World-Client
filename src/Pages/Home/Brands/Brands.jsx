// import React from 'react';

// import "swiper/css";
// import "swiper/css/autoplay";
// import burguer from '../../../assets/Brands/burger.jpg'
// import bolets from '../../../assets/Brands/bolets.jpg'
// import chilli from '../../../assets/Brands/chilli.jpg'
// import kfc from '../../../assets/Brands/hfc.jpg'
// import macdonal from '../../../assets/Brands/macdonal.jpg'
// import oreo from '../../../assets/Brands/oreo.jpg'
// import pizza from '../../../assets/Brands/pizza.jpg'
// import pollo from '../../../assets/Brands/pollo.jpg'
// import pringles from '../../../assets/Brands/pringles.jpg'
// import { SwiperSlide } from 'swiper/react';
// import "swiper/css";
// import "swiper/css/autoplay";
// import { Autoplay, Pagination } from "swiper/modules";
// import { Swiper, } from "swiper/react";


// const Brands = () => {

// const brandsLogo = [
//     burguer,
//     bolets,
//     chilli,
//     kfc,
//     macdonal,
//     oreo,
//     pizza,
//     pollo,
//     pringles
//   ];


//     return (
//         <div>
//               <Swiper
//       slidesPerView={4}
//       centeredSlides={true}
//       spaceBetween={60}
//       loop={true}
//       speed={7000}
//       autoplay={{
//         delay: 0,
//         disableOnInteraction: false,
//       }}
//       allowTouchMove={false}
//       modules={[Autoplay]}
//       className="mySwiper"
//     >
//       {brandsLogo.map((logo, index) => (
//         <SwiperSlide key={index}>
//           <img src={logo} alt="" />
//         </SwiperSlide>
//       ))}

     
//     </Swiper>
  
//         </div>
//     );
// };

// export default Brands;




import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import burguer from '../../../assets/Brands/burger.jpg';
import bolets from '../../../assets/Brands/bolets.jpg';
import chilli from '../../../assets/Brands/chilli.jpg';
import kfc from '../../../assets/Brands/hfc.jpg';
import macdonal from '../../../assets/Brands/macdonal.jpg';
import oreo from '../../../assets/Brands/oreo.jpg';
import pizza from '../../../assets/Brands/pizza.jpg';
import pollo from '../../../assets/Brands/pollo.jpg';
import pringles from '../../../assets/Brands/pringles.jpg';

const Brands = () => {
  const brandsLogo = [
    burguer, bolets, chilli, kfc, macdonal, oreo, pizza, pollo, pringles
  ];

  // Custom brand colors for borders
  const brandColors = [
    'border-red-500', 'border-green-500', 'border-red-600', 
    'border-red-700', 'border-yellow-500', 'border-black',
    'border-orange-500', 'border-yellow-400', 'border-orange-400'
  ];

  return (
    <div className="transform rotate-180 origin-center">
      <div className="container mx-auto px-4 py-12 transform -rotate-180">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-yellow-50 text-yellow-800 px-4 py-2 rounded-full mb-4 border border-yellow-200">
            <span className="font-bold text-sm">TRUSTED BY THE BEST</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Brands That <span className="text-yellow-500">Share Our Passion</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Partnering with culinary legends who believe in the power of heartfelt cooking
          </p>
        </div>

        {/* Brands Slider */}
        <div className="relative py-8">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white to-transparent z-10"></div>
          
          <Swiper
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 6 }
            }}
            centeredSlides={false}
            spaceBetween={40}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            allowTouchMove={true}
            modules={[Autoplay]}
            className="brandsSwiper"
          >
            {brandsLogo.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="relative group">
                  {/* Logo Container */}
                  <div className={`
                    bg-white rounded-2xl p-4 shadow-lg 
                    border-2 ${brandColors[index % brandColors.length]}
                    transition-all duration-500 
                    group-hover:shadow-2xl group-hover:-translate-y-3
                    group-hover:scale-110 group-hover:z-20
                  `}>
                    {/* Logo Image */}
                    <div className="relative h-28 flex items-center justify-center p-4">
                      <img 
                        src={logo} 
                        alt={`Brand ${index + 1}`}
                        className="max-h-20 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                      
                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-yellow-100/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    
                    {/* Brand Name Badge */}
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        Brand Partner
                      </div>
                    </div>
                  </div>
                  
                  {/* Pulse Effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-yellow-400 opacity-0 group-hover:opacity-30 animate-pulse -m-1"></div>
                </div>
              </SwiperSlide>
            ))}
            
            {/* Additional Custom Logo */}
            <SwiperSlide>
              <div className="relative group">
                <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl p-4 shadow-lg border-2 border-yellow-400 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-3 group-hover:scale-110 group-hover:z-20">
                  <div className="relative h-28 flex items-center justify-center p-4">
                    <div className="text-center">
                      <div className="text-4xl mb-2">❤️</div>
                      <div className="text-white font-bold text-sm">LocalChefBazar</div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-yellow-400/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Our Home
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-2xl border-2 border-yellow-300 opacity-0 group-hover:opacity-50 animate-pulse -m-1"></div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-gradient-to-r from-yellow-50 to-white rounded-2xl p-6 border border-yellow-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-yellow-600">9+</div>
              <div className="text-gray-700">Global Brands</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-600">100%</div>
              <div className="text-gray-700">Quality Commitment</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-600">24/7</div>
              <div className="text-gray-700">Partnership</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-600">∞</div>
              <div className="text-gray-700">Shared Passion</div>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 italic max-w-2xl mx-auto">
            "Great food connects us all - that's why we partner with brands that share our vision of bringing people together through culinary excellence"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Brands;