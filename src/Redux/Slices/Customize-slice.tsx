import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CustomizeState {
  view: string;
  user: string;
}

const initialState: CustomizeState = {
  view: 'Grid',
  user: 'AllContacts',
};

const customizeSlice = createSlice({
  name: 'customize',
  initialState,
  reducers: {
    setView(state, action: PayloadAction<string>) {
      state.view = action.payload;
    },
    setUser(state, action: PayloadAction<string>) {
      state.user = action.payload;
    },
  },
});

export const { setView, setUser } = customizeSlice.actions;

export default customizeSlice.reducer;
