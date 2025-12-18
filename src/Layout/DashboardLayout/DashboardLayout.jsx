import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router";
import { BsBox } from "react-icons/bs";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaUsers,
  FaTasks,
  FaParachuteBox,
  FaSignOutAlt,
  FaHamburger,
  FaHeart,
} from "react-icons/fa";
import { FiGitPullRequest } from "react-icons/fi";
import { GiMeal } from "react-icons/gi";
import { GiFishCooked } from "react-icons/gi";
import {
  MdOutlinePayment,
  MdOutlineTaskAlt,
  MdAssignmentTurnedIn,
  MdDashboard,
  MdOutlineReviews,
} from "react-icons/md";
import useRole from "../../Hooks/useRole";
import useAuth from "../../Hooks/useAuth";
import logo from "../../assets/logo.png";

const DashBoardLayout = () => {
  const { role } = useRole();
  const { user, logOut } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  const navLinkClasses = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
      isActive
        ? "bg-amber-500 text-white shadow-sm"
        : "text-gray-700 hover:bg-amber-100 hover:text-amber-700"
    }`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white flex">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-900/30 z-40 lg:hidden"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-lg transform transition-transform duration-200 ease-out lg:translate-x-0 lg:static flex flex-col ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo Area */}
        <div className="h-16 flex items-center px-4 border-b">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Logo"
              className="w-8 h-8"
            />
            <span className="text-lg font-bold text-gray-800">
              Chef<span className="text-amber-500">Hub</span>
            </span>
          </Link>
          <button
            onClick={closeSidebar}
            className="lg:hidden ml-auto text-gray-600 hover:text-amber-600"
          >
            <FaTimes size={18} />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto py-4 px-2 space-y-1">
          {/* Common Links */}
          <p className="px-2 text-xs text-gray-500 uppercase tracking-wide mb-1">
            Navigation
          </p>
          <NavLink
            to="/dashboard"
            end
            className={navLinkClasses}
            onClick={closeSidebar}
          >
            <MdDashboard className="text-lg" />
            <span>Dashboard</span>
          </NavLink>

          {/* User Links */}
          {role === "user" && (
            <>
              <NavLink
                to="/dashboard/my-order"
                className={navLinkClasses}
                onClick={closeSidebar}
              >
                <FaParachuteBox className="text-lg" />
                <span>My Orders</span>
              </NavLink>
              <NavLink
                to="/dashboard/payment-history"
                className={navLinkClasses}
                onClick={closeSidebar}
              >
                <MdOutlinePayment className="text-lg" />
                <span>Payment History</span>
              </NavLink>
              <NavLink
                to="/dashboard/review"
                className={navLinkClasses}
                onClick={closeSidebar}
              >
                <MdOutlineReviews className="text-lg" />
                <span>My Reviews</span>
              </NavLink>
              <NavLink
                to="/dashboard/favorite"
                className={navLinkClasses}
                onClick={closeSidebar}
              >
                <FaHeart className="text-lg" />
                <span>Favorites</span>
              </NavLink>
              <NavLink
                to="/dashboard/profile"
                className={navLinkClasses}
                onClick={closeSidebar}
              >
                <FaUser className="text-lg" />
                <span>Profile</span>
              </NavLink>
            </>
          )}

          {/* Chef Links */}
          {role === "chef" && (
            <>
              <p className="px-2 text-xs text-gray-500 uppercase tracking-wide mt-3 mb-1">
                Chef Workspace
              </p>
              <NavLink
                to="/dashboard/request-order"
                className={navLinkClasses}
                onClick={closeSidebar}
              >
               <FiGitPullRequest className="text-lg"/>
                <span>Order Requests</span>
              </NavLink>
              <NavLink
                to="/dashboard/my-meals"
                className={navLinkClasses}
                onClick={closeSidebar}
              >
                <GiMeal className="text-lg"/>
                <span>My Meals</span>
              </NavLink>
              <NavLink
                to="/dashboard/create-meals"
                className={navLinkClasses}
                onClick={closeSidebar}
              >
               <GiFishCooked className="text-lg"/>
                <span>Add New Meal</span>
              </NavLink>
              <NavLink
                to="/dashboard/profile"
                className={navLinkClasses}
                onClick={closeSidebar}
              >
                <FaUser className="text-lg" />
                <span>Profile</span>
              </NavLink>
            </>
          )}

          {/* Admin Links */}
          {role === "admin" && (
            <>
              <p className="px-2 text-xs text-gray-500 uppercase tracking-wide mt-3 mb-1">
                Admin Controls
              </p>
              <NavLink
                to="/dashboard/my-order"
                className={navLinkClasses}
                onClick={closeSidebar}
              >
                <BsBox />
                <span>My Order</span>
              </NavLink>
              <NavLink
                to="/dashboard/payment-history"
                className={navLinkClasses}
                onClick={closeSidebar}
              >
                <MdOutlinePayment className="text-lg" />
                <span>Payment History</span>
              </NavLink>
              <NavLink
                to="/dashboard/approve-chef"
                className={navLinkClasses}
                onClick={closeSidebar}
              >
                <FaHamburger />
                <span>Chef Approvals</span>
              </NavLink>
              <NavLink
                to="/dashboard/users-management"
                className={navLinkClasses}
                onClick={closeSidebar}
              >
                <FaUsers className="text-lg" />
                <span>User Management</span>
              </NavLink>
              <NavLink
                to="/dashboard/profile"
                className={navLinkClasses}
                onClick={closeSidebar}
              >
                <FaUser className="text-lg" />
                <span>Profile</span>
              </NavLink>
            </>
          )}

          <div className="my-3 border-t"></div>

          {/* Home Link */}
          <NavLink to="/" className={navLinkClasses} onClick={closeSidebar}>
            <FaHome className="text-lg" />
            <span>Home</span>
          </NavLink>
        </div>

        {/* User Profile / Logout (Bottom) */}
        <div className="p-3 border-t">
          <div className="flex items-center gap-2 mb-3">
            <img
              src={user?.photoURL || "https://i.ibb.co/1Jgq0jZ/user.png"}
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <div className="overflow-hidden">
              <h4 className="text-sm font-semibold text-gray-800 truncate">
                {user?.displayName || "User"}
              </h4>
              <span className="text-xs text-amber-600 bg-amber-100 px-1.5 py-0.5 rounded-full capitalize">
                {role}
              </span>
            </div>
          </div>
          <button
            onClick={() => {
              logOut();
            }}
            className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-2 rounded hover:bg-gray-200 text-sm"
          >
            <FaSignOutAlt />
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Mobile Header */}
        <header className="lg:hidden h-14 bg-white border-b flex items-center justify-between px-3 sticky top-0 z-30">
          <div className="flex items-center gap-2">
            <button
              onClick={toggleSidebar}
              className="text-gray-600 hover:text-amber-600 p-1"
            >
              <FaBars size={20} />
            </button>
            <span className="font-semibold text-gray-800">Dashboard</span>
          </div>
          <Link to="/">
            <img src={logo} alt="Logo" className="w-7 h-7" />
          </Link>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-3 md:p-5">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb / Title */}
            <div className="hidden lg:flex items-center justify-between mb-5 bg-white p-4 rounded-lg shadow-sm">
              <div>
                <h1 className="text-xl font-bold text-gray-800">
                  Welcome back, {user?.displayName}!
                </h1>
                <p className="text-gray-600 text-sm mt-1">
                  Track your progress and manage your account
                </p>
              </div>
              <div className="text-sm text-gray-500">
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "short",
                  day: "numeric",
                })}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 md:p-4">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashBoardLayout;