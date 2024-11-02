"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation for App Router
import dynamic from "next/dynamic";
import { Menu, X } from "lucide-react";

const Sidebar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("orders"); // Default to "orders"
  const [isOpen, setIsOpen] = useState<boolean>(false); // State to handle mobile sidebar open/close
  const router = useRouter();

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setIsOpen(false); // Close sidebar on mobile after navigation
    // Navigate to the respective tab's page
    if (tab === "orders") {
      router.push("/dashboard/my-orders");
    } else if (tab === "profile") {
      router.push("/dashboard/my-profile");
    }
  };

  return (
    <div className="w-64">
      {/* Toggle button for mobile and tablet */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden p-2 mt-12 bg-gray-500 text-white fixed top-4 left-4 z-20"
      >
        {/* {isOpen ? "Close" : "Menu"} */}
        {isOpen ? <X size={24} /> : <Menu size={24} />}

      </button>

      {/* Sidebar */}
      <aside
        // className={`z-10 md:fixed flex justify-between overflow-x-hidden lg:static top-0 left-0 w-64 bg-[#ece8e8] text-black min-h-screen p-6 transform ${
        //   isOpen ? "translate-x-0" : "-translate-x-full"
        // } transition-transform duration-300 ease-in-out lg:translate-x-0`}

        className={`z-10 md:fixed flex justify-between overflow-x-hidden inset-y-0 left-0 transform ${
          isOpen && "-translate-x-full"
        }  bg-[#133E87] text-white w-64 px-6 pt-16  transition-transform duration-300 ease-in-out shadow-lg`}
      >

        <nav className="flex flex-col space-y-4">
          {/* Orders Section */}
          <button
            onClick={() => handleTabChange("orders")}
            className={`mt-2 py-2 px-4 text-left rounded-lg transition-colors ${
              activeTab === "orders"
                ? "bg-[#608BC1] text-white"
                : "hover:bg-[#608BC1] text-white"
            }`}
          >
            My Orders
          </button>

          {/* My Profile Section */}
          <button
            onClick={() => handleTabChange("profile")}
            className={`py-2 px-4 text-left rounded-lg transition-colors ${
              activeTab === "profile"
                ? "bg-[#608BC1] text-white"
                : "hover:bg-[#608BC1] text-white"
            }`}
          >
            My Profile
          </button>
        </nav>
      </aside>

      {/* Main content area for larger screens */}
      <div className="flex-1 p-6">{/* Content here */}</div>
    </div>
  );
};

// export default Sidebar;
export default dynamic(() => Promise.resolve(Sidebar), { ssr: false });

