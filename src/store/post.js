import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'post',
  initialState: {
    data: [],
    change: 0,
  },
  reducers: {
    setPost(state, action) {
      state.data = action.payload;
    },
    updatePost(state) {
      state.change++;
    },
  },
});

export const { setPost, updatePost } = slice.actions;
export default slice.reducer;
