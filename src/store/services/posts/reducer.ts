import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {CreatePost, Post} from '@Shared/types';

import {posts} from '@Shared/assets/data';
import {editPostAction} from './actions';

interface PostState {
  posts: Post[];
}



const initialState: PostState = {
  posts,
};

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    deletePost: (state: PostState, {payload}: PayloadAction<string>) => {
      state.posts = state.posts.filter(list => list.id !== payload);
    },
    createPost: (
      state: PostState,
      {payload}: PayloadAction<CreatePost>,
    ) => {
      const createdAt = Date.now();
      state.posts = [
        ...state.posts,
        {...payload, createdAt, id: createdAt.toString()},
      ];
    },
    editPost: (state: PostState, {payload}: PayloadAction<{post: Post}>) => {
      state.posts = editPostAction(state.posts, payload.post);
    },
  },
});

export const {deletePost, createPost, editPost} = postSlice.actions;

export default postSlice.reducer;
