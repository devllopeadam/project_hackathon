import { motion } from "framer-motion";
import { InputField } from "../components";
import { useDataInputs } from "../contexts/DataInputsContext";
import { useState } from "react";

const Login = () => {
  const { data, errors } = useDataInputs();
  const [isValid, setIsValid] = useState(false);
  const { data, setData } = useDataInputs();

  const handleClick = () => {
    if (isValid) {
      setData({
        password: "",
        email: "",
      });
    }
    // Validate all the inputs here
    let newErrors = {
      password: "",
      email: "",
    };

    if (paymentMethod !== "eMoney") {
      Object.keys(data)
        .slice(0, -2)
        .forEach((key) => {
          let error = "";
          if (data[key].trim() === "") {
            error = "Field cannot be empty";
            setIsValid(false);
          } else if (key === "email" && !/\S+@\S+\.\S+/.test(data[key])) {
            error = "Invalid email format";
            setIsValid(false);
          } else if (key === "phone" && !/[0-9]{5}/.test(data[key])) {
            error = "Invalid Phone format";
            setIsValid(false);
          } else {
            setIsValid(true);
            setData({
              name: "",
              email: "",
              phone: "",
              adress: "",
              city: "",
              country: "",
              zip: "",
              eNumber: "",
              ePin: "",
            });
          }
          newErrors[key] = error;
        });
    } else {
      Object.keys(data).forEach((key) => {
        let error = "";
        if (data[key].trim() === "") {
          error = "Field cannot be empty";
          setIsValid(false);
        } else if (key === "email" && !/\S+@\S+\.\S+/.test(data[key])) {
          error = "Invalid email format";
          setIsValid(false);
        } else if (key === "phone" && !/[0-9]{5}/.test(data[key])) {
          error = "Invalid Phone format";
          setIsValid(false);
        } else if (key === "eNumber" && !/^[0-9]{9}$/.test(data[key])) {
          error = "Wrong e-Number Format";
        } else if (key === "ePin" && !/^[0-9]{4}$/.test(data[key])) {
          error = "Wrong e-Pin Format";
        } else {
          setIsValid(true);
          setData({
            name: "",
            email: "",
            phone: "",
            adress: "",
            city: "",
            country: "",
            zip: "",
            eNumber: "",
            ePin: "",
          });
        }
        newErrors[key] = error;
      });
    }
    // Update the data state
    setData(data);
    setErrors(newErrors);
  };

  useEffect(() => {
    if (isValid) {
      setData({
        name: "",
        email: "",
        phone: "",
        adress: "",
        city: "",
        country: "",
        zip: "",
        eNumber: "",
        ePin: "",
      });
    }
  }, [isValid]);

  return (
    <div className="login w-full h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 min-w-[550px] rounded-[10px] shadow-md flex flex-col gap-5">
        <h1 className="text-2xl font-semibold text-center">Login</h1>
        <InputField
          id={"email"}
          type={"text"}
          name={"email"}
          errorName={errors.email}
          value={data.email}
          label={"Your Email"}
          placeholder={"test@example.com"}
        />
        <InputField
          id={"password"}
          type={"password"}
          name={"password"}
          errorName={errors.password}
          value={data.password}
          label={"Your Password"}
          placeholder={"xxxxxxxxx"}
        />
        <button
          onClick={hanldeClick}
          className="w-full text-center bg-[#5199fd] text-white py-3 rounded-md">
          Submit
        </button>
      </motion.div>
    </div>
  );
};

export default Login;
