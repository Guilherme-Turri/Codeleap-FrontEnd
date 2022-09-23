import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'modalEdit',
  initialState: {
    modalEdit: false,
    idModal: null,
  },
  reducers: {
    openModalEdit(state, action) {
      state.modalEdit = true;
      state.idModal = action.payload;
    },
    closeModalEdit(state) {
      state.modalEdit = false;
      state.idModal = null;
    },
  },
});

export const { openModalEdit, closeModalEdit } = slice.actions;
export default slice.reducer;
