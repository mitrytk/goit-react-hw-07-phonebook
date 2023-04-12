import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsInitialState = {
  items: [],
  isLoading: '',
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = 'fetch';
    },
    [fetchContacts.fulfilled](state, { payload }) {
      state.isLoading = '';
      state.error = null;
      state.items = payload;
    },
    [fetchContacts.rejected](state, { payload }) {
      state.isLoading = '';
      state.error = payload;
    },
    [addContact.pending](state) {
      state.isLoading = 'addContact';
    },
    [addContact.fulfilled](state, { payload }) {
      state.isLoading = '';
      state.error = null;
      state.items = [...state.items, payload];
    },
    [addContact.rejected](state, { payload }) {
      state.isLoading = '';
      state.error = payload;
    },
    [deleteContact.pending](state, { meta }) {
      const id = meta.arg;
      state.isLoading = `deleteContact/id-${id}`;
    },
    [deleteContact.fulfilled](state, { payload }) {
      state.isLoading = '';
      state.error = null;
      const index = state.items.findIndex(contact => contact.id === payload.id);
      state.items.splice(index, 1);
    },
    [deleteContact.rejected](state, { payload }) {
      state.isLoading = '';
      state.error = payload;
    },
  },
});
