import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => {
  return state.contacts.items;
};

export const getFilter = state => {
  return state.contacts.filter;
};

// export const getLoading = state => state.contacts.loading;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  },
);
