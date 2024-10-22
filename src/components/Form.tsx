import InputField from "./InputField";
import CustomButton from "./CustomButton";
import { ChangeEvent, FormEvent, useState } from "react";
import { useParams } from "react-router-dom";
import { validateForm } from "../utils/validateForm";

interface IFormErrors {
  email?: string;
  password?: string;
  common?: string;
}

export default function Form() {
  const isLogin = true;

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<IFormErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();

    const isValid = validateForm(formData, setErrors);

    if (isValid) {
      // Submit the form or handle login/register logic
      console.log("Form submitted", formData);
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <div className="flex flex-col gap-y-6 md:gap-y-4 lg:gap-y-5">
      <div className="w-3/4">
        <h3 className="font-bold tracking-wide text-textPrimary mb-2 md:text-3xl lg:text-4xl">
          Let the Journey Begin!
        </h3>
        <h6 className="text-lg font-normal text-textSecondary ">
          This is basic login page which is used for levitation assignment
          purpose.
        </h6>
      </div>

      <InputField
        title="Email Address"
        type="email"
        value={formData.email}
        placeholder="Enter Email ID"
        helperText="This email will be displayed with your inquiry"
        handleChangeText={handleChange}
        errorMsg={errors.email}
      />

      <InputField
        title="Password"
        type="password"
        value={formData.password}
        placeholder="Enter the Password"
        // helperText="Any further updates will be forwarded on this Email ID"
        handleChangeText={handleChange}
        errorMsg={errors.password}
      />

      <div className="flex items-center gap-8 ">
        <CustomButton
          title={isLogin ? "Login now" : "Register"}
          otherStyles="text-base text-button-primary bg-button-secondary h-[48px] px-[19.5px]"
          handlePress={handleSubmit}
        />

        <a
          href={isLogin ? "/#" : "/login"}
          className="text-sm text-input-secondary"
        >
          {isLogin ? "Forget password ?" : "Already have account ?"}
        </a>
      </div>
    </div>
  );
}
