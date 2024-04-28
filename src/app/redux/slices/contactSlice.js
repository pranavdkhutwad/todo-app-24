import { createSlice } from "@reduxjs/toolkit";

export const contactSlice = createSlice({
  name: "contact",
  initialState: {
    name: "Ganesh",
    num: "123",
  },
  reducers: {},
});

// export const {} = contactSlice.actions;

export default contactSlice.reducer;
