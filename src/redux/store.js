import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { contactsSlice } from './contactsSlice';
import { filterSlice } from './filterSlice';

const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
