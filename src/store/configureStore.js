import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import modalDelete from './modalDelete.js';
import modalEdit from './modalEdit.js';
import loginUser from './loginUser.js';
import post from './post.js';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const reducers = combineReducers({
  modalDelete,
  modalEdit,
  loginUser,
  post,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
