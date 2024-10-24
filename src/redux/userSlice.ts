import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  token: string | null;
  email: string | null;
}

const initialState: UserState = {
  token: localStorage.getItem("token") || null,
  email: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess(
      state,
      action: PayloadAction<{ token: string; email: string }>
    ) {
      state.token = action.payload.token;
      state.email = action.payload.email;

      localStorage.setItem("token", action.payload.token);
    },
    logout(state) {
      state.token = null;
      state.email = null;

      // Remove from localStorage
      localStorage.removeItem("token");
    },
  },
});

export const { loginSuccess, logout } = userSlice.actions;
export default userSlice.reducer;
