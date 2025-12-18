// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { Link, useNavigate, useLocation } from "react-router";
// import { Bounce, toast } from "react-toastify";
// import useAuth from "../../Hooks/useAuth";
// import { FaEye, FaEyeSlash, FaEnvelope, FaLock } from "react-icons/fa";
// import loginImg from "../../assets/banner/img3.jpg"; // Different image for login
// import { FcGoogle } from "react-icons/fc";

// const Login = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const { signInUser, signInGoogle } = useAuth();
//   const location = useLocation();
//   const navigate = useNavigate();

//   const handleLogin = async (data) => {
//     setLoading(true);
//     try {
//       await signInUser(data.email, data.password);
//       navigate(location.state || "/");
//       toast.success(`Welcome back!`, {
//         position: "top-center",
//         autoClose: 3000,
//         theme: "light",
//         transition: Bounce,
//       });
//     } catch (error) {
//       console.error(error);
//       toast.error("Invalid email or password");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleSignIn = async () => {
//     try {
//       await signInGoogle();
//       toast.success("Google login successful!");
//       navigate(location?.state || "/");
//     } catch (error) {
//       console.log(error);
//       toast.error("Google login failed. Please try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row shadow-orange-100">
//         {/* Left Side - Form */}
//         <div className="w-full md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
//           <div className="text-center md:text-left mb-8">
//             <h2 className="text-3xl font-bold text-gray-900">Welcome Back!</h2>
//             <p className="text-gray-500 mt-2">
//               Please login to access your account
//             </p>
//           </div>

//           <form onSubmit={handleSubmit(handleLogin)} className="space-y-6">
//             {/* Email */}
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text font-semibold text-gray-700">
//                   Email Address
//                 </span>
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
//                   <FaEnvelope />
//                 </div>
//                 <input
//                   type="email"
//                   {...register("email", { required: "Email is required" })}
//                   className="input input-bordered w-full pl-10 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
//                   placeholder="john@example.com"
//                 />
//               </div>
//               {errors.email && (
//                 <p className="text-red-500 text-xs mt-1">
//                   {errors.email.message}
//                 </p>
//               )}
//             </div>

//             {/* Password */}
//             <div className="form-control">
//               <label className="label flex justify-between">
//                 <span className="label-text font-semibold text-gray-700">
//                   Password
//                 </span>
//                 <a
//                   href="#"
//                   className="label-text-alt link link-hover text-orange-600 font-semibold"
//                   onClick={(e) => e.preventDefault()}
//                 >
//                   Forgot password?
//                 </a>
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
//                   <FaLock />
//                 </div>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   {...register("password", {
//                     required: "Password is required",
//                     minLength: { value: 6, message: "Min 6 characters" },
//                   })}
//                   className="input input-bordered w-full pl-10 pr-10 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
//                   placeholder="••••••••"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </button>
//               </div>
//               {errors.password && (
//                 <p className="text-red-500 text-xs mt-1">
//                   {errors.password.message}
//                 </p>
//               )}
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="btn btn-primary w-full bg-orange-600 hover:bg-orange-700 border-none text-white rounded-lg py-3 text-lg font-bold shadow-lg transform transition hover:scale-[1.02]"
//             >
//               {loading ? (
//                 <span className="loading loading-spinner"></span>
//               ) : (
//                 "Login"
//               )}
//             </button>

//             <p className="text-center text-gray-600 mt-6">
//               Don't have an account?{" "}
//               <Link
//                 to="/register"
//                 state={location.state}
//                 className="text-orange-600 font-bold hover:underline"
//               >
//                 Register
//               </Link>
//             </p>
//           </form>
//           <div className="flex justify-center items-center mt-7">
//             <button
//               onClick={handleGoogleSignIn}
//               className="btn bg-white text-black border-[#e5e5e5]"
//             >
//               <FcGoogle className="text-xl" />
//               Login with Google
//             </button>
//           </div>
//         </div>

