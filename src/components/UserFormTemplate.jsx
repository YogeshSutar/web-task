import bgimage from "../assets/bglogin.png";
import "../pages/signuppage.css";

const UserFormTemplate = ({
  title,
  textArray,
  footerTitle,
  onSubmit,
  handleRegistraionBtn,
  footerValue,
  userForm,
  onChange,
  children,
}) => {
  return (
    <div
      className="w-full flex justify-center min-h-screen items-center bg-cover bg-center p-4"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <div className="w-full max-w-lg p-6 rounded-lg bg-gray-900 bg-opacity-90 shadow-lg">
        <h1 className="text-center pb-4 text-white font-extrabold text-3xl cursor-default">
          {title}
        </h1>

        <div className="grid gap-4">
          {textArray?.map((data, index) => (
            <div key={`login-field-${index}`} className="flex flex-col">
              <label className="text-white font-medium mb-1">
                {data.name}:
              </label>
              <input
                name={data.name}
                type={data.type}
                value={userForm?.[data.name] ?? ""}
                placeholder={data.placeholder}
                onChange={(e) => onChange(e, data.name)}
                className="p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
        </div>

        <div className="mt-4">{children}</div>

        <div className="mt-6">
          <button
            className="w-full border border-blue-700 px-4 py-2 rounded-md text-white text-lg font-semibold transition duration-300 bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-500"
            onClick={onSubmit}
          >
            Submit
          </button>
        </div>

        <div className="w-full text-center mt-5 text-white cursor-default">
          <span>
            {footerTitle}{" "}
            <span
              className="text-blue-400 cursor-pointer hover:text-blue-300 transition duration-200"
              onClick={handleRegistraionBtn}
            >
              {footerValue}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserFormTemplate;
