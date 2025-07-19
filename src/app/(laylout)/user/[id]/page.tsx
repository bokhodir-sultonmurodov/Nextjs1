import React from "react";
import { Mail, Phone, MapPin, Cake, UserRound } from "lucide-react";

const UserDetail = async ({ params }: { params: any }) => {
  const id = params.id;

  const res = await fetch(`https://dummyjson.com/users/${id}`, {
    cache: "force-cache",
  });
  const user = await res.json();

  return (
    <div className="py-10 px-4 max-w-4xl mx-auto bg-white">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <img
          src={user.image}
          alt={user.firstName}
          className="w-48 h-48 rounded-full object-cover border border-gray-300"
        />
        <div className="flex flex-col gap-3 text-gray-800">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <UserRound className="w-6 h-6 text-gray-700" />
            {user.firstName} {user.lastName}
          </h1>

          <p className="flex items-center gap-2 text-sm text-gray-600">
            <Mail className="w-4 h-4" />
            {user.email}
          </p>

          <p className="flex items-center gap-2 text-sm text-gray-600">
            <Phone className="w-4 h-4" />
            {user.phone}
          </p>

          <p className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4" />
            {user.address?.address}, {user.address?.city}
          </p>

          <p className="flex items-center gap-2 text-sm text-gray-600">
            <Cake className="w-4 h-4" />
            {user.birthDate}
          </p>

          <p className="flex items-center gap-2 text-sm text-gray-600 capitalize">
            Gender: {user.gender}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
