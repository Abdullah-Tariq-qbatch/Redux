const { createSlice } = require("@reduxjs/toolkit");

const initialState = {};

const selectedSlice = createSlice({
  name: "selectedProduct",
  initialState,
  reducers: {
    select(state, action) {
      return action.payload;
    },
  },
});

export const { select } = selectedSlice.actions;
export default selectedSlice.reducer;
