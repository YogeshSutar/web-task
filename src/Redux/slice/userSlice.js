import { createSlice } from "@reduxjs/toolkit";

const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
const storedCurrentUser = JSON.parse(localStorage.getItem("currentUser")) || null;

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: storedUsers,
    currentUser: storedCurrentUser,
  },
  reducers: {
    register: (state, action) => {
      const { username } = action.payload;

      const userExists = state.users.some((user) => user.username === username);
      if (userExists) {
        console.log("Username already exists.");
        return;
      }

      state.users.push(action.payload);
      state.currentUser = action.payload;

      localStorage.setItem("users", JSON.stringify(state.users));
      localStorage.setItem("currentUser", JSON.stringify(state.currentUser));

      console.log("User registered successfully:", action.payload);
    },
    logIn: (state, action) => {
      const { username, password } = action.payload;
      const user = state.users.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        state.currentUser = user;
        localStorage.setItem("currentUser", JSON.stringify(user));
        console.log("Logged in successfully:", user);
      } else {
        console.log("Invalid username or password.");
      }
    },
    logout: (state) => {
      state.currentUser = null;
      localStorage.removeItem("currentUser");
      console.log("User logged out.");
    },
  },
});

export const { logIn, register, logout } = userSlice.actions;
export default userSlice.reducer;
