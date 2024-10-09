"use client"; // Make this component a client component
import { useSession } from "next-auth/react";
import { useAppSelector } from "@/redux/hooks";
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const MyProfile = () => {
  // Fetch session using next-auth
  const { data: session } = useSession();
  // console.log(session);

  // Get user data from Redux store
  const { user } = useAppSelector((state) => state.user); // Adjust based on your Redux state shape

  return (
    <div className="min-h-screen  flex items-center justify-center py-10">
      <div className="max-w-md w-full bg-white shadow-2xl rounded-3xl p-8 relative overflow-hidden">
        {/* Profile Picture */}
        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
          <Image
            src={`https://avatar.iran.liara.run/public/${user?.userId || "default"}`}
            alt="Profile Picture"
            width={128}
            height={128}
            className="object-cover"
          />
        </div>

        {/* Floating Decorative Shapes */}
        <div className="absolute -top-12 -right-10 w-40 h-40 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-12 -left-10 w-40 h-40 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-4">
          {user?.name || session?.user?.name}&apos;s Profile
        </h1>

        {/* Profile Information */}
        <div className="space-y-4">
          {user?.userId && (
            <div className="flex justify-between text-gray-700">
              <span className="font-medium">User ID:</span>
              <span className="font-light">{user?.userId}</span>
            </div>
          )}
          <div className="flex justify-between text-gray-700">
            <span className="font-medium">Name:</span>
            <span className="font-light">{user?.name || session?.user?.name}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span className="font-medium">Email:</span>
            <span className="font-light">{user?.email || session?.user?.email}</span>
          </div>
          {user?.role && (
            <div className="flex justify-between text-gray-700">
              <span className="font-medium">Role:</span>
              <span className="font-light">{user?.role}</span>
            </div>
          )}
        </div>

        {/* Edit Profile Button */}
        {/* <div className="mt-6">
          <button
            onClick={() => alert("Edit Profile feature coming soon!")}
            className="w-full bg-[#2A4460] text-white py-3 rounded-lg hover:bg-[#FF5733] transition duration-300 ease-in-out transform hover:scale-105"
          >
            Edit Profile
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(MyProfile), { ssr: false });

