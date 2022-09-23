import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'modalDelete',
  initialState: {
    modalDelete: false,
    idModal: null,
  },
  reducers: {
    openModalDelete(state, action) {
      state.modalDelete = true;
      state.idModal = action.payload;
    },
    closeModalDelete(state) {
      state.modalDelete = false;
      state.idModal = null;
    },
  },
});

export const { openModalDelete, closeModalDelete } = slice.actions;
export default slice.reducer;
