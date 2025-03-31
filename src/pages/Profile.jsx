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
    <div className="profile-container max-w-4xl mx-auto p-6 sm:p-8 md:p-10 bg-white shadow-lg rounded-lg mt-10 border min-h-screen">
      <button
        className="back-button bg-blue-600 text-white px-6 py-3 rounded-md mb-6 shadow-md hover:bg-blue-700 transition duration-200"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <h1 className="profile-header text-3xl sm:text-4xl font-semibold mb-8 text-center text-gray-900">
        Profile Details
      </h1>

      <div className="profile-content grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
        <div className="profile-info bg-gray-100 p-6 rounded-lg shadow-md">
          <strong className="label text-gray-700 text-lg">Name:</strong>
          <p className="value text-xl text-gray-900">{user.name || "N/A"}</p>
        </div>

        <div className="profile-info bg-gray-100 p-6 rounded-lg shadow-md">
          <strong className="label text-gray-700 text-lg">Username:</strong>
          <p className="value text-xl text-gray-900">
            {user.username || "N/A"}
          </p>
        </div>

        <div className="profile-info bg-gray-100 p-6 rounded-lg shadow-md">
          <strong className="label text-gray-700 text-lg">Email:</strong>
          <p className="value text-xl text-gray-900">{user.email || "N/A"}</p>
        </div>

        <div className="profile-info bg-gray-100 p-6 rounded-lg shadow-md">
          <strong className="label text-gray-700 text-lg">Phone:</strong>
          <p className="value text-xl text-gray-900">
            {user.mobileno || "N/A"}
          </p>
        </div>

        {user.education && user.education.length > 0 ? (
          <div className="education-info col-span-2 bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="section-header text-2xl sm:text-3xl font-semibold mb-5 text-gray-800">
              Education Details
            </h2>

            <div className="education-list space-y-6">
              {user.education.map((edu, index) => (
                <div
                  key={index}
                  className="education-item bg-white p-5 rounded-md shadow-md border border-gray-300"
                >
                  <strong className="label text-gray-700 text-lg">
                    Degree:
                  </strong>
                  <p className="value text-xl text-gray-900">
                    {edu.degree || "N/A"}
                  </p>

                  <strong className="label text-gray-700 text-lg">
                    Institute:
                  </strong>
                  <p className="value text-xl text-gray-900">
                    {edu.institute || "N/A"}
                  </p>

                  <strong className="label text-gray-700 text-lg">
                    Graduation Year:
                  </strong>
                  <p className="value text-xl text-gray-900">
                    {edu.year || "N/A"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="no-education text-red-500 col-span-2 text-center text-xl">
            No education details provided.
          </p>
        )}

        {(user.address || user.city || user.state || user.country) && (
          <div className="address-info col-span-2 bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="section-header text-2xl sm:text-3xl font-semibold mb-5 text-gray-800">
              Address Details
            </h2>
            <p className="address-value text-xl text-gray-900">
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
