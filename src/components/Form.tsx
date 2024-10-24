import InputField from "./InputField";
import CustomButton from "./CustomButton";
import { ChangeEvent, useEffect, useState } from "react";
import { validateForm } from "../utils/validateForm";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../api/auth";
import { loginSuccess } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface IFormData {
  name: string;
  email: string;
  password: string;
}
interface IFormErrors {
  name?: string;
  email?: string;
  password?: string;
  common?: string;
}

export default function Form() {
  const history = useLocation();
  const pathname = history.pathname;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authToken = useSelector((state: RootState) => state.user.token);
  
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (authToken) {
      navigate("/addProduct");
    }
  }, [authToken]);

  const [errors, setErrors] = useState<IFormErrors>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    const isLogin = pathname === "/login";

    const isValid = validateForm(isLogin, formData, setErrors);

    if (!isValid) {
      console.log("Form validation failed");
      console.log(errors);
      
      return;
    }

    setLoading(true);

    try {
      let response;
      if (isLogin) {
        response = await loginUser(formData.email, formData.password);
      } else {
        response = await registerUser(
          formData.name,
          formData.email,
          formData.password
        );
      }

      const { authToken } = response;

      // Dispatch action to store token in Redux
      dispatch(loginSuccess({ token: authToken, email: formData.email }));

      navigate("/addProduct");
    } catch (error) {
      console.error("Authentication error:", error);
      setErrors((prev) => ({
        ...prev,
        common: "Authentication failed. Please try again.",
      }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-y-6 md:gap-y-4 lg:gap-y-5">
      {/* Heading & sub-heading */}
      <div className="w-4/5">
        <h3 className="font-bold tracking-wide text-textPrimary mb-2 md:text-3xl lg:text-4xl">
          {pathname === "/login"
            ? "Let the Journey Begin!"
            : "Sign up to begin journey"}
        </h3>
        <h6 className="text-lg font-normal text-textSecondary ">
          {pathname === "/login"
            ? "This is basic login page which is used for levitation assignment purpose."
            : "This is basic signup page which is used for levitation assignment purpose."}
        </h6>
      </div>

      {/* Input's */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
      {/* Username  */}
      {pathname !== "/login" && (
        <InputField
          title="Enter your name"
          type="text"
          name="name"
          value={formData.name || ""}
          placeholder="Enter your name"
          helperText="This name will be displayed with your inquiry"
          handleChangeText={handleChange}
          errorMsg={errors.name}
        />
      )}

      <InputField
        title="Email Address"
        type="email"
        name="email"
        value={formData.email}
        placeholder="Enter Email ID"
        helperText="This email will be displayed with your inquiry"
        handleChangeText={handleChange}
        errorMsg={errors.email}
      />

      <InputField
        title="Password"
        type="password"
        name="password"
        value={formData.password}
        placeholder="Enter the Password"
        handleChangeText={handleChange}
        errorMsg={errors.password}
      />

      {/* Error message */}
      {errors.common && <p className="text-red-500">{errors.common}</p>}

      {/* Submit button */}
      <div className="flex items-center gap-8 ">
        <CustomButton
          title={pathname === "/login" ? "Login now" : "Register"}
          otherStyles="text-base text-button-primary bg-button-secondary h-[48px] px-[19.5px]"
          handlePress={handleSubmit}
          isLoading={loading}
        />

        <a
          href={pathname === "/login" ? "/#" : "/login"}
          className="text-sm text-input-secondary"
        >
          {pathname === "/login"
            ? "Forget password ?"
            : "Already have account ?"}
        </a>
      </div>
      </form>
    </div>
  );
}
