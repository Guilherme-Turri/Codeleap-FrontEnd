import { configureStore, combineReducers } from '@reduxjs/toolkit';
import modalDelete from './modalDelete.js';
import modalEdit from './modalEdit.js';
import loginUser from './loginUser.js';
import post from './post.js';

const reducer = combineReducers({
  modalDelete,
  modalEdit,
  loginUser,
  post,
});
const store = configureStore({ reducer });

export default store;