//         {/* Right Side - Image */}
//         <div className="hidden md:flex md:w-1/2 relative bg-gray-900">
//           <div
//             className="absolute inset-0 bg-cover bg-center opacity-70"
//             style={{ backgroundImage: `url(${loginImg})` }}
//           ></div>
//           <div className="relative z-10 flex flex-col justify-center items-center w-full h-full text-white p-12 text-center">
//             <h2 className="text-4xl font-bold mb-6">Taste the Tradition</h2>
//             <p className="text-lg">
//               "Good food is the foundation of genuine happiness."
//             </p>
//             <div className="mt-8 p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
//               <p className="text-sm font-light italic">
//                 Join thousands of food lovers today.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;




import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router";
import { Bounce, toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";
import { FaEye, FaEyeSlash, FaEnvelope, FaLock, FaUser, FaArrowRight } from "react-icons/fa";
import loginImg from "../../assets/banner/img3.jpg";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const { signInUser, signInGoogle } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    setLoading(true);
    try {
      await signInUser(data.email, data.password);
      navigate(location.state || "/");
      toast.success(`Welcome back!`, {
        position: "top-center",
        autoClose: 3000,
        theme: "light",
        transition: Bounce,
      });
    } catch (error) {
      console.error(error);
      toast.error("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInGoogle();
      toast.success("Google login successful!");
      navigate(location?.state || "/");
    } catch (error) {
      console.log(error);
      toast.error("Google login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
        {/* Left Side - Form Section */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
                <FaUser className="text-white text-lg" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-800">GourmetHub</h1>
                <p className="text-sm text-slate-500">Premium Dining Experience</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-2">Sign In to Your Account</h2>
              <p className="text-slate-600">Access your personalized culinary dashboard</p>
            </div>
          </div>

          <form onSubmit={handleSubmit(handleLogin)} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <FaEnvelope className="text-sm" />
                </div>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-slate-700">
                  Password
                </label>
                <button
                  type="button"
                  className="text-sm text-blue-600 hover:text-blue-700"
                  onClick={(e) => e.preventDefault()}
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <FaLock className="text-sm" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Minimum 6 characters required" },
                  })}
                  className="w-full pl-10 pr-10 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
              )}
            </div>

            {/* Remember Me & Login Button */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-slate-600">
                  Remember me
                </label>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                <>
                  Sign In
                  <FaArrowRight className="text-sm" />
                </>
              )}
            </button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-slate-500">Or sign in with</span>
              </div>
            </div>

            {/* Google Sign In */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full py-3 border border-slate-200 rounded-lg bg-white hover:bg-slate-50 transition-colors flex items-center justify-center gap-3 font-medium text-slate-700"
            >
              <FcGoogle className="text-xl" />
              Continue with Google
            </button>

            {/* Registration Link */}
            <div className="text-center pt-4">
              <p className="text-slate-600">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  state={location.state}
                  className="font-semibold text-blue-600 hover:text-blue-700 hover:underline"
                >
                  Sign up now
                </Link>
              </p>
            </div>
          </form>

          {/* Mobile Image Preview */}
          <div className="lg:hidden mt-10 rounded-xl overflow-hidden">
            <div className="relative h-48">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${loginImg})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
              </div>
              <div className="relative h-full flex items-end p-6 text-white">
                <div>
                  <h3 className="text-lg font-bold mb-1">Discover Culinary Excellence</h3>
                  <p className="text-slate-200 text-sm">Join our community of food enthusiasts</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image Section */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-slate-900 to-blue-900">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${loginImg})` }}
          />
          <div className="relative z-10 w-full h-full flex flex-col justify-between p-12 text-white">
            <div>
              <h2 className="text-4xl font-bold leading-tight mb-6">
                Experience World-Class<br />Culinary Delights
              </h2>
              <p className="text-slate-300 text-lg mb-8">
                "Where every meal tells a story and every flavor creates a memory."
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <span className="text-slate-100">Premium chef-curated meals</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <span className="text-slate-100">Real-time order tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <span className="text-slate-100">Exclusive member benefits</span>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-8 border-t border-white/10">
              <div className="flex items-center justify-between">
                <div className="text-sm text-slate-300">
                  Join 10,000+ satisfied food lovers
                </div>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-blue-400 to-teal-400"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

