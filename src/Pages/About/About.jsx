// import React from 'react';
// import { FaUsers, FaUtensils, FaHeart, FaShippingFast, FaLeaf, } from 'react-icons/fa';
// import { Link } from 'react-router';

// const About = () => {
//     return (
//         <div className="min-h-screen bg-gray-50 mt-20">
//             {/* Hero Section */}
//             <section className="relative py-20 bg-gradient-to-r bg-yellow-500 text-white">
//                 <div className="container mx-auto px-4 text-center">
//                     <h1 className="text-5xl font-bold mb-6">About ChefCorner</h1>
//                     <p className="text-xl max-w-3xl mx-auto">
//                         Connecting food lovers with passionate home cooks in your community
//                     </p>
//                 </div>
//             </section>
// g
//             {/* Our Story Section */}
//             <section className="py-16">
//                 <div className="container mx-auto px-4">
//                     <div className="max-w-4xl mx-auto">
//                         <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Story</h2>
//                         <div className="bg-white rounded-2xl shadow-lg p-8">
//                             <p className="text-lg text-gray-600 mb-6">
//                                 ChefCorner was born from a simple idea: everyone deserves access to delicious, 
//                                 home-cooked meals, and talented home cooks deserve recognition for their culinary skills.
//                             </p>
//                             <p className="text-lg text-gray-600 mb-6">
//                                 Founded in 2023, we noticed that many incredible home chefs were sharing their culinary 
//                                 creations with friends and family but lacked a platform to reach a wider audience. 
//                                 At the same time, busy individuals craved authentic homemade meals but didn't have 
//                                 the time or skill to cook them.
//                             </p>
//                             <p className="text-lg text-gray-600">
//                                 Today, we're proud to be the bridge connecting food lovers with passionate home cooks, 
//                                 creating a community that celebrates homemade food and supports local culinary talent.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Our Mission Section */}
//             <section className="py-16 bg-white">
//                 <div className="container mx-auto px-4">
//                     <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Mission</h2>
//                     <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
//                         <div className="bg-orange-50 rounded-xl p-8 border-l-4 border-orange-500">
//                             <div className="flex items-center mb-4">
//                                 <div className="p-3 bg-orange-100 rounded-lg mr-4">
//                                     <FaUsers className="text-orange-600 text-2xl" />
//                                 </div>
//                                 <h3 className="text-2xl font-semibold text-gray-800">For Home Cooks</h3>
//                             </div>
//                             <p className="text-gray-600">
//                                 To empower talented home cooks by providing them with a platform to showcase their skills, 
//                                 earn income from their passion, and grow their culinary businesses without the overhead 
//                                 costs of a traditional restaurant.
//                             </p>
//                         </div>
//                         <div className="bg-orange-50 rounded-xl p-8 border-l-4 border-orange-500">
//                             <div className="flex items-center mb-4">
//                                 <div className="p-3 bg-orange-100 rounded-lg mr-4">
//                                     <FaUtensils className="text-orange-600 text-2xl" />
//                                 </div>
//                                 <h3 className="text-2xl font-semibold text-gray-800">For Food Lovers</h3>
//                             </div>
//                             <p className="text-gray-600">
//                                 To provide easy access to diverse, high-quality homemade meals prepared with love and care, 
//                                 supporting healthier eating habits and bringing communities together through shared food experiences.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Core Values */}
//             <section className="py-16">
//                 <div className="container mx-auto px-4">
//                     <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Core Values</h2>
//                     <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//                         <div className="text-center p-6">
//                             <div className="w-20 h-20 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
//                                 <FaHeart className="text-orange-600 text-3xl" />
//                             </div>
//                             <h3 className="text-xl font-semibold mb-3 text-gray-800">Quality & Freshness</h3>
//                             <p className="text-gray-600">
//                                 Every meal is prepared fresh with high-quality ingredients, just like you'd make at home.
//                             </p>
//                         </div>
//                         <div className="text-center p-6">
//                             <div className="w-20 h-20 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
//                                 <FaUsers className="text-orange-600 text-3xl" />
//                             </div>
//                             <h3 className="text-xl font-semibold mb-3 text-gray-800">Community Focus</h3>
//                             <p className="text-gray-600">
//                                 Building connections within local communities and supporting neighborhood culinary talent.
//                             </p>
//                         </div>
//                         <div className="text-center p-6">
//                             <div className="w-20 h-20 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
//                                 <FaLeaf className="text-orange-600 text-3xl" />
//                             </div>
//                             <h3 className="text-xl font-semibold mb-3 text-gray-800">Sustainability</h3>
//                             <p className="text-gray-600">
//                                 Reducing food waste by cooking to order and using local ingredients whenever possible.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* How It Works */}
//             <section className="py-16 bg-white">
//                 <div className="container mx-auto px-4">
//                     <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">How It Works</h2>
//                     <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
//                         <div className="text-center p-6">
//                             <div className="w-16 h-16 mx-auto mb-4 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
//                                 1
//                             </div>
//                             <h3 className="text-lg font-semibold mb-2 text-gray-800">Browse Meals</h3>
//                             <p className="text-gray-600 text-sm">
//                                 Explore daily menus from local chefs in your area
//                             </p>
//                         </div>
//                         <div className="text-center p-6">
//                             <div className="w-16 h-16 mx-auto mb-4 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
//                                 2
//                             </div>
//                             <h3 className="text-lg font-semibold mb-2 text-gray-800">Place Order</h3>
//                             <p className="text-gray-600 text-sm">
//                                 Select your favorite meals and place your order
//                             </p>
//                         </div>
//                         <div className="text-center p-6">
//                             <div className="w-16 h-16 mx-auto mb-4 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
//                                 3
//                             </div>
//                             <h3 className="text-lg font-semibold mb-2 text-gray-800">Cook Prepares</h3>
//                             <p className="text-gray-600 text-sm">
//                                 Chef prepares your meal fresh with quality ingredients
//                             </p>
//                         </div>
//                         <div className="text-center p-6">
//                             <div className="w-16 h-16 mx-auto mb-4 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
//                                 4
//                             </div>
//                             <h3 className="text-lg font-semibold mb-2 text-gray-800">Enjoy Meal</h3>
//                             <p className="text-gray-600 text-sm">
//                                 Receive delivery and enjoy delicious homemade food
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Team Section */}
//             <section className="py-16">
//                 <div className="container mx-auto px-4">
//                     <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Meet Our Team</h2>
//                     <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//                         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//                             <div className="p-6">
//                                 <div className="w-24 h-24 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
//                                     <span className="text-3xl font-bold text-orange-600">SR</span>
//                                 </div>
//                                 <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">Sarah Rahman</h3>
//                                 <p className="text-orange-500 text-center mb-4">Founder & CEO</p>
//                                 <p className="text-gray-600 text-center text-sm">
//                                     Former restaurant owner turned tech entrepreneur with a passion for food innovation
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//                             <div className="p-6">
//                                 <div className="w-24 h-24 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
//                                     <span className="text-3xl font-bold text-orange-600">AK</span>
//                                 </div>
//                                 <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">Aminul Khan</h3>
//                                 <p className="text-orange-500 text-center mb-4">Head of Operations</p>
//                                 <p className="text-gray-600 text-center text-sm">
//                                     10+ years in food industry management and quality control
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//                             <div className="p-6">
//                                 <div className="w-24 h-24 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
//                                     <span className="text-3xl font-bold text-orange-600">NA</span>
//                                 </div>
//                                 <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">Nadia Ahmed</h3>
//                                 <p className="text-orange-500 text-center mb-4">Community Manager</p>
//                                 <p className="text-gray-600 text-center text-sm">
//                                     Building connections between chefs and food lovers across communities
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* CTA Section */}
//             <section className="py-16 bg-orange-50">
//                 <div className="container mx-auto px-4 text-center">
//                     <h2 className="text-3xl font-bold mb-6 text-gray-800">Join Our Community</h2>
//                     <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
//                         Whether you're a home cook looking to share your culinary creations or a food lover 
//                         seeking authentic homemade meals, LocalChefBazaar is here for you.
//                     </p>
//                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        
//                         <Link
//                             to={'/meals'}
//                             className="px-8 py-3 bg-white text-orange-500 font-semibold rounded-lg border-2 border-orange-500 hover:bg-orange-50 transition duration-300"
//                         >
//                             Browse Meals
//                         </Link>
//                     </div>
//                 </div>
//             </section>

          
//         </div>
//     );
// };

