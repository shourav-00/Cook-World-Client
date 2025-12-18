// import React from 'react';
// import { Link } from 'react-router';

// const CTAAction = () => {
//     return (
//         <div>
//             <div className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
//   <div className="container mx-auto px-4 text-center">
//     <h2 className="text-4xl font-bold mb-6">Join Our Community Today</h2>
//     <p className="text-xl mb-8 max-w-3xl mx-auto">
//       Whether you're a food lover or a home cook, we have something for everyone
//     </p>
//     <div className="flex flex-col sm:flex-row gap-4 justify-center">
//       <Link to={'/meals'} className="px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition">
//         Browse Meals 🍽️
//       </Link>
     
//     </div>
//   </div>
// </div>
//         </div>
//     );
// };

// export default CTAAction;




import React from 'react';
import { Link } from 'react-router';

const CTAAction = () => {
    return (
        <div className="transform rotate-180 origin-center">
            <div className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:40px_40px]"></div>
                </div>
                
                {/* Shining Stars Effect */}
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-yellow-400 rounded-full animate-pulse opacity-30"></div>
                <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-yellow-300 rounded-full animate-pulse opacity-40"></div>
                <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-yellow-500 rounded-full animate-pulse opacity-50"></div>

                <div className="container relative mx-auto px-4 text-center transform -rotate-180">
                    
                    {/* Decorative Top Line */}
                    <div className="flex justify-center mb-8">
                        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
                    </div>

                    {/* Main Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                        Let Your Heart Find Its Flavor
                    </h2>
                    
                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed text-gray-300">
                        Because the most beautiful stories are often shared over meals that speak to the soul
                    </p>

                    {/* Emotional Quote */}
                    <div className="mb-12 max-w-2xl mx-auto">
                        <div className="text-gray-400 text-lg italic mb-2">
                            "Food is the language of the heart that everyone understands"
                        </div>
                        <div className="text-yellow-400 text-sm">- Anonymous Food Lover</div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        
                        {/* Primary Button */}
                        <Link 
                            to={'/meals'} 
                            className="group relative px-10 py-4 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 text-black font-bold rounded-full hover:from-yellow-600 hover:via-yellow-500 hover:to-yellow-600 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-yellow-500/30"
                        >
                            <span className="relative flex items-center gap-3">
                                Explore Heartwarming Meals
                                <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
                            </span>
                        </Link>
                        
                        {/* Secondary Button */}
                        <Link 
                            to={'/chef'} 
                            className="group px-10 py-4 bg-transparent text-yellow-300 font-semibold rounded-full border-2 border-yellow-500/50 hover:border-yellow-400 hover:bg-yellow-500/10 transition-all duration-500 transform hover:scale-105"
                        >
                            <span className="flex items-center gap-3">
                                Share Your Culinary Story
                                <span className="text-yellow-400 group-hover:rotate-180 transition-transform"></span>
                            </span>
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-yellow-400 mb-2">1000+</div>
                            <div className="text-gray-400 text-sm">Heartfelt Stories</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                            <div className="text-gray-400 text-sm">Emotional Support</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
                            <div className="text-gray-400 text-sm">Soulful Chefs</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-yellow-400 mb-2">∞</div>
                            <div className="text-gray-400 text-sm">Love & Care</div>
                        </div>
                    </div>

                    {/* Bottom Decorative Line */}
                    <div className="mt-16 flex justify-center">
                        <div className="h-1 w-32 bg-gradient-to-r from-yellow-500/50 via-yellow-400 to-yellow-500/50 rounded-full"></div>
                    </div>

                    {/* Final Message */}
                    <div className="mt-12">
                        <p className="text-gray-500 text-sm">
                            Every meal is a chapter, every flavor a memory waiting to be made
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTAAction;