import { useState } from "react";
import { icons } from "../constants";

interface IInputField {
  title: string;
  helperText?: string;
  type: "password" | "email" | "text" | "number";
  name: string;
  value: string;
  placeholder?: string;
  fieldIcon?: any;
  maxLength?: number;
  handleChangeText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  otherStyles?: string;
  errorMsg?: string;
}

export default function InputField({
  title,
  helperText,
  type,
  name,
  value,
  placeholder = "",
  fieldIcon,
  maxLength,
  handleChangeText,
  otherStyles = "",
  errorMsg,
  ...props
}: IInputField) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  return (
    <div className="w-full">
      <p className="text-base font-medium text-textPrimary">{title}</p>

      <div className="h-25 flex flex-row items-center relative">
        <input
          className="w-full text-textPrimary bg-input-primary placeholder-input-third px-2.5 py-5 my-2 rounded border border-input-border sm:h-10 md:h-12 lg:h-14"
          value={value}
          name={name}
          type={type === "password" && showPassword ? "text" : type}
          placeholder={placeholder}
          onChange={handleChangeText}
          maxLength={maxLength}
          {...props}
        />

        {/* Password visibility toggle */}
        {title === "Password" && (
          <img
            src={!showPassword ? icons.eye : icons.eyeHide}
            className="w-7 h-7 absolute  right-2.5 cursor-pointer"
            onClick={togglePasswordVisibility}
            alt="Toggle visibility"
          />
        )}

        {/* Error Msg */}
        {errorMsg && (
          <p className="text-xs text-red-500 absolute -bottom-2.5 left-1.5">
            {errorMsg}
          </p>
        )}
      </div>

      <p className="text-base font-medium text-input-secondary">{helperText}</p>
    </div>
  );
}
