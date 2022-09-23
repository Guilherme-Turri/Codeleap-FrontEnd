import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'loginUser',
  initialState: {
    logged: false,
    data: null,
  },
  reducers: {
    setLogged(state, action) {
      state.logged = true;
      state.data = action.payload;
    },
    setUnlogged(state) {
      state.logged = false;
      state.data = null;
    },
  },
});

export const { setLogged, setUnlogged } = slice.actions;
export default slice.reducer;
