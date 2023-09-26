import { createSlice } from "@reduxjs/toolkit";

const initialSate = {
  name: "mokhles",
  email: "mokhles@gmail.com",
  userTasks: [],
};
const userSlice = createSlice({
  name: "userSlice",
  initialSate,
  reducers: {},
});
export default userSlice.actions;
