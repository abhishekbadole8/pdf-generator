interface IFormErrors {
  name?: string;
  email?: string;
  password?: string;
  common?: string;
}

interface FormData {
  name?: string;
  email: string;
  password: string;
}

export const validateForm = (
  isLogin: boolean,
  formData: FormData,
  setErrors: (errors: IFormErrors) => void
): boolean => {
  const newErrors: IFormErrors = {};

  if (!formData.name && !isLogin) {
    newErrors.name = "Name is required";
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
  } else if (formData.name.length < 2 && !isLogin) {
    newErrors.name = "Name must be at least 2 characters long";
  }

  if (!formData.email) {
    newErrors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    newErrors.email = "Please enter a valid email address";
  }

  if (!formData.password) {
    newErrors.password = "Password is required";
  } else if (formData.password.length < 6) {
    newErrors.password = "Password must be at least 6 characters long";
  }

  setErrors(newErrors);

  // If there are no errors, return true
  return Object.keys(newErrors).length === 0;
};
