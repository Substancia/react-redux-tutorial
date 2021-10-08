import { createSlice, nanoid } from '@reduxjs/toolkit';
import { sub } from 'date-fns';
import { reactionsTypes } from './ReactionButtons';

var initializeEmptyReactionsProperty = {};
Object.keys(reactionsTypes).map(key => initializeEmptyReactionsProperty[key] = 0);

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!', date: sub(new Date(), { minutes: 10 }).toISOString(), reactions: initializeEmptyReactionsProperty },
  { id: '2', title: 'Second Post', content: 'Za Warudo!', date: sub(new Date(), { minutes: 5 }).toISOString(), reactions: initializeEmptyReactionsProperty }
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
            reactions: initializeEmptyReactionsProperty,
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
    },
    reactionAdded(state, action) {
      const existingPost = state.find(post => post.id === action.payload.id);
      if(existingPost) {
        existingPost.reactions[action.payload.reaction]++;
      }
    },
  }
});

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;

export const getLatestPostId = state => state.posts[state.posts.length - 1].id;

export default postsSlice.reducer;

export const selectAllPosts = state => state.posts;

export const selectPostById = (state, postId) => state.posts.find(post => post.id === postId);