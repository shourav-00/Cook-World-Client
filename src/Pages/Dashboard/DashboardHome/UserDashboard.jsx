// import React from "react";
// import useAuth from "../../../Hooks/useAuth";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";
// import {
//     FaShoppingCart,
//     FaClock,
//     FaCheckCircle,
//     FaUtensils,
//     FaHeart,
//     FaSearch,
//     FaStar,
//     FaTruck,
// } from "react-icons/fa";
// import { Link } from "react-router";
// import Loading from "../../../Components/Loading/Loading";


// const UserDashboard = () => {
//     const { user } = useAuth();
//     const axiosSecure = useAxiosSecure();

//     // Fetch user statistics
//     const { data: stats = {}, isLoading } = useQuery({
//         queryKey: ["userStats", user?.email],
//         enabled: !!user?.email,
//         queryFn: async () => {
//             const [ordersRes, favoritesRes] = await Promise.all([
//                 axiosSecure.get(`/orders/user/${user.email}`),
//                 axiosSecure.get(`/favorites/${user.email}`),
//             ]);

//             const myOrders = ordersRes.data;

//             return {
//                 totalOrders: myOrders.length,
//                 pendingOrders: myOrders.filter(
//                     (o) =>
//                         o.orderStatus === "pending-chef-approval" ||
//                         o.orderStatus === "accepted-by-chef"
//                 ).length,
//                 completedOrders: myOrders.filter((o) => o.orderStatus === "delivered")
//                     .length,
//                 favorites: favoritesRes.data.length || 0,
//             };
//         },
//     });

//     if (isLoading) {
//         return <Loading/>
//     }

//     const statCards = [
//         {
//             title: "Total Orders",
//             value: stats.totalOrders,
//             icon: FaShoppingCart,
//             color: "from-blue-500 to-blue-600",
//             bgColor: "bg-blue-50",
//             iconColor: "text-blue-500",
//         },
//         {
//             title: "Active Orders",
//             value: stats.pendingOrders,
//             icon: FaClock,
//             color: "from-orange-500 to-red-600",
//             bgColor: "bg-orange-50",
//             iconColor: "text-orange-500",
//         },
//         {
//             title: "Completed",
//             value: stats.completedOrders,
//             icon: FaCheckCircle,
//             color: "from-green-500 to-green-600",
//             bgColor: "bg-green-50",
//             iconColor: "text-green-500",
//         },
//         {
//             title: "Favorites",
//             value: stats.favorites,
//             icon: FaHeart,
//             color: "from-pink-500 to-red-600",
//             bgColor: "bg-pink-50",
//             iconColor: "text-pink-500",
//         },
//     ];

//     const quickActions = [
//         {
//             title: "Browse Meals",
//             description: "Explore delicious meals",
//             icon: FaSearch,
//             link: "/meals",
//             color: "bg-gradient-to-r from-amber-500 to-orange-600",
//         },
//         {
//             title: "My Orders",
//             description: "Track your orders",
//             icon: FaShoppingCart,
//             link: "/dashboard/my-order",
//             color: "bg-gradient-to-r from-blue-500 to-blue-600",
//         },
//         {
//             title: "Favorites",
//             description: "Your saved meals",
//             icon: FaHeart,
//             link: "/dashboard/favorite",
//             color: "bg-gradient-to-r from-pink-500 to-red-600",
//         },
//         {
//             title: "All Meals",
//             description: "View full menu",
//             icon: FaUtensils,
//             link: "/meals",
//             color: "bg-gradient-to-r from-purple-500 to-purple-600",
//         },
//     ];

//     return (
//         <div className="p-6">
//             {/* Welcome Section */}
//             <div className="mb-8">
//                 <h1 className="text-4xl font-bold text-gray-800 mb-2">
//                     Welcome back, {user?.displayName || "Food Lover"}!
//                 </h1>
//                 <p className="text-gray-600">
//                     Ready to discover your next delicious meal?
//                 </p>
//             </div>

//             {/* Statistics Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//                 {statCards.map((stat, index) => (
//                     <div
//                         key={index}
//                         className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow"
//                     >
//                         <div className="flex items-center justify-between mb-4">
//                             <div className={`p-3 rounded-xl ${stat.bgColor}`}>
//                                 <stat.icon className={`text-2xl ${stat.iconColor}`} />
//                             </div>
//                             <div className="text-right">
//                                 <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
//                             </div>
//                         </div>
//                         <h3 className="text-gray-600 font-medium">{stat.title}</h3>
//                     </div>
//                 ))}
//             </div>

