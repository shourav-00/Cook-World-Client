import React from "react";
import { Link } from "react-router";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPaperPlane, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import logo from '/Logo2.png'

const Footer = () => {
  return (
    <div className="relative pt-16 mt-20 transform rotate-180 origin-center">
      <footer className="bg-gradient-to-b from-black via-gray-900 to-black text-gray-300">
        <div className="container mx-auto px-4 pt-16 pb-12 transform -rotate-180">
          
          {/* Top Decorative Line */}
          <div className="flex justify-center mb-12">
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-yellow-500 to-transparent rounded-full"></div>
          </div>

          {/* Newsletter Section */}
          <div className="w-full max-w-4xl mx-auto text-center mb-16 relative z-10">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-900/30 to-yellow-800/30 text-yellow-300 px-4 py-2 rounded-full mb-4 border border-yellow-700/50">
              <span className="font-bold text-sm">STAY CONNECTED WITH LOVE</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let's Create <span className="text-yellow-400">Food Memories</span> Together
            </h2>
            <p className="mb-8 text-gray-400 max-w-2xl mx-auto">
              Subscribe for heartfelt recipes, special moments, and exclusive culinary journeys delivered with love
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input
                type="email"
                placeholder="Your email address for delicious updates"
                className="input w-full sm:w-80 rounded-full bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 placeholder-gray-500 px-6 py-3"
              />
              <button className="btn bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 border-none rounded-full px-8 py-3 text-white font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300">
                <span>Join Our Family</span>
                <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-t border-gray-800/50 pt-12">
            
            {/* Brand Column */}
            <div className="space-y-4">
              <Link to="/" className="flex items-center gap-3 mb-4 group">
                <div className="relative">
                  <img src={logo} alt="Chef-Bazar Logo" className="w-14 h-14 rounded-full border-2 border-yellow-500 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                    <FaHeart className="text-white text-xs" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Chef<span className="text-yellow-400">Bazar</span></h3>
                  <p className="text-yellow-500 text-sm">Where Hearts Meet Flavors</p>
                </div>
              </Link>
              <p className="text-sm leading-relaxed text-gray-400">
                More than a food service—we're creators of moments, weavers of memories, 
                and believers in the power of shared meals to connect souls.
              </p>
              <div className="flex gap-3 mt-6">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-yellow-600 hover:text-white transition-all duration-300 border border-gray-700 hover:border-yellow-500">
                  <FaFacebookF />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-yellow-600 hover:text-white transition-all duration-300 border border-gray-700 hover:border-yellow-500">
                  <FaTwitter />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-yellow-600 hover:text-white transition-all duration-300 border border-gray-700 hover:border-yellow-500">
                  <FaInstagram />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-yellow-600 hover:text-white transition-all duration-300 border border-gray-700 hover:border-yellow-500">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                Navigate with Heart
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="hover:text-yellow-400 transition-colors duration-300 flex items-center gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-yellow-500">
                      <span className="text-xs">🏠</span>
                    </div>
                    <span>Home of Flavors</span>
                  </Link>
                </li>
                <li>
                  <Link to="/meals" className="hover:text-yellow-400 transition-colors duration-300 flex items-center gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-yellow-500">
                      <span className="text-xs">🍽️</span>
                    </div>
                    <span>Heartfelt Meals</span>
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-yellow-400 transition-colors duration-300 flex items-center gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-yellow-500">
                      <span className="text-xs"></span>
                    </div>
                    <span>Our Story</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info - UPDATED */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                Connect with Love
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group hover:text-yellow-400 transition-colors duration-300">
                  <div className="w-8 h-8 rounded-full bg-yellow-900/30 flex items-center justify-center mt-1 group-hover:bg-yellow-500">
                    <FaMapMarkerAlt className="text-yellow-400 group-hover:text-white text-sm" />
                  </div>
                  <div>
                    <span className="font-medium">Dhaka, Bangladesh</span>
                    <div className="text-gray-500 text-sm">Where flavors find their home</div>
                  </div>
                </li>
                <li className="flex items-center gap-3 group hover:text-yellow-400 transition-colors duration-300">
                  <div className="w-8 h-8 rounded-full bg-yellow-900/30 flex items-center justify-center group-hover:bg-yellow-500">
                    <FaPhoneAlt className="text-yellow-400 group-hover:text-white text-sm" />
                  </div>
                  <div>
                    <span className="font-medium">01784535301</span>
                    <div className="text-gray-500 text-sm">Always here for you</div>
                  </div>
                </li>
                <li className="flex items-center gap-3 group hover:text-yellow-400 transition-colors duration-300">
                  <div className="w-8 h-8 rounded-full bg-yellow-900/30 flex items-center justify-center group-hover:bg-yellow-500">
                    <FaEnvelope className="text-yellow-400 group-hover:text-white text-sm" />
                  </div>
                  <div>
                    <span className="font-medium text-sm">shouravchowdhury400@gmail.com</span>
                    <div className="text-gray-500 text-sm">Share your heart with us</div>
                  </div>
                </li>
              </ul>
            </div>

            {/* App Download */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                Love On The Go
              </h4>
              <p className="text-sm mb-4 text-gray-400">
                Carry the warmth of home-cooked love in your pocket. Available wherever you are.
              </p>
              <div className="flex flex-col gap-3">
                <button className="btn bg-gray-800/50 border border-gray-700 text-white hover:bg-gradient-to-r hover:from-yellow-900/50 hover:to-yellow-800/50 hover:border-yellow-500 justify-start normal-case hover:scale-[1.02] transition-all duration-300">
                  <div className="bg-black p-2 rounded-lg mr-3">
                    <span className="text-2xl"></span>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Download on the</div>
                    <div className="text-lg font-bold leading-none">App Store</div>
                  </div>
                </button>
                <button className="btn bg-gray-800/50 border border-gray-700 text-white hover:bg-gradient-to-r hover:from-yellow-900/50 hover:to-yellow-800/50 hover:border-yellow-500 justify-start normal-case hover:scale-[1.02] transition-all duration-300">
                  <div className="bg-black p-2 rounded-lg mr-3">
                    <span className="text-2xl"></span>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Get it on</div>
                    <div className="text-lg font-bold leading-none">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="border-t border-gray-800/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span>&copy; {new Date().getFullYear()} ChefBazar.</span>
              <span className="text-yellow-400">All emotions reserved.</span>
            </div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link to="#" className="hover:text-yellow-400 transition-colors duration-300">Heart Privacy</Link>
              <Link to="#" className="hover:text-yellow-400 transition-colors duration-300">Love Terms</Link>
              <Link to="#" className="hover:text-yellow-400 transition-colors duration-300">Cookie Care</Link>
            </div>
          </div>

          {/* Final Love Message */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm italic">
              Made with Love for every soul that believes in the magic of shared meals
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;