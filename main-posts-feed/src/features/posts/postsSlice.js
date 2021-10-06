import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'Za Warudo!' }
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload)
    },
    postUpdated(state, action) {
      const existingPost = state.find(post => post.id === action.payload.id);
      if(existingPost) {
        existingPost.title = action.payload.title;
        existingPost.content = action.payload.content;
      }
    }
  }
});

export const { postAdded, postUpdated } = postsSlice.actions;

export default postsSlice.reducer;