//             {/* Quick Actions */}
//             <div className="mb-8">
//                 <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Actions</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                     {quickActions.map((action, index) => (
//                         <Link
//                             key={index}
//                             to={action.link}
//                             className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all hover:-translate-y-1 group relative overflow-hidden"
//                         >
//                             <div
//                                 className={`absolute inset-0 ${action.color} opacity-0 group-hover:opacity-5 transition-opacity`}
//                             ></div>
//                             <div className="relative z-10">
//                                 <div className="flex items-start justify-between mb-3">
//                                     <div
//                                         className={`p-3 rounded-xl ${action.color} text-white group-hover:scale-110 transition-transform`}
//                                     >
//                                         <action.icon className="text-2xl" />
//                                     </div>
//                                 </div>
//                                 <h3 className="text-lg font-bold text-gray-800 mb-1">
//                                     {action.title}
//                                 </h3>
//                                 <p className="text-sm text-gray-600">{action.description}</p>
//                             </div>
//                         </Link>
//                     ))}
//                 </div>
//             </div>

//             {/* Order Status Overview */}
//             <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
//                 <h2 className="text-2xl font-bold text-gray-800 mb-4">
//                     Order Overview
//                 </h2>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                     <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
//                         <FaShoppingCart className="text-4xl text-blue-500 mx-auto mb-3" />
//                         <p className="text-3xl font-bold text-gray-800">
//                             {stats.totalOrders}
//                         </p>
//                         <p className="text-sm text-gray-600 mt-1">Total Orders</p>
//                     </div>
//                     <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border border-orange-200">
//                         <FaTruck className="text-4xl text-orange-500 mx-auto mb-3" />
//                         <p className="text-3xl font-bold text-gray-800">
//                             {stats.pendingOrders}
//                         </p>
//                         <p className="text-sm text-gray-600 mt-1">In Progress</p>
//                     </div>
//                     <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
//                         <FaCheckCircle className="text-4xl text-green-500 mx-auto mb-3" />
//                         <p className="text-3xl font-bold text-gray-800">
//                             {stats.completedOrders}
//                         </p>
//                         <p className="text-sm text-gray-600 mt-1">Delivered</p>
//                     </div>
//                 </div>
//             </div>

//             {/* Featured Section */}
//             <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl shadow-lg p-8 text-white">
//                 <div className="flex items-center justify-between">
//                     <div>
//                         <h2 className="text-3xl font-bold mb-2">Hungry?</h2>
//                         <p className="text-amber-100 mb-4">
//                             Browse our delicious meals from local chefs
//                         </p>
//                         <Link
//                             to="/meals"
//                             className="btn bg-white text-amber-600 hover:bg-amber-50 border-none"
//                         >
//                             <FaUtensils className="mr-2" />
//                             Explore Meals
//                         </Link>
//                     </div>
//                     <div className="hidden md:block">
//                         <FaUtensils className="text-8xl text-white opacity-20" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default UserDashboard;






import React from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import {
    FaShoppingCart,
    FaClock,
    FaCheckCircle,
    FaUtensils,
    FaHeart,
    FaSearch,
    FaTruck,
    FaFire,
} from "react-icons/fa";
import { Link } from "react-router";
import Loading from "../../../Components/Loading/Loading";

