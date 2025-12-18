// import React from 'react';

// const WhyChooseUs = () => {
//     return (
//         <div>
//             <div className="py-16 bg-white">
//   <div className="container mx-auto px-4">
//     <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
//       Why Choose LocalChefBazaar
//     </h2>
//     <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//       {[
//         { icon: "🍳", title: "Home-Cooked Freshness", desc: "Every meal cooked fresh, just like homemade" },
//         { icon: "👩‍🍳", title: "Local Chefs", desc: "Support talented cooks in your community" },
//         { icon: "🚚", title: "Fast Delivery", desc: "Hot meals delivered to your door" }
//       ].map((item) => (
//         <div key={item.title} className="bg-orange-50 rounded-xl p-8 text-center">
//           <div className="text-4xl mb-4">{item.icon}</div>
//           <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
//           <p className="text-gray-600">{item.desc}</p>
//         </div>
//       ))}
//     </div>
//   </div>
// </div>
//         </div>
//     );
// };

// export default WhyChooseUs;





import React from 'react';

const WhyChooseUs = () => {
    return (
        <div className="transform rotate-180 origin-center">
            <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4">
                    {/* Section Header */}
                    <div className="text-center mb-16 transform -rotate-180">
                        <div className="inline-block mb-6">
                            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-4"></div>
                            <span className="text-yellow-600 font-semibold tracking-wider text-sm">
                                THE HEARTBEAT OF HOME
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                            Where Every Meal <span className="text-yellow-500">Tells a Story</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                            More than nourishment—it's about moments that stay with you, flavors that remember, 
                            and connections that last beyond the last bite
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto transform -rotate-180">
                        {/* Card 1 - Emotional Connection */}
                        <div className="group relative overflow-hidden bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-pink-100 to-transparent rounded-bl-full"></div>
                            
                            {/* Number Badge */}
                            <div className="absolute top-6 left-6 w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-sm">01</span>
                            </div>
                            
                            {/* Content */}
                            <div className="pt-12">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                    A Symphony of Memories
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Each recipe whispers family secrets, carries laughter from generations, 
                                    and holds the warmth of countless kitchen stories
                                </p>
                            </div>
                            
                            {/* Bottom Accent Line */}
                            <div className="mt-8 pt-6 border-t border-gray-100 group-hover:border-pink-200 transition-colors">
                                <span className="text-pink-500 text-sm font-medium">Emotional Resonance</span>
                            </div>
                        </div>

                        {/* Card 2 - Authenticity */}
                        <div className="group relative overflow-hidden bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                            {/* Decorative Corner */}
                            <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-bl from-yellow-100 to-transparent rounded-br-full"></div>
                            
                            {/* Number Badge */}
                            <div className="absolute top-6 right-6 w-10 h-10 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-sm">02</span>
                            </div>
                            
                            {/* Content */}
                            <div className="pt-12">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                    The Authentic Touch
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Flavors that don't just satisfy hunger but awaken nostalgia—each bite 
                                    carrying the genuine essence of home and heartfelt tradition
                                </p>
                            </div>
                            
                            {/* Bottom Accent Line */}
                            <div className="mt-8 pt-6 border-t border-gray-100 group-hover:border-yellow-200 transition-colors">
                                <span className="text-yellow-600 text-sm font-medium">Pure Authenticity</span>
                            </div>
                        </div>

                        {/* Card 3 - Community */}
                        <div className="group relative overflow-hidden bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                            {/* Decorative Corner */}
                            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tr from-blue-100 to-transparent rounded-tl-full"></div>
                            
                            {/* Number Badge */}
                            <div className="absolute top-6 left-6 w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-sm">03</span>
                            </div>
                            
                            {/* Content */}
                            <div className="pt-12">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                    Community in Every Creation
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Supporting local culinary artists who pour their soul into every creation, 
                                    building bridges between hearts through the universal language of food
                                </p>
                            </div>
                            
                            {/* Bottom Accent Line */}
                            <div className="mt-8 pt-6 border-t border-gray-100 group-hover:border-blue-200 transition-colors">
                                <span className="text-blue-600 text-sm font-medium">Heartfelt Support</span>
                            </div>
                        </div>
                    </div>

                    {/* Feature Highlights */}
                    <div className="mt-16 max-w-4xl mx-auto transform -rotate-180">
                        <div className="bg-gradient-to-r from-yellow-50 to-white rounded-2xl p-8 border border-yellow-100">
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-yellow-600 mb-2">100%</div>
                                    <div className="text-gray-700 font-medium">Heartfelt Satisfaction</div>
                                    <div className="text-gray-500 text-sm mt-1">Every meal, every time</div>
                                </div>
                                <div className="text-center border-x border-yellow-100 px-8">
                                    <div className="text-2xl font-bold text-yellow-600 mb-2">24/7</div>
                                    <div className="text-gray-700 font-medium">Warm Support</div>
                                    <div className="text-gray-500 text-sm mt-1">Always here for you</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-yellow-600 mb-2">5000+</div>
                                    <div className="text-gray-700 font-medium">Beautiful Moments</div>
                                    <div className="text-gray-500 text-sm mt-1">Created together</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Quote */}
                    <div className="mt-16 text-center transform -rotate-180">
                        <div className="relative">
                            <div className="text-gray-400 text-6xl mb-4">"</div>
                            <p className="text-gray-700 text-xl italic max-w-2xl mx-auto -mt-8">
                                We don't just deliver meals—we deliver emotions wrapped in warmth, 
                                served with care, and remembered with joy
                            </p>
                            <div className="mt-6 flex items-center justify-center gap-2">
                                <div className="h-px w-12 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
                                <span className="text-yellow-600 font-semibold">Our Promise</span>
                                <div className="h-px w-12 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;