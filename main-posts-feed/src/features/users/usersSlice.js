import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 0, name: 'Sentienta' },
  { id: 1, name: 'Arlandria' },
  { id: 2, name: 'Substancia' }
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
});

export default usersSlice.reducer;