import { createSelector } from "@reduxjs/toolkit";
import { selectItemsContacts } from "../contactsSlice";

export const selectNameFilter = (state) => state.filters.name;

export const selectResultsFilters = createSelector(
  [selectItemsContacts, selectNameFilter],
  (items, filterName) => {
    return items.filter(({ name }) => name.toLowerCase().includes(filterName));
  }
);
