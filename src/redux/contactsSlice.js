import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = [];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    delContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, delContact } = contactsSlice.actions;
