import { createSlice, nanoid } from '@reduxjs/toolkit';
import { sub } from 'date-fns';

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!', date: sub(new Date(), { minutes: 10 }).toISOString() },
  { id: '2', title: 'Second Post', content: 'Za Warudo!', date: sub(new Date(), { minutes: 5 }).toISOString() }
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