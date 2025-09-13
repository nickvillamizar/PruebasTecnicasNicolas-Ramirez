import { createSlice } from '@reduxjs/toolkit';

interface StyleState {
  currentStyle: number; // 0,1,2
}

const initialState: StyleState = {
  currentStyle: 0,
};

export const styleSlice = createSlice({
  name: 'style',
  initialState,
  reducers: {
    nextStyle: (state) => {
      state.currentStyle = (state.currentStyle + 1) % 3; // ciclos 0→1→2→0
    },
  },
});

export const { nextStyle } = styleSlice.actions;
export default styleSlice.reducer;
