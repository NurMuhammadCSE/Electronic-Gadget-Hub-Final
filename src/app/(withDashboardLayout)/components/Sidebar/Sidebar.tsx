"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShoppingCart,
  Box,
  List,
  Menu,
  X,
  UserRoundPen,
  Home,
} from "lucide-react";
import dynamic from "next/dynamic";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Dashboard", icon: <Home size={24} />, href: "/dashboard/admin" },
    {
      label: "Products",
      icon: <Box size={24} />,
      href: "/dashboard/admin/products",
    },
    {
      label: "Add Product",
      icon: <List size={24} />,
      href: "/dashboard/admin/products/add-product",
    },
    {
      label: "Orders",
      icon: <ShoppingCart size={24} />,
      href: "/dashboard/admin/orders",
    },
    {
      label: "Profile",
      icon: <UserRoundPen size={24} />,
      href: "/dashboard/admin/my-profile",
    },
  ];

  return (
    <div className="w-64">
      {/* Sidebar Toggle Button for Mobile */}
      <div className="lg:hidden mt-12 fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white bg-gray-800 p-2 rounded"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Fixed Sidebar for Desktop */}
      <div
        className={`z-10 md:fixed flex justify-between overflow-x-hidden inset-y-0 left-0 transform ${
          isOpen && "-translate-x-full"
        }  bg-[#ffffff] dark:bg-black dark:text-white text-black w-64 px-6 pt-16  transition-transform duration-300 ease-in-out shadow-lg`} // Add pt-16 here to offset for navbar
      >
        {/* Sidebar Navigation */}
        <nav className="flex flex-col space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center p-2 rounded-md dark:hover:bg-gray-400 hover:bg-[#ece8e8] transition duration-200"
            >
              {item.icon}
              <span className="ml-3 text-lg">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default dynamic(() => Promise.resolve(Sidebar), { ssr: false });
