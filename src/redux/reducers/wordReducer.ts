import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IApiWordRequest } from '../../interfaces';
import { getWordAsync } from '../actions/actions';

interface IWordState {
  apiData: IApiWordRequest[] | null;
  isLoading: boolean;
  isError: boolean;
}

const initialState: IWordState = {
  apiData: null,
  isLoading: false,
  isError: false,
};

export const wordSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {
    resetWordState(state) {
      state.apiData = null;
      state.isLoading = false;
      state.isError = false;
    },
  },
  extraReducers: {
    [getWordAsync.pending.type]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [getWordAsync.fulfilled.type]: (state, action: PayloadAction<IApiWordRequest[]>) => {
      state.isLoading = false;
      state.isError = false;
      state.apiData = action.payload;
    },
    [getWordAsync.rejected.type]: (state) => {
      state.isLoading = false;
      state.apiData = null;
      state.isError = true;
    },
  },
});

export const wordReducer = wordSlice.reducer;