// export default About;









import React from 'react';
import { FaUsers, FaUtensils, FaHeart, FaShippingFast, FaLeaf, FaHandsHelping, FaSmile, FaHome, FaSeedling } from 'react-icons/fa';
import { Link } from 'react-router';

const About = () => {
    return (
        <div className="transform rotate-180 origin-center min-h-screen bg-gradient-to-b from-yellow-50 to-white">
            <div className="transform -rotate-180">
                {/* Hero Section */}
                <section className="relative py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:40px_40px]"></div>
                    </div>
                    
                    <div className="container relative mx-auto px-4 text-center">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-900/50 to-yellow-800/50 text-yellow-300 px-4 py-2 rounded-full mb-6 border border-yellow-700/50">
                            <span className="font-bold text-sm">HEARTFUL JOURNEY</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Where <span className="text-yellow-400">Hearts</span> Meet Flavors
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
                            More than a platform—we're creators of food memories, 
                            weavers of community stories, and believers in the magic of shared meals
                        </p>
                    </div>
                </section>

                {/* Our Heart Story Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-yellow-50 text-yellow-800 px-4 py-2 rounded-full mb-4 border border-yellow-200">
                                    <FaHeart className="text-yellow-500" />
                                    <span className="font-bold text-sm">THE HEARTBEAT BEHIND THE MEALS</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                                    Our <span className="text-yellow-500">Emotional</span> Beginning
                                </h2>
                            </div>
                            <div className="bg-gradient-to-br from-white to-yellow-50 rounded-2xl shadow-2xl p-8 md:p-12 border border-yellow-100">
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                            LocalChefBazar was born from a tear of joy, a shared laugh over a meal, 
                                            and the simple belief that food should tell stories, not just fill stomachs.
                                        </p>
                                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                            In 2023, we saw home chefs pouring their souls into dishes that deserved 
                                            more than just family appreciation. We saw busy souls longing for the 
                                            warmth of home-cooked meals but missing the time or talent to create them.
                                        </p>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-3xl blur-xl opacity-20"></div>
                                        <div className="relative bg-gradient-to-br from-yellow-100 to-white p-8 rounded-2xl border border-yellow-200 text-center">
                                            <FaHeart className="text-6xl text-yellow-500 mx-auto mb-4 animate-pulse" />
                                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Heart Promise</h3>
                                            <p className="text-gray-600">
                                                Every meal carries a story, every chef shares their soul, 
                                                and every bite creates a memory
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Soul Mission Section */}
                <section className="py-20 bg-gradient-to-b from-white to-yellow-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-yellow-50 text-yellow-800 px-4 py-2 rounded-full mb-4 border border-yellow-200">
                                <FaHandsHelping className="text-yellow-500" />
                                <span className="font-bold text-sm">THE SOUL OF OUR WORK</span>
                            </div>
                            <h2 className="text-4xl font-bold mb-6 text-gray-800">
                                Our <span className="text-yellow-500">Heartfelt</span> Mission
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            <div className="bg-gradient-to-br from-white to-yellow-50 rounded-2xl p-8 border-l-4 border-yellow-500 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                                <div className="flex items-center mb-6">
                                    <div className="p-3 bg-gradient-to-r from-yellow-100 to-yellow-50 rounded-lg mr-4 border border-yellow-200">
                                        <FaHome className="text-yellow-600 text-2xl" />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-gray-800">For Heartful Chefs</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    To give voice to culinary artists who cook with more than ingredients—they cook 
                                    with memories, traditions, and generations of family stories, helping them share 
                                    their soulful creations with hearts ready to receive them
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-white to-yellow-50 rounded-2xl p-8 border-l-4 border-yellow-500 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                                <div className="flex items-center mb-6">
                                    <div className="p-3 bg-gradient-to-r from-yellow-100 to-yellow-50 rounded-lg mr-4 border border-yellow-200">
                                        <FaSmile className="text-yellow-600 text-2xl" />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-gray-800">For Soulful Eaters</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    To deliver more than meals—to deliver emotional experiences, moments of connection, 
                                    and the warmth of someone's kitchen to your table, reminding you that food is 
                                    love made edible
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Heart Values Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-yellow-50 text-yellow-800 px-4 py-2 rounded-full mb-4 border border-yellow-200">
                                <FaHeart className="text-yellow-500" />
                                <span className="font-bold text-sm">VALUES THAT WARM OUR HEARTS</span>
                            </div>
                            <h2 className="text-4xl font-bold mb-6 text-gray-800">
                                What <span className="text-yellow-500">Makes</span> Our Heart Beat
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            <div className="text-center p-8 bg-gradient-to-br from-white to-yellow-50 rounded-2xl border border-yellow-100 hover:border-yellow-300 transition-all duration-300 hover:-translate-y-2">
                                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-yellow-100 to-yellow-50 rounded-full flex items-center justify-center border-4 border-yellow-200">
                                    <FaHeart className="text-yellow-600 text-4xl" />
                                </div>
                                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Love in Every Bite</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Every recipe carries generations of love, every ingredient is chosen with care, 
                                    and every dish is prepared as if for family
                                </p>
                            </div>
                            <div className="text-center p-8 bg-gradient-to-br from-white to-yellow-50 rounded-2xl border border-yellow-100 hover:border-yellow-300 transition-all duration-300 hover:-translate-y-2">
                                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-yellow-100 to-yellow-50 rounded-full flex items-center justify-center border-4 border-yellow-200">
                                    <FaUsers className="text-yellow-600 text-4xl" />
                                </div>
                                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Community of Hearts</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Building bridges between souls through shared meals, creating conversations 
                                    that start at the table and continue in the heart
                                </p>
                            </div>
                            <div className="text-center p-8 bg-gradient-to-br from-white to-yellow-50 rounded-2xl border border-yellow-100 hover:border-yellow-300 transition-all duration-300 hover:-translate-y-2">
                                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-yellow-100 to-yellow-50 rounded-full flex items-center justify-center border-4 border-yellow-200">
                                    <FaSeedling className="text-yellow-600 text-4xl" />
                                </div>
                                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Heartfelt Sustainability</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Cooking with respect for the earth, supporting local growers, and ensuring 
                                    our love for food doesn't cost the planet its future
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Heart Journey Section */}
                <section className="py-20 bg-gradient-to-b from-white to-yellow-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-yellow-50 text-yellow-800 px-4 py-2 rounded-full mb-4 border border-yellow-200">
                                <FaShippingFast className="text-yellow-500" />
                                <span className="font-bold text-sm">THE JOURNEY OF LOVE</span>
                            </div>
                            <h2 className="text-4xl font-bold mb-6 text-gray-800">
                                How <span className="text-yellow-500">Love</span> Travels to You
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                            <div className="text-center p-6">
                                <div className="relative mx-auto mb-6">
                                    <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                                        1
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-300 rounded-full animate-pulse"></div>
                                </div>
                                <h3 className="text-lg font-semibold mb-3 text-gray-800">Find Your Heart Food</h3>
                                <p className="text-gray-600 text-sm">
                                    Browse meals that speak to your soul, crafted by chefs who cook with passion
                                </p>
                            </div>
                            <div className="text-center p-6">
                                <div className="relative mx-auto mb-6">
                                    <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                                        2
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-300 rounded-full animate-pulse"></div>
                                </div>
                                <h3 className="text-lg font-semibold mb-3 text-gray-800">Share Your Heart Order</h3>
                                <p className="text-gray-600 text-sm">
                                    Place your order with love, knowing you're supporting someone's culinary dream
                                </p>
                            </div>
                            <div className="text-center p-6">
                                <div className="relative mx-auto mb-6">
                                    <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                                        3
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-300 rounded-full animate-pulse"></div>
                                </div>
                                <h3 className="text-lg font-semibold mb-3 text-gray-800">Heart Cooks with Love</h3>
                                <p className="text-gray-600 text-sm">
                                    Chef pours their soul into your meal, creating magic with every ingredient
                                </p>
                            </div>
                            <div className="text-center p-6">
                                <div className="relative mx-auto mb-6">
                                    <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                                        4
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-300 rounded-full animate-pulse"></div>
                                </div>
                                <h3 className="text-lg font-semibold mb-3 text-gray-800">Receive Heart Warmth</h3>
                                <p className="text-gray-600 text-sm">
                                    Get your meal delivered with care, ready to create beautiful memories
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Heart Team Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-yellow-50 text-yellow-800 px-4 py-2 rounded-full mb-4 border border-yellow-200">
                                <FaUsers className="text-yellow-500" />
                                <span className="font-bold text-sm">HEARTS BEHIND THE SCENES</span>
                            </div>
                            <h2 className="text-4xl font-bold mb-6 text-gray-800">
                                The <span className="text-yellow-500">Souls</span> Who Care
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            <div className="bg-gradient-to-br from-white to-yellow-50 rounded-2xl shadow-xl overflow-hidden border border-yellow-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                <div className="p-8 text-center">
                                    <div className="relative mx-auto mb-6">
                                        <div className="w-28 h-28 mx-auto bg-gradient-to-r from-yellow-100 to-yellow-50 rounded-full flex items-center justify-center border-4 border-yellow-200 shadow-lg">
                                            <span className="text-4xl font-bold text-yellow-600">❤️</span>
                                        </div>
                                        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                                            <FaHeart className="text-white text-sm" />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-2 text-gray-800">Sourav Chowdhury</h3>
                                    <p className="text-yellow-600 font-medium mb-4">Heart & Founder</p>
                                    <p className="text-gray-600 text-sm">
                                        Believes food should heal hearts, connect souls, and tell beautiful stories
                                    </p>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-white to-yellow-50 rounded-2xl shadow-xl overflow-hidden border border-yellow-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                <div className="p-8 text-center">
                                    <div className="relative mx-auto mb-6">
                                        <div className="w-28 h-28 mx-auto bg-gradient-to-r from-yellow-100 to-yellow-50 rounded-full flex items-center justify-center border-4 border-yellow-200 shadow-lg">
                                            <span className="text-4xl font-bold text-yellow-600">✨</span>
                                        </div>
                                        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                                            <FaHandsHelping className="text-white text-sm" />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-2 text-gray-800">Heartful Support</h3>
                                    <p className="text-yellow-600 font-medium mb-4">Emotional Care Team</p>
                                    <p className="text-gray-600 text-sm">
                                        Always here with a listening ear, a warm heart, and solutions that care
                                    </p>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-white to-yellow-50 rounded-2xl shadow-xl overflow-hidden border border-yellow-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                <div className="p-8 text-center">
                                    <div className="relative mx-auto mb-6">
                                        <div className="w-28 h-28 mx-auto bg-gradient-to-r from-yellow-100 to-yellow-50 rounded-full flex items-center justify-center border-4 border-yellow-200 shadow-lg">
                                            <span className="text-4xl font-bold text-yellow-600">👨‍🍳</span>
                                        </div>
                                        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                                            <FaUtensils className="text-white text-sm" />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-2 text-gray-800">Our Heart Chefs</h3>
                                    <p className="text-yellow-600 font-medium mb-4">Soulful Creators</p>
                                    <p className="text-gray-600 text-sm">
                                        50+ passionate culinary artists who cook with their hearts on their sleeves
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Heart CTA Section */}
                <section className="py-20 bg-gradient-to-br from-yellow-50 to-white">
                    <div className="container mx-auto px-4 text-center">
                        <div className="max-w-3xl mx-auto">
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-yellow-50 text-yellow-800 px-4 py-2 rounded-full mb-6 border border-yellow-200">
                                <FaHeart className="text-yellow-500" />
                                <span className="font-bold text-sm">JOIN OUR HEARTFUL FAMILY</span>
                            </div>
                            <h2 className="text-4xl font-bold mb-6 text-gray-800">
                                Ready to <span className="text-yellow-500">Share</span> Your Heart?
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Whether you're a chef with stories to tell through food or a soul seeking 
                                meals that speak to your heart, there's a place for you at our table
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    to={'/meals'}
                                    className="px-10 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold rounded-full hover:from-yellow-600 hover:to-yellow-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                                >
                                    Explore Heartwarming Meals
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Heart Quote Section */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="relative">
                                <div className="text-gray-300 text-8xl absolute -top-8 left-1/2 transform -translate-x-1/2">"</div>
                                <p className="text-2xl md:text-3xl text-gray-700 italic relative z-10 mb-8">
                                    Food is the language of the heart that needs no translation. 
                                    Every meal is a story waiting to be told, and every bite is 
                                    a memory waiting to be made.
                                </p>
                                <div className="flex items-center justify-center gap-4">
                                    <div className="h-px w-20 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
                                    <span className="text-yellow-600 font-bold">Our Heart Philosophy</span>
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

export default About;