const UserDashboard = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats = {}, isLoading } = useQuery({
        queryKey: ["userStats", user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const [ordersRes, favoritesRes] = await Promise.all([
                axiosSecure.get(`/orders/user/${user.email}`),
                axiosSecure.get(`/favorites/${user.email}`),
            ]);

            const myOrders = ordersRes.data;

            return {
                totalOrders: myOrders.length,
                pendingOrders: myOrders.filter(
                    (o) =>
                        o.orderStatus === "pending-chef-approval" ||
                        o.orderStatus === "accepted-by-chef"
                ).length,
                completedOrders: myOrders.filter((o) => o.orderStatus === "delivered")
                    .length,
                favorites: favoritesRes.data.length || 0,
            };
        },
    });

    if (isLoading) {
        return <Loading/>
    }

    const statCards = [
        {
            title: "All Orders",
            value: stats.totalOrders,
            icon: FaShoppingCart,
            color: "border-l-4 border-blue-500",
            bgColor: "bg-blue-50",
            iconColor: "text-blue-500",
        },
        {
            title: "In Progress",
            value: stats.pendingOrders,
            icon: FaClock,
            color: "border-l-4 border-amber-500",
            bgColor: "bg-amber-50",
            iconColor: "text-amber-500",
        },
        {
            title: "Delivered",
            value: stats.completedOrders,
            icon: FaCheckCircle,
            color: "border-l-4 border-emerald-500",
            bgColor: "bg-emerald-50",
            iconColor: "text-emerald-500",
        },
        {
            title: "Saved Items",
            value: stats.favorites,
            icon: FaHeart,
            color: "border-l-4 border-rose-500",
            bgColor: "bg-rose-50",
            iconColor: "text-rose-500",
        },
    ];

    const quickActions = [
        {
            title: "Explore Menu",
            description: "Discover amazing dishes",
            icon: FaSearch,
            link: "/meals",
            color: "bg-gradient-to-r from-amber-500 to-orange-500",
        },
        {
            title: "Order History",
            description: "View your past orders",
            icon: FaShoppingCart,
            link: "/dashboard/my-order",
            color: "bg-gradient-to-r from-blue-500 to-indigo-500",
        },
        {
            title: "Favorites",
            description: "Your saved favorites",
            icon: FaHeart,
            link: "/dashboard/favorite",
            color: "bg-gradient-to-r from-rose-500 to-pink-500",
        },
        {
            title: "Browse All",
            description: "See complete menu",
            icon: FaUtensils,
            link: "/meals",
            color: "bg-gradient-to-r from-purple-500 to-violet-500",
        },
    ];

    return (
        <div className="p-4">
            {/* Welcome Section */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-1">
                    Hello, {user?.displayName || "Food Explorer"}! 👋
                </h1>
                <p className="text-gray-600">
                    Your culinary journey continues... What delicious meal will you discover today?
                </p>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {statCards.map((stat, index) => (
                    <div
                        key={index}
                        className={`bg-white rounded-lg shadow p-4 ${stat.color} hover:shadow-md transition-shadow`}
                    >
                        <div className="flex items-center justify-between">
                            <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                                <stat.icon className={`text-xl ${stat.iconColor}`} />
                            </div>
                            <div className="text-right">
                                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                            </div>
                        </div>
                        <h3 className="text-gray-600 font-medium mt-2 text-sm">{stat.title}</h3>
                    </div>
                ))}
            </div>

            {/* Quick Actions */}
            <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-3">Quick Access</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {quickActions.map((action, index) => (
                        <Link
                            key={index}
                            to={action.link}
                            className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition-all hover:-translate-y-0.5 border border-gray-100"
                        >
                            <div className="flex items-start justify-between mb-2">
                                <div
                                    className={`p-2 rounded-lg ${action.color} text-white`}
                                >
                                    <action.icon className="text-lg" />
                                </div>
                            </div>
                            <h3 className="font-bold text-gray-800 mb-1">
                                {action.title}
                            </h3>
                            <p className="text-sm text-gray-600">{action.description}</p>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Order Status */}
            <div className="bg-white rounded-lg shadow p-4 mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                    Your Order Status
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-100">
                        <FaShoppingCart className="text-3xl text-blue-500 mx-auto mb-2" />
                        <p className="text-2xl font-bold text-gray-800">
                            {stats.totalOrders}
                        </p>
                        <p className="text-sm text-gray-600">Total Orders</p>
                    </div>
                    <div className="text-center p-4 bg-amber-50 rounded-lg border border-amber-100">
                        <FaTruck className="text-3xl text-amber-500 mx-auto mb-2" />
                        <p className="text-2xl font-bold text-gray-800">
                            {stats.pendingOrders}
                        </p>
                        <p className="text-sm text-gray-600">Currently Processing</p>
                    </div>
                    <div className="text-center p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                        <FaCheckCircle className="text-3xl text-emerald-500 mx-auto mb-2" />
                        <p className="text-2xl font-bold text-gray-800">
                            {stats.completedOrders}
                        </p>
                        <p className="text-sm text-gray-600">Successfully Delivered</p>
                    </div>
                </div>
            </div>

            {/* Featured Section */}
            <div className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg shadow-lg p-5 text-white">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold mb-1">Feeling Hungry?</h2>
                        <p className="text-amber-100 mb-3">
                            Taste the passion of local chefs. Every meal tells a story!
                        </p>
                        <Link
                            to="/meals"
                            className="inline-flex items-center gap-1 bg-white text-amber-600 hover:bg-amber-50 px-4 py-2 rounded font-medium"
                        >
                            <FaFire className="mr-1" />
                            Discover Hot Meals
                        </Link>
                    </div>
                    <div className="hidden sm:block">
                        <FaUtensils className="text-6xl text-white/30" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;