import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'Za Warudo!' }
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            user: userId,
            date: new Date().toISOString(),
          }
        }
      }
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

export const getLatestPostId = state => state.posts[state.posts.length - 1].id;

export default postsSlice.reducer;