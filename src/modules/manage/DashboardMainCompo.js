"use client";
import {
  Edit,
  Heart,
  LockIcon,
  LogOut,
  Share2,
  ShoppingBag,
  Tag,
  User,
} from "lucide-react";
import dynamic from "next/dynamic";
import { useState } from "react";
import NameAndImage from "./NameAndImage";

// Dynamic imports
const tabs = {
  Dashboard: dynamic(() =>
    import("@/modules/manage/dashboardStats/DashboardStats")
  ),
  Profile: dynamic(() => import("@/modules/manage/profile/Profile")),
  Password: dynamic(() => import("@/modules/manage/password/Password")),
  "Enrolled Courses": dynamic(() =>
    import("@/modules/manage/enrolledCourses/EnrolledCourses")
  ),
  "Wish List": dynamic(() => import("@/modules/manage/Wishlist")),
  Orders: dynamic(() => import("@/modules/manage/orders/Orders")),
  Coupon: dynamic(() => import("@/modules/manage/Coupon")),
  Review: dynamic(() => import("@/modules/manage/Review")),
};

const navItems = [
  { name: "Dashboard", icon: <User className="w-5 h-5" /> },
  { name: "Profile", icon: <Tag className="w-5 h-5" /> },
  { name: "Password", icon: <LockIcon className="w-5 h-5" /> },
  { name: "Enrolled Courses", icon: <Share2 className="w-5 h-5" /> },
  { name: "Wish List", icon: <Heart className="w-5 h-5" /> },
  { name: "Orders", icon: <ShoppingBag className="w-5 h-5" /> },
  { name: "Coupon", icon: <Share2 className="w-5 h-5" /> },
  { name: "Review", icon: <Edit className="w-5 h-5" /> },
];

const descriptions = {
  Dashboard: "Overview of your account and recent activities",
  "Enrolled Courses": "View and manage your enrolled courses",
  Profile: "Manage your personal information and account settings",
  Password: "Update your password for enhanced security",
  "Wish List": "Your saved items for future purchase",
  Points: "View and redeem your loyalty points",
  Orders: "Track and manage your order history",
  Coupon: "Your available discounts and promo codes",
  Review: "Manage your product reviews and ratings",
  Address: "Your saved shipping addresses",
  Referral: "Invite friends and earn rewards",
};

export default function DashboardMainCompo() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const ActiveComponent = tabs[activeTab];

  return (
    <section className="bg-[#F5F1EA] text-black">
      <div className="container mx-auto px-4 py-16 flex space-x-6 w-full h-full">
        {/* Sidebar */}
        <aside className="w-72 bg-[#FFFFFF] p-4 shadow-sm rounded-md h-full">
          <NameAndImage />
          <nav className="space-y-2 mt-4">
            {navItems.map((item) => (
              <button
                key={item?.name}
                onClick={() => setActiveTab(item?.name)}
                className={`flex items-center w-full p-3 cursor-pointer rounded-lg transition-all ${
                  activeTab === item?.name
                    ? "bg-[#FFA41F66] font-medium  rounded-md cursor-pointer text-[#101B24] "
                    : "hover:bg-gray-100"
                }`}
              >
                <span className="text-xl mr-2">{item?.icon}</span>
                {item?.name}
              </button>
            ))}
          </nav>

          {/* Logout */}
          <p className="pt-24 flex items-center gap-2 cursor-pointer text-primary text-[#101B24]">
            Log Out <LogOut className="w-4 h-4" />
          </p>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="bg-[#FFFFFF] p-6 shadow-sm rounded-md h-full">
            <header className="mb-8">
              <h1 className="text-3xl font-semibold text-[#101B24]">
                My {activeTab}
              </h1>
              <p className="text-[#7D7D7D] mt-3">{descriptions[activeTab]}</p>
            </header>

            {/* Dynamic Tab Content */}
            <div className="animate-fadeIn">
              {ActiveComponent ? <ActiveComponent /> : "Loading..."}
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
