/* eslint-disable react/prop-types */
import { useDataInputs } from "../contexts/DataInputsContext";

const InputField = ({
  id,
  name,
  errorName,
  value,
  label,
  placeholder,
  className = "",
  type,
}) => {
  const { setErrors, setData } = useDataInputs();
  const checkAndChange = (e) => {
    const { name, value } = e.target;

    // Update the data state
    setData((prevData) => ({ ...prevData, [name]: value }));

    // Validate the input
    let error = "";
    if (value.trim() === "") {
      error = "Field cannot be empty";
    } else if (name === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
      error = "Wrong Email Format";
    } else if (name === "password" && !/\w{8}/.test(value)) {
      error = "Password must be at least 8 characters long";
    }
    // Update the errors state+653
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div className="flex itemsc-center justify-between">
        <label
          htmlFor={id}
          className={`text-[12px] ${
            errorName !== "" ? "text-red-600" : "text-accent-black"
          } font-medium`}>
          {label}
        </label>
        <small className="text-red-600">{errorName}</small>
      </div>
      <input
        placeholder={placeholder}
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={checkAndChange}
        className={`p-4 pr-0 w-full ${
          errorName !== "" ? "" : "focus:shadow-input focus:border-[#5199fd]"
        } rounded-radius transition-all duration-300 border ${
          errorName !== "" ? "border-red-600" : "border-[#cfcfcf]"
        } text-[15px] placeholder:font-medium outline-none`}
      />
    </div>
  );
};

export default InputField;
