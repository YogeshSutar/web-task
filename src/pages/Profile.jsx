import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const user = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-600 text-lg font-semibold">User not logged in</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-md mt-10 border">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 shadow-md hover:bg-blue-600"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Profile Details
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100 p-4 rounded-md shadow">
          <strong className="block text-gray-700">Name:</strong>
          <p className="text-lg text-gray-900">{user.name || "N/A"}</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-md shadow">
          <strong className="block text-gray-700">Username:</strong>
          <p className="text-lg text-gray-900">{user.username || "N/A"}</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-md shadow">
          <strong className="block text-gray-700">Email:</strong>
          <p className="text-lg text-gray-900">{user.email || "N/A"}</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-md shadow">
          <strong className="block text-gray-700">Phone:</strong>
          <p className="text-lg text-gray-900">{user.mobileno || "N/A"}</p>
        </div>

        {user.education && user.education.length > 0 ? (
          <div className="col-span-2 bg-gray-100 p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">
              Education Details
            </h2>

            <div className="space-y-4">
              {user.education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white p-3 rounded-md shadow-md border"
                >
                  <strong className="block text-gray-700">Degree:</strong>
                  <p className="text-lg text-gray-900">{edu.degree || "N/A"}</p>

                  <strong className="block text-gray-700">Institute:</strong>
                  <p className="text-lg text-gray-900">
                    {edu.institute || "N/A"}
                  </p>

                  <strong className="block text-gray-700">
                    Graduation Year:
                  </strong>
                  <p className="text-lg text-gray-900">{edu.year || "N/A"}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-red-500 col-span-2 text-center">
            No education details provided.
          </p>
        )}

        {(user.address || user.city || user.state || user.country) && (
          <div className="col-span-2 bg-gray-100 p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">
              Address Details
            </h2>
            <p className="text-lg text-gray-900">
              {user.address && <span>{user.address}, </span>}
              {user.city && <span>{user.city}, </span>}
              {user.state && <span>{user.state}, </span>}
              {user.country && <span>{user.country}</span>}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
