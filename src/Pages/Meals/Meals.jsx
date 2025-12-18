// import React, { useEffect, useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";
// import Loading from "../../Components/Loading/Loading";
// import MealCard from "../../Components/MealCard/MealCard";

// const Meals = () => {
//   const axiosSecure = useAxiosSecure();
//   const [search, setSearch] = useState(""); 
//   const [debouncedSearch, setDebouncedSearch] = useState(""); 
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 9;


//  useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedSearch(search);
//       setCurrentPage(1); 
//     }, 1000);

//     return () => {
//       clearTimeout(handler);
//     };
//   }, [search]);

//   const {
//     data: data = {},
//     isLoading,
//     isError,
//   } = useQuery({
//     queryKey: ["meals", debouncedSearch, currentPage], 
//     queryFn: async () => {
//       const res = await axiosSecure.get(
//         `/meals?page=${currentPage}&limit=${itemsPerPage}&search=${debouncedSearch}`
//       );
//       return res.data;
//     },
//     keepPreviousData: true,
//   });

//   const { meals = [], totalPages } = data;

//   if (isLoading)
//     return (
//       <div>
//         <Loading/>
//       </div>
//     );
//   if (isError) return <div></div>;

//   return (
//     <div className="bg-gray-50 min-h-screen mt-20">
//       {/* Trending Section */}
//       <section className="bg-gradient-to-r from-amber-600 to-orange-500 py-16 text-white text-center">
//         <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-md">
//           Discover Culinary Masterpieces
//         </h1>
//         <p className="text-lg md:text-xl font-light max-w-2xl mx-auto opacity-90">
//           Explore trending dishes from top local chefs. Taste the passion in every bite.
//         </p>
//       </section>

//       <div className="container mx-auto px-4 py-8 -mt-8 relative z-10">
//         {/* Search Bar */}
//         <div className="max-w-xl mx-auto mb-10 bg-white p-4 rounded-xl shadow-lg flex items-center gap-2 mt-12">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//           </svg>
//           <input
//             type="text"
//             placeholder="Search for chefs or meals..."
//             className="w-full text-lg outline-none text-gray-700 placeholder-gray-400"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//         </div>

//         {/* Meals Grid */}
//         {meals.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {meals.map((meal) => (
//               <MealCard key={meal._id} meal={meal} />
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-20">
//             <h3 className="text-2xl font-bold text-gray-500">No meals found matching your search.</h3>
//           </div>
//         )}

//         {/* Pagination Controls */}
//         <div className="flex justify-center items-center mt-12 gap-4">
//           <button
//             onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//             disabled={currentPage === 1}
//             className="px-6 py-2.5 rounded-lg bg-white border border-gray-200 text-gray-700 font-semibold shadow-sm hover:shadow hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
//           >
//             Previous
//           </button>
//           <span className="text-gray-600 font-medium">
//             Page <span className="text-amber-600 font-bold">{currentPage}</span> of{" "}
//             {totalPages || 1}
//           </span>
//           <button
//             onClick={() =>
//               setCurrentPage((prev) => (totalPages ? Math.min(prev + 1, totalPages) : prev + 1))
//             }
//             disabled={currentPage === totalPages || totalPages === 0}
//             className="px-6 py-2.5 rounded-lg bg-white border border-gray-200 text-gray-700 font-semibold shadow-sm hover:shadow hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
//           >
//             Next
//           </button>
//         </div>
//       </div>

//       {/* Customer Reviews Section */}
//       <section className="bg-white py-16 mt-16 border-t border-gray-100">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold text-gray-800 mb-12">Why Foodies Love Us</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               { title: "Fresh Ingredients", desc: "Sourced locally for the best flavor.", icon: "🥗" },
//               { title: "Top Rated Chefs", desc: "Curated professionals with a passion for food.", icon: "👨‍🍳" },
//               { title: "Fast Delivery", desc: "Hot and fresh, right to your doorstep.", icon: "🚀" }
//             ].map((item, idx) => (
//               <div key={idx} className="p-6 rounded-2xl bg-amber-50/50 hover:bg-amber-50 transition-colors">
//                 <div className="text-5xl mb-4">{item.icon}</div>
//                 <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
//                 <p className="text-gray-600">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Meals;







