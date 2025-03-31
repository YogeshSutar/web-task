import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../Redux/slice/userSlice";
import UserFormTemplate from "../components/UserFormTemplate";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users || []);

  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    mobileno: "",
    username: "",
    password: "",
    cpassword: "",
    address: "",
    city: "",
    state: "",
    country: "",
    education: [{ degree: "", institute: "", year: "" }],
  });

  const [error, setError] = useState("");

  const handleChange = (e, field) => {
    setSignUpData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...signUpData.education];
    updatedEducation[index][field] = value;
    setSignUpData((prev) => ({ ...prev, education: updatedEducation }));
  };

  const addEducation = () => {
    setSignUpData((prev) => ({
      ...prev,
      education: [...prev.education, { degree: "", institute: "", year: "" }],
    }));
  };

  const removeEducation = (index) => {
    const updatedEducation = signUpData.education.filter((_, i) => i !== index);
    setSignUpData((prev) => ({ ...prev, education: updatedEducation }));
  };

  const validateForm = () => {
    const { name, email, mobileno, username, password, cpassword } = signUpData;

    if (!name || !email || !mobileno || !username || !password || !cpassword) {
      return "All fields are required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Invalid email format.";
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(mobileno)) {
      return "Invalid mobile number.";
    }

    if (password.length < 6) {
      return "Password must be at least 6 characters.";
    }

    if (password !== cpassword) {
      return "Passwords do not match.";
    }

    const userExists = users.some((user) => user.username === username);
    if (userExists) {
      return "Username already exists. Please use a different one.";
    }

    return null;
  };

  const onSubmit = () => {
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    dispatch(register(signUpData));
    alert("Registration successful!");

    setSignUpData({
      name: "",
      email: "",
      mobileno: "",
      username: "",
      password: "",
      cpassword: "",
      address: "",
      city: "",
      state: "",
      country: "",
      education: [{ degree: "", institute: "", year: "" }],
    });

    setError("");
    navigate("/");
  };

  return (
    <UserFormTemplate
      title="Sign Up"
      footerTitle="Already have an account?"
      footerValue="Login"
      handleRegistraionBtn={() => navigate("/")}
      onSubmit={onSubmit}
      userForm={signUpData}
      onChange={handleChange}
    >
      <div className="signup-container">
        <div className="grid grid-cols-2 gap-4">
          {[
            { name: "name", type: "text", placeholder: "Enter full name" },
            { name: "email", type: "email", placeholder: "Enter email" },
            {
              name: "mobileno",
              type: "tel",
              placeholder: "Enter mobile number",
            },
            { name: "username", type: "text", placeholder: "Enter username" },
            {
              name: "password",
              type: "password",
              placeholder: "Enter password",
            },
            {
              name: "cpassword",
              type: "password",
              placeholder: "Confirm password",
            },
          ].map((field, index) => (
            <input
              key={index}
              type={field.type}
              name={field.name}
              value={signUpData[field.name]}
              placeholder={field.placeholder}
              onChange={(e) => handleChange(e, field.name)}
              className="signup-input"
            />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          {[
            { name: "address", type: "text", placeholder: "Enter address" },
            { name: "city", type: "text", placeholder: "Enter city" },
            { name: "state", type: "text", placeholder: "Enter state" },
            { name: "country", type: "text", placeholder: "Enter country" },
          ].map((field, index) => (
            <input
              key={index}
              type={field.type}
              name={field.name}
              value={signUpData[field.name]}
              placeholder={field.placeholder}
              onChange={(e) => handleChange(e, field.name)}
              className="signup-input"
            />
          ))}
        </div>

        <div className="mt-5 education-container">
          <h2 className="text-white text-lg font-semibold mb-2">
            Education Details
          </h2>
          {signUpData.education.map((edu, index) => (
            <div key={index} className="education-box">
              <input
                type="text"
                placeholder="Institute"
                value={edu.institute}
                onChange={(e) =>
                  handleEducationChange(index, "institute", e.target.value)
                }
                className="signup-input"
              />
              <input
                type="text"
                placeholder="Degree"
                value={edu.degree}
                onChange={(e) =>
                  handleEducationChange(index, "degree", e.target.value)
                }
                className="signup-input"
              />
              <input
                type="text"
                placeholder="Year"
                value={edu.year}
                onChange={(e) =>
                  handleEducationChange(index, "year", e.target.value)
                }
                className="signup-input"
              />
              {index > 0 && (
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => removeEducation(index)}
                >
                  Cancel
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            className="add-education-btn"
            onClick={addEducation}
          >
            + Add More Education
          </button>
        </div>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>
    </UserFormTemplate>
  );
};

export default SignUp;
