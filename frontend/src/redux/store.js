import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { userDataReducer } from './reducer';

const rootReducer = combineReducers({
  usersData: userDataReducer,
});


const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