import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loading from "../../Components/Loading/Loading";
import MealCard from "../../Components/MealCard/MealCard";
import { FaSearch, FaHeart, FaFire, FaStar } from "react-icons/fa";

const Meals = () => {
  const axiosSecure = useAxiosSecure();
  const [search, setSearch] = useState(""); 
  const [debouncedSearch, setDebouncedSearch] = useState(""); 
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
      setCurrentPage(1); 
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  const {
    data: data = {},
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["meals", debouncedSearch, currentPage], 
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/meals?page=${currentPage}&limit=${itemsPerPage}&search=${debouncedSearch}`
      );
      return res.data;
    },
    keepPreviousData: true,
  });

  const { meals = [], totalPages } = data;

  if (isLoading)
    return (
      <div>
        <Loading/>
      </div>
    );
  if (isError) return <div></div>;

  return (
    <div className="transform rotate-180 origin-center bg-gradient-to-b from-yellow-50 to-white min-h-screen">
      <div className="transform -rotate-180">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-black via-gray-900 to-black py-20 text-white text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:40px_40px]"></div>
          </div>
          
          <div className="container relative mx-auto px-4">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-900/50 to-yellow-800/50 text-yellow-300 px-4 py-2 rounded-full mb-6 border border-yellow-700/50">
              <FaFire className="text-yellow-400 animate-pulse" />
              <span className="font-bold text-sm">HEARTFUL CULINARY JOURNEY</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
              Taste the <span className="text-yellow-400">Emotion</span> in Every Bite
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto opacity-90 mb-10">
              Discover dishes where every ingredient tells a story and every chef pours their soul into creation
            </p>
            
            {/* Stats */}
            <div className="flex justify-center gap-12 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">100+</div>
                <div className="text-gray-300 text-sm">Soulful Recipes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">4.9</div>
                <div className="text-gray-300 text-sm">Heart Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">24/7</div>
                <div className="text-gray-300 text-sm">Love Delivery</div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 -mt-8 relative z-10">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl blur-md opacity-20"></div>
              <div className="relative bg-white p-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-yellow-100">
                <FaSearch className="h-6 w-6 text-yellow-500" />
                <input
                  type="text"
                  placeholder="Search for emotional dishes or heartfelt chefs..."
                  className="w-full text-lg outline-none text-gray-700 placeholder-gray-400 bg-transparent"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <div className="text-yellow-500 text-sm font-medium">
                  {search ? "Finding love..." : "Type with heart"}
                </div>
              </div>
            </div>
          </div>

          {/* Meals Grid */}
          {meals.length > 0 ? (
            <div>
              {/* Grid Header */}
              <div className="flex justify-between items-center mb-10">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">
                    Emotional <span className="text-yellow-500">Discoveries</span>
                  </h2>
                  <p className="text-gray-600 mt-2">
                    {meals.length} heartfelt meals waiting to touch your soul
                  </p>
                </div>
                <div className="flex items-center gap-2 bg-yellow-50 text-yellow-700 px-4 py-2 rounded-full">
                  <FaStar className="text-yellow-500" />
                  <span className="font-semibold">Sorted by Heart Rating</span>
                </div>
              </div>

              {/* Meals Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {meals.map((meal) => (
                  <MealCard key={meal._id} meal={meal} />
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className="text-6xl mb-6">💔</div>
                <h3 className="text-3xl font-bold text-gray-700 mb-4">No emotional matches found</h3>
                <p className="text-gray-600 mb-8">
                  Our chefs haven't created a dish that matches your search yet. 
                  But they're always cooking up new heartfelt creations!
                </p>
                <button 
                  onClick={() => setSearch("")}
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold px-8 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all"
                >
                  Show All Heartfelt Meals
                </button>
              </div>
            </div>
          )}

          {/* Pagination */}
          <div className="flex justify-center items-center mt-16 gap-6">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="group px-8 py-3 rounded-xl bg-white border-2 border-yellow-200 text-gray-700 font-semibold shadow-sm hover:shadow-lg hover:bg-yellow-50 hover:border-yellow-400 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-2"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              Previous
            </button>
            
            <div className="flex items-center gap-4">
              {Array.from({ length: Math.min(5, totalPages || 1) }, (_, i) => {
                const pageNum = i + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-10 h-10 rounded-full font-bold transition-all ${
                      currentPage === pageNum
                        ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-lg scale-110'
                        : 'bg-white border border-yellow-100 text-gray-700 hover:bg-yellow-50 hover:border-yellow-300'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
              {totalPages > 5 && (
                <span className="text-gray-500 mx-2">...</span>
              )}
            </div>
            
            <div className="text-gray-600 font-medium bg-yellow-50 px-4 py-2 rounded-full">
              Page <span className="text-yellow-600 font-bold text-xl">{currentPage}</span> 
              <span className="text-gray-500"> of </span>
              <span className="text-gray-800 font-bold">{totalPages || 1}</span>
            </div>
            
            <button
              onClick={() =>
                setCurrentPage((prev) => (totalPages ? Math.min(prev + 1, totalPages) : prev + 1))
              }
              disabled={currentPage === totalPages || totalPages === 0}
              className="group px-8 py-3 rounded-xl bg-white border-2 border-yellow-200 text-gray-700 font-semibold shadow-sm hover:shadow-lg hover:bg-yellow-50 hover:border-yellow-400 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-2"
            >
              Next
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <section className="bg-gradient-to-b from-white to-yellow-50 py-20 mt-16 border-t border-yellow-100">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-yellow-50 text-yellow-800 px-4 py-2 rounded-full mb-6 border border-yellow-200">
              <FaHeart className="text-yellow-500" />
              <span className="font-bold text-sm">THE HEARTBEAT OF OUR KITCHEN</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-12">
              Why Every Meal <span className="text-yellow-500">Feels Like Home</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
              {[
                { 
                  title: "Heart-Cooked Freshness", 
                  desc: "Every meal prepared with genuine love and family-style care, just like grandma used to make.", 
                  icon: "❤️",
                  color: "from-red-50 to-white"
                },
                { 
                  title: "Soulful Local Chefs", 
                  desc: "Passionate culinary artists who pour their stories and emotions into every dish they create.", 
                  icon: "👨‍🍳",
                  color: "from-yellow-50 to-white"
                },
                { 
                  title: "Warm Heart Delivery", 
                  desc: "More than just food delivery - we deliver comfort, joy, and heartfelt connections to your door.", 
                  icon: "🚚",
                  color: "from-blue-50 to-white"
                }
              ].map((item, idx) => (
                <div key={idx} className={`bg-gradient-to-br ${item.color} p-8 rounded-2xl border border-gray-100 hover:border-yellow-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2`}>
                  <div className="text-5xl mb-6">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <span className="text-yellow-500 text-sm font-semibold">Made with Love</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Bottom Quote */}
            <div className="mt-16 max-w-3xl mx-auto">
              <div className="relative">
                <div className="text-gray-300 text-8xl absolute -top-6 left-1/2 transform -translate-x-1/2">"</div>
                <p className="text-2xl text-gray-700 italic relative z-10">
                  Food isn't just about taste—it's about the emotions it awakens, 
                  the memories it creates, and the connections it forges between hearts.
                </p>
                <div className="mt-8 flex items-center justify-center gap-4">
                  <div className="h-px w-20 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
                  <span className="text-yellow-500 font-bold">Our Cooking Philosophy</span>
                  <div className="h-px w-20 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Meals;
