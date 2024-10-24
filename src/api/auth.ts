import axios from "axios";

export const loginUser = async (email: string, password: string) => {
  const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/user/login`, {
    email,
    password,
  });
  return response.data;
};

export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/user/register`, {
    name,
    email,
    password,
  });
  return response.data;
};
