// "use client";
// import { useAppSelector } from "@/redux/hooks";
// import React from "react";
// import Image from "next/image";
// import dynamic from "next/dynamic";

// const MyProfile = () => {
//   // Get user data from Redux store
//   const { user } = useAppSelector((state) => state.user); // Adjust based on your Redux state shape

//   return (
//     <div className="min-h-screen  flex items-center justify-center py-10">
//       <div className="max-w-md w-full bg-white shadow-2xl rounded-3xl p-8 relative overflow-hidden">
//         {/* Profile Picture */}
//         <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
//           <Image
//             src={`https://avatar.iran.liara.run/public/${user?.userId || "default"}`}
//             alt="Profile Picture"
//             width={128}
//             height={128}
//             className="object-cover"
//           />
//         </div>

//         {/* Floating Decorative Shapes */}
//         <div className="absolute -top-12 -right-10 w-40 h-40 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
//         <div className="absolute -bottom-12 -left-10 w-40 h-40 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>

//         {/* Title */}
//         <h1 className="text-3xl font-bold text-center text-gray-900 mb-4">
//           {user?.name}&apos;s Profile
//         </h1>

//         {/* Profile Information */}
//         <div className="space-y-4">
//           {user?.userId && (
//             <div className="flex justify-between text-gray-700">
//               <span className="font-medium">User ID:</span>
//               <span className="font-light">{user?.userId}</span>
//             </div>
//           )}
//           <div className="flex justify-between text-gray-700">
//             <span className="font-medium">Name:</span>
//             <span className="font-light">{user?.name}</span>
//           </div>
//           <div className="flex justify-between text-gray-700">
//             <span className="font-medium">Email:</span>
//             <span className="font-light">{user?.email}</span>
//           </div>
//           {user?.role && (
//             <div className="flex justify-between text-gray-700">
//               <span className="font-medium">Role:</span>
//               <span className="font-light">{user?.role}</span>
//             </div>
//           )}
//         </div>

//         {/* Edit Profile Button */}
//         {/* <div className="mt-6">
//           <button
//             onClick={() => alert("Edit Profile feature coming soon!")}
//             className="w-full bg-[#2A4460] text-white py-3 rounded-lg hover:bg-[#FF5733] transition duration-300 ease-in-out transform hover:scale-105"
//           >
//             Edit Profile
//           </button>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default dynamic(() => Promise.resolve(MyProfile), { ssr: false });

//! Last AND Final

"use client";
import { useAppSelector } from "@/redux/hooks";
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const MyProfile = () => {
  // Get user data from Redux store
  const { user } = useAppSelector((state) => state.user);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="w-full">
        {/* Profile Banner Image */}
        <div
          className="relative w-full h-64 bg-cover bg-center"
          // style={{
          //   backgroundImage:
          //     "url('https://i.ibb.co.com/yWF9YHV/uwp4522203.jpg')",
          // }}

          style={{
            backgroundImage:
              "radial-gradient(circle farthest-corner at 3.2% 49.6%, rgba(80,12,139,0.87) 0%, rgba(161,10,144,0.72) 83.6%)",
          }}
        >
          {/* Profile Picture */}
          <div className="absolute bottom-0 left-10 transform translate-y-1/2">
            <Image
              src={`https://avatar.iran.liara.run/public/`}
              alt="Profile Picture"
              width={150}
              height={150}
              className="object-cover rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </div>

        {/* Profile Information */}
        <div className="mt-20 px-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {user?.name}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
            {user?.userId && (
              <div className="space-y-2">
                <span className="block text-sm font-semibold text-gray-500">
                  User ID
                </span>
                <span className="block text-lg font-medium">
                  {user?.userId}
                </span>
              </div>
            )}
            <div className="space-y-2">
              <span className="block text-sm font-semibold text-gray-500">
                Name
              </span>
              <span className="block text-lg font-medium">{user?.name}</span>
            </div>
            <div className="space-y-2">
              <span className="block text-sm font-semibold text-gray-500">
                Email
              </span>
              <span className="block text-lg font-medium">{user?.email}</span>
            </div>
            {user?.role && (
              <div className="space-y-2">
                <span className="block text-sm font-semibold text-gray-500">
                  Role
                </span>
                <span className="block text-lg font-medium">{user?.role}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(MyProfile), { ssr: false });

//! 2nd Profile

// "use client";
// import { useAppSelector } from "@/redux/hooks";
// import React, { useState } from "react";
// import Image from "next/image";
// import dynamic from "next/dynamic";

// const MyProfile = () => {
//   // Get user data from Redux store
//   const { user } = useAppSelector((state) => state.user);

//   // Use state to manage input fields
//   const [name, setName] = useState(user?.name || "");
//   const [email, setEmail] = useState(user?.email || "");
//   const [role, setRole] = useState(user?.role || "");

//   return (
//     <div className="min-h-screen flex items-center justify-center py-10 bg-gray-100">
//       <div className="max-w-3xl w-full bg-white shadow-xl rounded-2xl p-10 relative">
//         {/* Profile Picture */}
//         <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
//           <Image
//             src={`https://avatar.iran.liara.run/public}`}
//             alt="Profile Picture"
//             width={128}
//             height={128}
//             className="object-cover"
//           />
//         </div>

//         {/* Floating Decorative Shapes */}
//         <div className="absolute -top-12 -right-10 w-40 h-40 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
//         <div className="absolute -bottom-12 -left-10 w-40 h-40 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>

//         {/* Title */}
//         <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
//           {name}&apos;s Profile
//         </h1>

//         {/* Profile Information in Input Fields */}
//         <div className="space-y-6">
//           <div className="flex flex-col">
//             <label className="text-gray-700 font-semibold mb-2">User ID</label>
//             <input
//               type="text"
//               className="p-3 border rounded-lg focus:outline-none focus:border-blue-500"
//               value={user?.userId || "N/A"}
//               disabled
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="text-gray-700 font-semibold mb-2">Name</label>
//             <input
//               type="text"
//               className="p-3 border rounded-lg focus:outline-none focus:border-blue-500"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Enter your name"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="text-gray-700 font-semibold mb-2">Email</label>
//             <input
//               type="email"
//               className="p-3 border rounded-lg focus:outline-none focus:border-blue-500"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="text-gray-700 font-semibold mb-2">Role</label>
//             <input
//               type="text"
//               className="p-3 border rounded-lg focus:outline-none focus:border-blue-500"
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               placeholder="Enter your role"
//             />
//           </div>
//         </div>

//         {/* Save Changes Button */}
//         {/* <div className="mt-6 flex justify-center">
//           <button
//             // onClick={() => alert("Profile updated successfully!")}
//             className="w-full max-w-xs bg-[#2A4460] text-white py-3 rounded-lg hover:bg-[#FF5733] transition duration-300 ease-in-out transform hover:scale-105"
//           >
//             Save Changes
//           </button>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default dynamic(() => Promise.resolve(MyProfile), { ssr: false });
