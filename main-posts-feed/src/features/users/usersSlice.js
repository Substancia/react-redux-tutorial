import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: 'Sentienta' },
  { id: 2, name: 'Arlandria' },
  { id: 3, name: 'Substancia' }
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
});

export default usersSlice.reducer;