import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import {
  FaUsers,
  FaUtensils,
  FaShoppingCart,
  FaChartLine,
  FaUserTie,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";
import { Link } from "react-router";
import Loading from "../../../Components/Loading/Loading";

const AdminDashboard = () => {
  const axiosSecure = useAxiosSecure();

  // Fetch statistics
  const { data: stats = {}, isLoading } = useQuery({
    queryKey: ["adminStats"],
    queryFn: async () => {
      const [usersRes, mealsRes, ordersRes, chefsRes] = await Promise.all([
        axiosSecure.get("/users"),
        axiosSecure.get("/meals"),
        axiosSecure.get("/orders"),
        axiosSecure.get("/chefs"),
      ]);

      return {
        totalUsers: usersRes.data.length || 0,
        totalMeals: mealsRes.data.meals?.length || 0,
        totalOrders: ordersRes.data.length || 0,
        totalChefs: chefsRes.data.length || 0,
        pendingChefs:
          chefsRes.data.filter((c) => c.status === "pending").length || 0,
      };
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  const statCards = [
    {
      title: "Registered Users",
      value: stats.totalUsers,
      icon: FaUsers,
      color: "from-blue-400 to-blue-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
    },
    {
      title: "Total Meals",
      value: stats.totalMeals,
      icon: FaUtensils,
      color: "from-amber-400 to-amber-500",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-500",
    },
    {
      title: "Total Orders",
      value: stats.totalOrders,
      icon: FaShoppingCart,
      color: "from-green-400 to-green-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-500",
    },
    {
      title: "Total Chefs",
      value: stats.totalChefs,
      icon: FaUserTie,
      color: "from-purple-400 to-purple-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-500",
    },
  ];

  const quickActions = [
    {
      title: "Manage Users",
      description: "View and manage all users",
      icon: FaUsers,
      link: "/dashboard/users-management",
      color: "bg-blue-500",
    },
    {
      title: "Chef Requests",
      description: `${stats.pendingChefs} pending approvals`,
      icon: FaUserTie,
      link: "/dashboard/approve-chef",
      color: "bg-purple-500",
      badge: stats.pendingChefs,
    },
    {
      title: "All Meals",
      description: "View all meals in the system",
      icon: FaUtensils,
      link: "/meals",
      color: "bg-amber-500",
    },
    {
      title: "Analytics",
      description: "View platform statistics",
      icon: FaChartLine,
      link: "/dashboard",
      color: "bg-green-500",
    },
  ];

  return (
    <div className="p-5">
      {/* Welcome Section */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Platform Administration
        </h1>
        <p className="text-gray-600">
          Overview of your platform's performance and activity
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {statCards.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow border border-gray-200 p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`text-xl ${stat.iconColor}`} />
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              </div>
            </div>
            <h3 className="text-gray-600 text-sm font-medium">{stat.title}</h3>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3">
          Administrative Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <Link
              key={index}
              to={action.link}
              className="bg-white rounded-lg shadow border border-gray-200 p-4 hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between mb-2">
                <div className={`p-2 rounded-lg ${action.color} text-white`}>
                  <action.icon className="text-lg" />
                </div>
                {action.badge > 0 && (
                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">
                    {action.badge}
                  </span>
                )}
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">
                {action.title}
              </h3>
              <p className="text-sm text-gray-600">{action.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow border border-gray-200 p-5">
        <h2 className="text-xl font-bold text-gray-800 mb-3">
          Platform Status
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-green-50 rounded-lg border border-green-100">
            <FaCheckCircle className="text-3xl text-green-500 mx-auto mb-2" />
            <p className="text-xl font-bold text-gray-800">
              {stats.totalOrders}
            </p>
            <p className="text-sm text-gray-600">Total Orders</p>
          </div>
          <div className="text-center p-4 bg-amber-50 rounded-lg border border-amber-100">
            <FaClock className="text-3xl text-amber-500 mx-auto mb-2" />
            <p className="text-xl font-bold text-gray-800">
              {stats.pendingChefs}
            </p>
            <p className="text-sm text-gray-600">Pending Chef Requests</p>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-100">
            <FaUtensils className="text-3xl text-blue-500 mx-auto mb-2" />
            <p className="text-xl font-bold text-gray-800">
              {stats.totalMeals}
            </p>
            <p className="text-sm text-gray-600">Available Meals</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
