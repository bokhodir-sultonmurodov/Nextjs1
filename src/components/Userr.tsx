"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Mail, Phone, Eye, Users } from "lucide-react"; // Lucide ikonalar

const Userr = ({ users }: { users: any }) => {
  const router = useRouter();

  const handleClick = (id: any) => {
    router.push(`/user/${id}`);
  };

  return (
    <div className="py-10 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800 flex items-center justify-center gap-2">
        <Users className="w-8 h-8 text-gray-700" />
        Our  Users
      </h1>

      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-4">
        {users?.users?.map((user: any) => (
          <div
            key={user.id}
            className="bg-white border border-gray-300 rounded-2xl p-6 flex flex-col items-center justify-center transition duration-300"
          >
            <img
              src={user.image}
              alt={user.firstName}
              className="w-24 h-24 rounded-full object-cover border border-gray-300 mb-4"
            />

            <h2 className="text-xl font-semibold text-gray-800 text-center">
              {user.firstName} {user.lastName}
            </h2>

            <div className="mt-2 text-gray-600 text-sm text-center flex items-center gap-1">
              <Mail className="w-4 h-4" /> {user.email}
            </div>
            <div className="text-gray-600 text-sm mt-1 text-center flex items-center gap-1">
              <Phone className="w-4 h-4" /> {user.phone}
            </div>

            <button
              onClick={() => handleClick(user.id)}
              className="cursor-pointer mt-5 px-4 py-2 bg-gray-800 text-white text-sm rounded-xl hover:bg-gray-700 transition duration-300 flex items-center gap-2"
            >
              <Eye className="w-4 h-4" />
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Userr;
