import { createSlice } from '@reduxjs/toolkit';
import { logComplaints, resolveComplaints } from '../Data';

const complaintsSlice = createSlice({
  name: 'complaints',
  initialState: {
    logComplaints: logComplaints,
    resolveComplaints: resolveComplaints, 
    currentPage: 1,
    complaintsPerPage: 15,
  },
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setPage } = complaintsSlice.actions;
export default complaintsSlice.reducer;